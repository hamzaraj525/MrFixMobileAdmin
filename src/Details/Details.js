import React from 'react';
import {
  Text,
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import style from './style';
import database from '@react-native-firebase/database';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';

function Details({navigation, route}) {
  const {items} = route.params;

  // const disableFixer = () => {
  //   auth()
  //     .update(items.userId, {
  //       disabled: true,
  //     })
  //     .then(userRecord => {
  //       // See the UserRecord reference doc for the contents of userRecord.
  //       console.log('Successfully updated user' + userRecord);
  //     })
  //     .catch(error => {
  //       console.log('Error updating user:', error);
  //     });
  // };

  const updateStatus1 = () => {
    database()
      .ref('riders/' + items.key)
      .update({
        pic1Verified: true,
      })
      .then(() => {
        console.log('--updated--1.');
      });
  };
  const updateStatus2 = () => {
    database()
      .ref('riders/' + items.key)
      .update({
        pic2Verified: true,
      })
      .then(() => {
        console.log('--updated--2.');
      });
  };
  const updateStatus3 = () => {
    database()
      .ref('riders/' + items.key)
      .update({
        pic3Verified: true,
      })
      .then(() => {
        console.log('--updated--3.');
      });
  };

  const userDetails = () => {
    return (
      <>
        <View style={style.cartItemsContainer}>
          <View style={style.statusContainer}>
            <Text style={[style.subTitxt, {}]}>Name</Text>
            <Text style={[style.subTitxtTwo, {}]}>{items.userName}</Text>
          </View>
        </View>

        {items.FixerPic1 !== '' ||
        items.FixerPic2 !== '' ||
        items.FixerPic3 !== '' ? (
          <View style={style.subOrderContainer}>
            <FastImage
              resizeMode="cover"
              style={style.orderImgs}
              source={{uri: items.FixerPic1}}
            />
            <Pressable
              style={style.contiBtn}
              onPress={() => {
                updateStatus1();
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                {items.pic1Verified === true ? 'Done' : 'Approve'}
              </Text>
            </Pressable>
            <FastImage
              resizeMode="cover"
              style={style.orderImgs}
              source={{uri: items.FixerPic2}}
            />
            <Pressable
              style={style.contiBtn}
              onPress={() => {
                updateStatus2();
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                {items.pic2Verified === true ? 'Done' : 'Approve'}
              </Text>
            </Pressable>
            <FastImage
              resizeMode="cover"
              style={style.orderImgs}
              source={{uri: items.FixerPic3}}
            />
            <Pressable
              style={style.contiBtn}
              onPress={() => {
                updateStatus3();
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '700',
                }}>
                {items.pic3Verified === true ? 'Done' : 'Approve'}
              </Text>
            </Pressable>
          </View>
        ) : (
          <ActivityIndicator size="large" color="red" />
        )}

        <View style={style.cartItemsContainer}>
          <View style={style.priceTxtContainer}>
            <Text style={[style.subTitxt]}>Phone#</Text>
            <Text style={[style.subTitxtTwo]}>{items.userPhone}</Text>
          </View>
        </View>

        <Pressable
          style={[style.contiBtn, {backgroundColor: 'black'}]}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '700',
            }}>
            Back
          </Text>
        </Pressable>
        {/* <Pressable
          style={[style.contiBtn, {backgroundColor: 'black', marginTop: '1%'}]}
          onPress={() => {
            disableFixer();
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              fontWeight: '700',
            }}>
            Block
          </Text>
        </Pressable> */}
      </>
    );
  };

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.orderDetailTxt}>Fixer Details</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: '35%',
        }}
        style={{marginTop: '2%'}}>
        {userDetails()}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Details;
