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
import UpdateHomeModal from './../Components/Modal/UpdateHomeModal';

function UpdateHomeServices({navigation}) {
  const [list, setList] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);

  useEffect(() => {
    HomeServices();
  }, []);

  const closeModal = () => {
    setUpdateModalVisible(false);
  };

  const HomeServicesList = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setCode(item.key);
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
            {/* <Image
              style={{borderRadius: 12, width: 130, height: 130}}
              source={{
                uri: item.img,
              }}
            /> */}
            <Text style={{fontSize: 16, color: 'black', alignSelf: 'center'}}>
              {item.title}
            </Text>
            <Text style={{fontSize: 14, color: 'grey', alignSelf: 'center'}}>
              {item.SubTitle}
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
              Rs {item.Price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const HomeServices = () => {
    setLoading(true);
    var newArray = [];
    firestore()
      .collection('Services')
      .get()
      .then(querySnapshot => {
        console.log('Total services: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          newArray.push(documentSnapshot.data());
        });
      })
      .then(testing => {
        console.log('New home Push is =', newArray);
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
        <Text style={{fontSize: 30, alignSelf: 'center'}}>Update </Text>
        <FlatList
          numColumns={2}
          data={list}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={HomeServicesList}
          keyExtractor={(item, index) => 'key' + index}
        />
      </>

      <UpdateHomeModal
        code={code}
        updateModalVisible={updateModalVisible}
        closeModal={closeModal}
      />
    </View>
  );
}
export default UpdateHomeServices;
