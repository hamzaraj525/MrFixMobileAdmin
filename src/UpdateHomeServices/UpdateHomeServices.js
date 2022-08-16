import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import style from './style';

function UpdateHomeServices({navigation}) {
  const [list, setList] = useState([]);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [txtArray, setTextArr] = useState([]);

  useEffect(() => {
    HomeServicesData();
  }, []);

  const updateData = ({text, index}) => {
    firestore()
      .collection('Services')
      .doc()
      .update({
        title: text,
      })
      .then(() => {
        console.log('Data updated!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const HomeList = ({item, index}) => {
    return (
      <View style={style.listItem}>
        <TextInput
          style={style.TiName}
          value={item.title}
          onChangeText={text => {
            emtyArr = [...list];
            emtyArr[index] = text;
            setList(emtyArr);
          }}
        />
      </View>
    );
  };

  const HomeServicesData = () => {
    setLoading(true);
    var newArray = [];
    firestore()
      .collection('Services')
      .get()
      .then(querySnapshot => {
        console.log('Total services------: ', querySnapshot.size);
        querySnapshot.forEach(documentSnapshot => {
          newArray.push(documentSnapshot.data());
          console.log('Data---id: ', documentSnapshot.id);
        });
      })
      .then(testing => {
        // console.log('New Home Push is =', newArray);
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
            renderItem={HomeList}
            keyExtractor={(item, index) => 'key' + index}
          />
        </>
      )}
      <Pressable
        style={{alignSelf: 'center', marginTop: 20}}
        onPress={() => {
          updateData(list);
        }}>
        <Text>Button</Text>
      </Pressable>
    </SafeAreaView>
  );
}
export default UpdateHomeServices;
