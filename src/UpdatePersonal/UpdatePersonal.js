import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';

function UpdatePersonal({navigation}) {
  const [list, setList] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    personalServicesData();
  }, []);

  const updateData = ({item, index}) => {
    firestore()
      .collection('PersonalServices')
      .doc(item.key)
      .update({
        title: code,
      })
      .then(() => {
        console.log('Data updated!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const personalList = ({item, index}) => {
    return (
      <View style={style.listItem}>
        <TextInput
          style={style.TiName}
          value={item.title}
          onChangeText={text => {
            updateData(text, {item, index});
          }}
          onEndEditing={() => {
            updateData({item, index});
          }}
        />
      </View>
    );
  };

  const personalServicesData = () => {
    setLoading(true);
    var newArray = [];
    firestore()
      .collection('PersonalServices')
      .get()
      .then(querySnapshot => {
        console.log('Total services: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          newArray.push(documentSnapshot.data());
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
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      {loading ? (
        <View style={style.loaderStyle}>
          <ActivityIndicator style={{}} size="large" color="#0000ff" />
          <Text style={style.uploadTxt}> Loading...</Text>
        </View>
      ) : (
        <>
          <Text style={{fontSize: 30, alignSelf: 'center'}}>Update screen</Text>
          <FlatList
            data={list}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderItem={personalList}
            keyExtractor={(item, index) => 'key' + index}
          />
        </>
      )}
    </SafeAreaView>
  );
}
export default UpdatePersonal;
