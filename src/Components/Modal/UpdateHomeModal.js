import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  ActivityIndicator,
  Animated,
  Pressable,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const {width, height} = Dimensions.get('window');

const UpdateHomeModal = props => {
  const [title, setTitle] = useState('');
  const [SubTitle, setSubTitle] = useState('');
  const [Price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const updateData = () => {
    const id = props.code;
    const key = id.toString();
    setLoading(true);
    firestore()
      .collection('personalServices')
      .doc(key)
      .update({
        title: title,
        subTitle: SubTitle,
        price: Price,
      })
      .then(() => {
        setLoading(false);
        props.closeModal();
      });
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.updateModalVisible}
      onRequestClose={() => {
        props.closeModal();
      }}>
      <SafeAreaView style={styles.container}>
        <Animated.View style={styles.containerr}>
          <View style={styles.whiteContainer}>
            <View style={styles.passwordContainer}>
              <TextInput
                autoFocus={false}
                style={styles.TiName}
                value={title}
                onChangeText={text => {
                  setTitle(text);
                }}
                placeholder="Enter Title"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                autoFocus={false}
                style={styles.TiName}
                value={SubTitle}
                onChangeText={text => {
                  setSubTitle(text);
                }}
                placeholder="Enter SubTitle"
                placeholderTextColor={'grey'}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                keyboardType="numeric"
                autoFocus={false}
                style={styles.TiName}
                value={Price}
                onChangeText={text => {
                  setPrice(text);
                }}
                placeholder="Enter Price"
                placeholderTextColor={'grey'}
              />
            </View>

            <Pressable
              style={styles.loginBtn}
              onPress={() => {
                updateData();
              }}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.okBtnTxt}>{props.code}</Text>
              )}
            </Pressable>
          </View>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};
export default UpdateHomeModal;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
  },
  whiteContainer: {
    width: width - 50,
    height: height / 2,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  passwordContainer: {
    marginTop: '10%',
    flexDirection: 'row',
    backgroundColor: '#F6F3F5',
    borderRadius: 25,
    padding: 12,
    width: '80%',
    height: 45,
    alignItems: 'center',
    alignSelf: 'center',
  },
  TiName: {
    fontFamily: 'RobotoSlab-Bold',
    width: '90%',
    height: 50,
    marginLeft: 6,
  },
  loginBtn: {
    width: width / 4,
    height: 35,
    borderRadius: 25,
    backgroundColor: 'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  containerr: {
    width: width - 50,
    height: height / 2,
    backgroundColor: '#ffffff',
    borderRadius: 33,
  },

  okBtnTxt: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 17,
    fontWeight: '800',
    color: 'white',
  },
});
