import React, {useState, useEffect} from 'react';
import style from './style';
import database from '@react-native-firebase/database';
import {
  Text,
  View,
  Image,
  Pressable,
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {imgs} from './../Constraints/Constraints';
function ApproveScreen({navigation}) {
  const [loader, setLoader] = useState(false);
  const [color, setColor] = useState(0);
  const [list, setList] = useState([]);

  useEffect(() => {
    setLoader(true);
    database()
      .ref('/riders')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          li.push({
            key: child.key,
            FixerPic1: child.val().FixerPic1,
            FixerPic2: child.val().FixerPic2,
            FixerPic3: child.val().FixerPic3,
            pic1Verified: child.val().pic1Verified,
            pic2Verified: child.val().pic2Verified,
            pic3Verified: child.val().pic3Verified,
            userPhone: child.val().userPhone,
            userName: child.val().userName,
            userMail: child.val().userMail,
            userId: child.val().userId,
          });
        });
        setLoader(false);
        setList(li);
      });
  }, []);

  const changeColor = id => {
    setColor(id);
  };

  const PendingOrders = () => {
    return list.map((item, index) => {
      return (
        <View key={item.key}>
          {item.pic1Verified === false ||
          item.pic2Verified === false ||
          item.pic3Verified === false ? (
            <View key={item.key} style={style.cartItemsContainer}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 5,
                }}>
                <Text style={[style.subTitxt]}>Status</Text>
                <View
                  style={{
                    width: '30%',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  {item.pic1Verified === false ? (
                    <Image source={imgs.img} style={style.subImg} />
                  ) : (
                    <Image source={imgs.img2} style={style.subImg} />
                  )}
                  {item.pic2Verified === false ? (
                    <Image source={imgs.img} style={style.subImg} />
                  ) : (
                    <Image source={imgs.img2} style={style.subImg} />
                  )}
                  {item.pic3Verified === false ? (
                    <Image source={imgs.img} style={style.subImg} />
                  ) : (
                    <Image source={imgs.img2} style={style.subImg} />
                  )}
                </View>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: 5,
                }}>
                <Text style={[style.subTitxt, {color: 'black'}]}>Contact#</Text>
                <Text style={[style.subTitxt, {color: 'black'}]}>
                  {item.userPhone}
                </Text>
              </View>

              <Pressable
                style={style.contiBtn}
                onPress={() => {
                  navigation.navigate('Details', {
                    items: item,
                  });
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 17,
                    fontWeight: '700',
                  }}>
                  View Details
                </Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      );
    });
  };
  const ConfirmedUsers = () => {
    return list.map(item => {
      return (
        <View key={item.key}>
          {item.pic1Verified === true &&
          item.pic2Verified === true &&
          item.pic3Verified === true ? (
            <>
              <View key={item.key} style={style.cartItemsContainer}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <Text style={[style.subTitxt]}>Status</Text>
                  <View
                    style={{
                      width: '30%',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      marginTop: 5,
                    }}>
                    {item.pic1Verified === false ? (
                      <Image source={imgs.img} style={style.subImg} />
                    ) : (
                      <Image source={imgs.img2} style={style.subImg} />
                    )}
                    {item.pic2Verified === false ? (
                      <Image source={imgs.img} style={style.subImg} />
                    ) : (
                      <Image source={imgs.img2} style={style.subImg} />
                    )}
                    {item.pic3Verified === false ? (
                      <Image source={imgs.img} style={style.subImg} />
                    ) : (
                      <Image source={imgs.img2} style={style.subImg} />
                    )}
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <Text style={[style.subTitxt, {color: 'black'}]}>
                    Contact#
                  </Text>
                  <Text style={[style.subTitxt, {color: 'black'}]}>
                    {item.userPhone}
                  </Text>
                </View>

                <Pressable
                  style={style.contiBtn}
                  onPress={() => {
                    navigation.navigate('Details', {
                      items: item,
                    });
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 17,
                      fontWeight: '700',
                    }}>
                    View Details
                  </Text>
                </Pressable>
              </View>
            </>
          ) : null}
        </View>
      );
    });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      {/* <Text
        style={{
          fontFamily: 'RobotoSlab-Bold',
          fontSize: 20,
          color: 'black',
          fontWeight: '600',
          marginTop: '2%',
          alignSelf: 'center',
        }}>
        Approve
      </Text> */}

      <View style={style.btnContainer}>
        <Pressable
          style={color === 1 ? style.btnColor : style.btnColorPink}
          onPress={() => {
            changeColor(1);
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: 16,
              fontFamily: 'RobotoSlab-Bold',
            }}>
            Pending
          </Text>
        </Pressable>
        <Pressable
          style={color === 2 ? style.btnColor : style.btnColorPink}
          onPress={() => {
            changeColor(2);
          }}>
          <Text
            style={{
              color: 'black',
              fontFamily: 'RobotoSlab-Bold',
              fontSize: 16,
            }}>
            Approved
          </Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '35%'}}
        style={{marginTop: '2%'}}>
        {color === 1 ? (
          <View style={{flex: 1}}>
            {loader ? (
              <ActivityIndicator
                style={{marginTop: 50}}
                size="large"
                color="#0000ff"
              />
            ) : (
              PendingOrders()
            )}
          </View>
        ) : color === 2 ? (
          <View style={{flex: 1}}>
            {loader ? (
              <ActivityIndicator
                style={{marginTop: 50}}
                size="large"
                color="#0000ff"
              />
            ) : (
              ConfirmedUsers()
            )}
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

export default ApproveScreen;
