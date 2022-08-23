import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import style from './style';
import database from '@react-native-firebase/database';
const {width, height} = Dimensions.get('window');
const Home = ({navigation}) => {
  const [list, setList] = useState([]);
  const [fixer, setFixer] = useState([]);
  const [users, setUsers] = useState([]);
  const [fixerPending, setFixerPending] = useState('');

  useEffect(() => {
    CartItemsData();
    FixersData();
    UsersData();
  }, []);

  const UsersData = () => {
    database()
      .ref('/users')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          li.push({
            key: child.key,
            userPhone: child.val().userPhone,
            userName: child.val().userName,
            userMail: child.val().userMail,
            userId: child.val().userId,
          });
        });

        setUsers(li);
      });
  };

  const CartItemsData = () => {
    database()
      .ref('/cartItems')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          li.push({
            key: child.key,
            TotalPrice: child.val().TotalPrice,
            reservation: child.val().reservation,
            message: child.val().message,
            OrderTime: child.val().OrderTime,
            Order: child.val().Order,
            type: child.val().type,
          });
        });

        setList(li);
      });
  };

  const FixersData = () => {
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
        setFixerPending(li.length);
        setFixer(li);
      });
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '6%'}}>
        <View style={style.mainSubViewContainer}>
          <Text
            style={{
              alignSelf: 'flex-start',
              left: 20,
              marginTop: 20,
              marginBottom: 5,
              fontSize: 31,
              color: '#3372e2',
            }}>
            Hi! there...
          </Text>
          <View
            style={[
              style.subViews,
              {
                alignItems: 'flex-start',
                borderRadius: 12,
                width: width - 60,
                height: height / 6,
                marginTop: '2%',
                backgroundColor: '#3372e2',
                paddingHorizontal: '4%',
              },
            ]}>
            <Text
              style={[
                style.txt,
                {fontSize: 19, fontWeight: '700', color: 'white'},
              ]}>
              Total Orders
            </Text>
            <Text
              style={[
                style.txt,
                {fontSize: 30, fontWeight: '600', color: 'white'},
              ]}>
              {list.length}
            </Text>
          </View>
          <View style={style.subViewContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('UploadPersonalService');
              }}
              style={[
                style.subViews,
                {
                  backgroundColor: '#DA2328',
                },
              ]}>
              <MaterialCommunityIcons
                name="face-man-shimmer"
                size={27}
                color="white"
              />

              <Text style={style.txt}> Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('UpdateHomeServices');
              }}
              style={[style.subViews, {backgroundColor: 'orange'}]}>
              <MaterialCommunityIcons
                name="home-floor-a"
                size={38}
                color="#fff"
              />
              <Text style={style.txt}> Update</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.subViewContainer, {}]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('UpdatePersonal');
              }}
              style={style.subViews}>
              <MaterialCommunityIcons
                name="face-man-shimmer"
                size={30}
                color="#fff"
              />
              <Text style={style.txt}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('UploadHomeService');
              }}
              style={[style.subViews, {backgroundColor: 'red'}]}>
              <MaterialCommunityIcons
                name="home-floor-a"
                size={38}
                color="#fff"
              />
              <Text style={style.txt}>Upload</Text>
            </TouchableOpacity>
          </View>
          <View style={[style.subViewContainer, {}]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('Orders');
              }}
              style={[style.subViews, {backgroundColor: 'orange'}]}>
              <Ionicons name="md-newspaper" size={30} color="#fff" />
              <Text style={[style.txt, {}]}> Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                navigation.navigate('ApproveScreen');
              }}
              style={[style.subViews, {backgroundColor: '#DA2328'}]}>
              <MaterialIcons name="verified" size={30} color="#fff" />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  marginTop: 5,
                }}>
                {/* {fixer.map(i => {
                  if (
                    i.pic1Verified === true ||
                    i.pic2Verified === true ||
                    i.pic3Verified === true
                  ) {
                    return (
                      <Text key={i.key} style={[style.txt, {marginTop: 0}]}>
                        {fixer.length}
                      </Text>
                    );
                  }
                })} */}

                <Text style={[style.txt, {marginTop: 0}]}>Verify</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={[
              style.subViews,
              {
                alignItems: 'flex-start',
                borderRadius: 12,
                width: width - 60,
                height: height / 6,
                backgroundColor: '#3372e2',
                paddingHorizontal: '4%',
              },
            ]}>
            <Text style={[style.txt, {fontWeight: '700'}]}>Total Experts</Text>

            <Text
              style={[
                style.txt,
                {fontSize: 30, fontWeight: '600', color: 'white'},
              ]}>
              {fixer.length}
            </Text>
          </View>
          <View
            style={[
              style.subViews,
              {
                marginTop: '2%',
                alignItems: 'flex-start',
                borderRadius: 12,
                width: width - 60,
                height: height / 6,
                backgroundColor: '#3372e2',
                paddingHorizontal: '4%',
              },
            ]}>
            <Text style={[style.txt, {fontWeight: '700'}]}>Total Users</Text>
            <Text
              style={[
                style.txt,
                {fontSize: 30, fontWeight: '600', color: 'white'},
              ]}>
              {users.length}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
