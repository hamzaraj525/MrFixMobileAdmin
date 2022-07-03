import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Pressable,
  FlatList,
  Dimensions,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
function OrderDetail({navigation, route, props}) {
  const {Items, orders} = route.params;

  const renderFooter = ({item, index}) => {
    return (
      <View style={{paddingHorizontal: '4%'}}>
        <View
          style={[
            styles.subViews,
            {
              alignSelf: 'flex-start',
              marginTop: 10,
              borderRadius: 12,
              width: '90%',
              height: 130,
              alignItems: 'flex-start',
              marginTop: '3%',
              backgroundColor: '#EDF6FF',
              paddingHorizontal: '4%',
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {
                fontSize: 18,
                fontWeight: '600',
                color: '#2459a9',
              },
            ]}>
            Customer Information
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 19, fontWeight: '500', color: 'black'},
            ]}>
            {Items.userName}
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 15, fontWeight: '700', color: 'grey'},
            ]}>
            {Items.userMail}
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 15, fontWeight: '500', color: 'black'},
            ]}>
            {Items.userContact}
          </Text>
        </View>
        <View
          style={[
            styles.subViews,
            {
              alignSelf: 'flex-start',
              marginTop: '3%',
              alignItems: 'flex-start',
              borderRadius: 12,
              width: '80%',
              height: 100,
              backgroundColor: '#EDF6FF',
              paddingHorizontal: '4%',
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {fontSize: 18, fontWeight: '600', color: '#2459a9'},
            ]}>
            Location Address
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 15, fontWeight: '700', color: 'grey'},
            ]}>
            ABC Lahore
          </Text>
        </View>
        <View
          style={[
            styles.subViews,
            {
              marginTop: '3%',
              alignSelf: 'flex-start',
              alignItems: 'flex-start',
              borderRadius: 12,
              width: '70%',
              height: 80,
              marginTop: '3%',
              backgroundColor: '#EDF6FF',
              paddingHorizontal: '4%',
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {
                fontSize: 18,
                fontWeight: '600',
                color: '#2459a9',
              },
            ]}>
            Total Price
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 15, fontWeight: '700', color: 'grey'},
            ]}>
            Rs {Items.TotalPrice}
          </Text>
        </View>
      </View>
    );
  };

  const renderData = ({item, index}) => {
    return (
      <Pressable onPress={() => {}} style={styles.parent}>
        <View style={styles.subPraent}>
          <View
            style={[
              styles.productContainer,
              {backgroundColor: index % 2 === 0 ? '#fdeae4' : '#EDF6FF'},
            ]}>
            <View
              style={[
                styles.productContainer,
                {
                  paddingHorizontal: '2%',
                  borderRadius: 12,
                  marginTop: 0,
                  width: 140,
                  flexDirection: 'column',
                  height: 160,
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                },
              ]}>
              <Text
                style={[
                  styles.txt,
                  {
                    fontSize: 14,
                    alignSelf: 'flex-end',
                    fontWeight: '800',
                    color: '#2459a9',
                  },
                ]}>
                Rs {item.Price}
              </Text>
              <Image
                style={{borderRadius: 12, width: 130, height: 130}}
                source={{
                  uri: item.img,
                }}
              />
            </View>
            <Text style={{fontSize: 16, color: 'black', alignSelf: 'center'}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 14, color: 'grey', alignSelf: 'center'}}>
              {item.SubTitle}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f9f9f9'}}>
      <View
        style={{
          marginTop: '4%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: '5%',
          marginBottom: '4%',
        }}>
        <Text style={{fontSize: 30}}> Details</Text>
        <View
          style={{
            paddingHorizontal: '5%',
            backgroundColor: '#2459a9',
            height: 1,
            width: 100,
          }}
        />
        <View
          style={{
            marginTop: '1%',
            paddingHorizontal: '5%',
            backgroundColor: '#2459a9',
            height: 1,
            width: 90,
          }}
        />
      </View>

      <FlatList
        data={orders}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={renderData}
        ListFooterComponent={renderFooter}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
export default OrderDetail;
const styles = StyleSheet.create({
  img: {borderRadius: 10, width: 100, height: 100},
  parent: {
    width: Dimensions.get('window').width / 2,
  },
  subPraent: {
    marginBottom: '4%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  productContainer: {
    borderRadius: 12,
    backgroundColor: '#fdeae4',
    marginTop: '5%',
    width: 160,
    height: 220,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  subViews: {
    borderRadius: 20,
    backgroundColor: 'red',
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {marginTop: 5, color: 'white', fontSize: 18, fontWeight: '600'},
});
