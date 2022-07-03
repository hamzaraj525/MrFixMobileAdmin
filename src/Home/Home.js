import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './style';
import database from '@react-native-firebase/database';
const Home = ({navigation}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    database()
      .ref('/cartItems')
      .on('value', snapshot => {
        var li = [];
        snapshot.forEach(child => {
          // console.log(child.val());
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
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 30,
          fontSize: 40,
          color: 'black',
        }}>
        Mr.Fix
      </Text>
      <ScrollView contentContainerStyle={{flex: 1}}>
        <View style={style.mainSubViewContainer}>
          <View
            style={[
              style.subViews,
              {
                alignItems: 'flex-start',
                borderRadius: 12,
                width: '82%',
                height: '15%',
                marginTop: '0%',
                backgroundColor: '#EDF6FF',
                paddingHorizontal: '4%',
              },
            ]}>
            <Text
              style={[
                style.txt,
                {fontSize: 19, fontWeight: '600', color: 'black'},
              ]}>
              Total Orders
            </Text>
            <Text
              style={[
                style.txt,
                {fontSize: 36, fontWeight: '700', color: '#2459a9'},
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
              style={[style.subViews, {backgroundColor: '#DA2328'}]}>
              <MaterialCommunityIcons
                name="face-man-shimmer"
                size={30}
                color="#fff"
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
              style={[style.subViews, {backgroundColor: 'grey'}]}>
              <MaterialCommunityIcons
                name="home-floor-a"
                size={38}
                color="#fff"
              />
              <Text style={style.txt}>Upload</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Orders');
            }}
            style={[
              style.subViews,
              {
                borderRadius: 0,
                width: '82%',
                height: '15%',
                marginTop: '2%',
                backgroundColor: 'red',
              },
            ]}>
            <Ionicons name="md-newspaper" size={30} color="#fff" />
            <Text style={[style.txt, {}]}> Orders</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
