import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

function HomeScreen({navigation}) {
  const [list, setList] = useState([]);

  const showScheduleNotification = () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + 1);
    PushNotificationIOS.scheduleLocalNotification({
      alertTitle: 'Mr.Fix',
      alertBody: 'A New Order Is Received 😃',
      fireDate: date.toISOString(),
      soundName: 'default',
    });
  };

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

          // if (child.val().key !== null) {
          //   showScheduleNotification();
          // } else {
          //   console.log('no notification');
          // }
        });
        showScheduleNotification();
        setList(li);
      });
  }, []);

  const renderOrders = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Orders', {
              Items: item,
              orders: item.Order,
            });
          }}
          style={{
            marginTop: '3%',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: 100,
            width: '90%',
            backgroundColor: 'gold',
          }}>
          <Text style={{color: 'black'}}>{item.reservation}</Text>
          <Text style={{color: 'black'}}>{item.OrderTime}</Text>
          <Text style={{color: 'black'}}>
            Total Orderd Items:{item.Order.length}
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: 'pink',
              alignItems: 'center',
              justifyContent: 'center',
              height: 50,
              width: 50,
            }}
            onPress={() => {
              deleteUser(item);
            }}>
            <Text style={{color: 'black'}}>Delete</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };
  const deleteUser = Item => {
    database()
      .ref('cartItems/' + Item.key)
      .remove()
      .then(() => {
        alert('Order Deleted');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '500',
          alignSelf: 'center',
        }}>
        Orders
      </Text>

      <FlatList
        data={list}
        renderItem={renderOrders}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}
export default HomeScreen;
const styles = StyleSheet.create({
  img: {borderRadius: 10, width: 100, height: 100},
});
