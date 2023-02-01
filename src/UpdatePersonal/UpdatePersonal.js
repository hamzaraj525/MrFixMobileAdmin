import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';
import UpdateModal from './../Components/Modal/UpdateModal';
import FastImage from 'react-native-fast-image';
function UpdatePersonal({navigation}) {
  const [list, setList] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  useEffect(() => {
    personalServicesData();
  }, []);

  const closeModal = () => {
    setUpdateModalVisible(false);
  };

  const personalList = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setCode(item.id);
          setUpdateModalVisible(true);
        }}
        style={style.parent}>
        <View style={style.subPraent}>
          <View
            style={[
              style.productContainer,
              {
                alignItems: 'center',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                backgroundColor: '#EDF6FF',
              },
            ]}>
            <FastImage
              resizeMode={FastImage.resizeMode.cover}
              priority={FastImage.priority.high}
              style={{borderRadius: 12, width: 130, height: 130}}
              source={{uri: item.data.img}}
            />

            <Text style={{fontSize: 16, color: 'black', alignSelf: 'center'}}>
              {item.data.title}
            </Text>
            <Text style={{fontSize: 14, color: 'grey', alignSelf: 'center'}}>
              {item.data.subTitle}
            </Text>
            <Text
              style={[
                style.txt,
                {
                  fontSize: 14,
                  alignSelf: 'center',
                  right: '4%',
                  fontWeight: '800',
                  color: '#2459a9',
                },
              ]}>
              Rs {item.data.Price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const personalServicesData = () => {
    setLoading(true);
    var newArray = [];
    firestore()
      .collection('PersonalServices')
      .get()
      .then(querySnapshot => {
        console.log('Total personal services: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          newArray.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
        });
      })
      .then(testing => {
        console.log('New Personal Push is =', newArray);
        setLoading(false);
        setList(newArray);
      })
      .catch(error => {
        alert(error);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <>
        <Text style={{fontSize: 30, alignSelf: 'center', fontWeight: '700'}}>
          Update
        </Text>
        {loading ? (
          <ActivityIndicator size={'large'} color="#3372e2" />
        ) : (
          <FlatList
            numColumns={2}
            data={list}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={personalList}
            keyExtractor={(item, index) => 'key' + index}
          />
        )}
      </>

      <UpdateModal
        code={code}
        updateModalVisible={updateModalVisible}
        closeModal={closeModal}
      />
    </View>
  );
}
export default UpdatePersonal;
