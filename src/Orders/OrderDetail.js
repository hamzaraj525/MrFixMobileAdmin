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
      <View style={{paddingHorizontal: '4%', paddingBottom: 20}}>
        <View
          style={[
            styles.subViews,
            {
              alignSelf: 'center',
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
              {fontSize: 16, fontWeight: '500', color: 'black'},
            ]}>
            {Items.userName}
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 12, fontWeight: '700', color: 'grey'},
            ]}>
            {Items.userMail}
          </Text>
          <Text
            style={[
              styles.txt,
              {fontSize: 13, fontWeight: '500', color: 'black'},
            ]}>
            {Items.userContact}
          </Text>
        </View>
        <View
          style={[
            styles.subViews,
            {
              alignSelf: 'center',
              marginTop: '3%',
              alignItems: 'flex-start',
              borderRadius: 12,
              width: '90%',
              height: 100,
              backgroundColor: '#EDF6FF',
              paddingHorizontal: '4%',
            },
          ]}>
          <Text
            style={[
              styles.txt,
              {fontSize: 18, marginTop: 0, fontWeight: '600', color: '#2459a9'},
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
              alignSelf: 'center',
              alignItems: 'flex-start',
              borderRadius: 12,
              width: '90%',
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
              {
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                backgroundColor: index % 2 === 0 ? '#fdeae4' : '#EDF6FF',
              },
            ]}>
            <Text
              style={[
                styles.txt,
                {
                  fontSize: 14,
                  alignSelf: 'flex-end',
                  right: '4%',
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
          alignSelf: 'center',
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
