import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Pressable,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
function Orders({navigation, route, props}) {
  const {Items, orders} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          marginTop: '4%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={{fontSize: 20, alignSelf: 'center'}}>Back</Text>
          {/* <Ionicons
            style={{}}
            name={'arrow-back-outline'}
            size={30}
            color={'black'}
          /> */}
        </TouchableOpacity>
        <Text style={{fontSize: 30, alignSelf: 'center'}}>Orders Details</Text>
        <Pressable
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {}}>
          {/* <Ionicons style={{}} name={'share'} size={30} color={'white'} /> */}
        </Pressable>
      </View>

      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'column',
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <Text style={{fontSize: 17}}>Schedule:{Items.reservation}</Text>
          <Text style={{fontSize: 17}}>Message:{Items.message}</Text>
          <Text style={{fontSize: 17}}>Order Time:{Items.OrderTime}</Text>
          <Text style={{fontSize: 17}}>Total Price:{Items.TotalPrice}</Text>

          {orders.map(element => {
            return (
              <View
                key={element.key}
                style={{
                  width: '90%',
                  height: 260,
                  margin: 8,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Text style={{fontSize: 17}}>Title:{element.title}</Text>
                <Text style={{fontSize: 17}}>
                  Service Price:{element.Price}
                </Text>
                <Text style={{fontSize: 17}}>SubTitle{element.SubTitle}</Text>
                <Text style={{fontSize: 17}}>type{element.type}</Text>
                <Image style={styles.img} source={{uri: element.img}} />
                <View
                  style={{width: '100%', backgroundColor: 'black', height: 1}}
                />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default Orders;
const styles = StyleSheet.create({
  img: {borderRadius: 10, width: 100, height: 100},
});
