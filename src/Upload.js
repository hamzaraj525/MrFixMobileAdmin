import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';

function Upload({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{fontSize: 30, alignSelf: 'center'}}>Upload Screen </Text>
    </SafeAreaView>
  );
}
export default Upload;
const styles = StyleSheet.create({
  img: {borderRadius: 10, width: 100, height: 100},
});
