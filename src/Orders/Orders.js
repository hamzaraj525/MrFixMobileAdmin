import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import database from '@react-native-firebase/database';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {DataTable} from 'react-native-paper';

function Orders({navigation}) {
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
            userName: child.val().userName,
            userMail: child.val().userMail,
            userContact: child.val().userContact,
          });
        });

        setList(li);
      });
  }, []);

  const renderHeader = ({item}) => {
    return (
      <View style={{}}>
        <View
          style={{
            marginTop: '4%',
            alignSelf: 'flex-start',
            left: '7%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#2459a9',
              fontWeight: '600',
              fontSize: 20,
            }}>
            All Orders
          </Text>

          <View
            style={{
              marginTop: '0.5%',
              paddingHorizontal: '5%',
              backgroundColor: 'grey',
              height: 1,
              width: 90,
            }}
          />
          <View
            style={{
              marginTop: '0.5%',
              paddingHorizontal: '5%',
              backgroundColor: 'grey',
              height: 1,
              width: 80,
            }}
          />
        </View>
        <View
          style={{
            marginTop: '4%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            alignSelf: 'center',
            padding: '2%',
            width: '100%',
          }}>
          <Text style={styles.txtHead}>No</Text>
          <Text style={styles.txtHead}>Order Date</Text>
          <Text style={styles.txtHead}>Items(s)</Text>
        </View>
      </View>
    );
  };

  const renderOrders = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('OrderDetail', {
              Items: item,
              orders: item.Order,
            });
          }}
          style={{
            marginTop: '4%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            alignSelf: 'center',
            padding: '2%',
            width: '90%',
            height: 60,
            backgroundColor: '#f5f7fe',
          }}>
          <Text style={styles.txtItems}>{index}</Text>
          <Text style={styles.txtItems}>{item.OrderTime}</Text>
          <Text style={styles.txtItems}>{item.Order.length}</Text>
          {/* <TouchableOpacity
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
          </TouchableOpacity> */}
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
          marginLeft: '4%',
          fontWeight: '600',
          fontSize: 32,
          marginTop: '3%',
          color: 'black',
        }}>
        Orders 😍
      </Text>

      <FlatList
        data={list}
        renderItem={renderOrders}
        ListHeaderComponent={renderHeader}
        keyExtractor={item => item.key}
      />
    </SafeAreaView>
  );
}
export default Orders;
const styles = StyleSheet.create({
  tableCont: {
    paddingTop: 10,
  },
  img: {borderRadius: 10, width: 100, height: 100},
  txtHead: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20,
  },
  txtItems: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
});
