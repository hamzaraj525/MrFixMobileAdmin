import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  ActivityIndicator,
  Text,
  Image,
  TextInput,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PersonalServiceModal from '../Components/Modal/PersonalServiceModal';
import ImagePicker from 'react-native-image-crop-picker';
import style from './style';
import storage from '@react-native-firebase/storage';

const UploadPersonalService = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [Price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loader, setLoader] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
  const placeCategory = param => {
    setCategory(param);
  };

  const postData = async () => {
    const imageUpload = await uploadImage();
    if (
      title === '' ||
      subTitle === '' ||
      Price === '' ||
      category === '' ||
      image === null
    ) {
      alert('Please fill all the fields');
    } else {
      firestore()
        .collection('PersonalServices')
        .add({
          title: title,
          subTitle: subTitle,
          Price: Price,
          type: category,
          img: imageUpload,
        })
        .then(() => {
          setLoader(false);
        });
      setTitle('');
      setSubTitle('');
      setPrice('');
      setCategory('');
      setImage(null);
    }
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    })
      .then(image => {
        console.log('image is here-----' + image.sourceURL);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const uploadImage = async () => {
    if (image == null) {
      return null;
    }
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add timestamp to File Name
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    setUploading(true);
    setTransferred(0);
    const storageRef = storage().ref(`photos/${filename}`);
    const task = storageRef.putFile(uploadUri);
    // Set transferred state
    task.on('state_changed', taskSnapshot => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
      );
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100,
      );
    });
    try {
      await task;
      const url = await storageRef.getDownloadURL();
      setUploading(false);
      console.log('url==' + url);

      setImage(url);
      return url;
      console.log('url here' + url);
    } catch (e) {
      console.log(e);
      return null;
    }
  };

  return (
    <SafeAreaView
      style={[
        style.container,
        {backgroundColor: showModal ? '#000000aa' : 'white'},
      ]}>
      {uploading || loader ? (
        <View style={style.loaderStyle}>
          <ActivityIndicator style={{}} size="large" color="#0000ff" />
          <Text style={style.uploadTxt}>{transferred}% Uplaoding...</Text>
        </View>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{paddingHorizontal: 20}}
          contentContainerStyle={{}}>
          <Text
            style={{
              marginBottom: '7%',
              marginTop: '7%',
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            New Listing
          </Text>
          <TouchableOpacity
            onPress={choosePhotoFromLibrary}
            style={{
              backgroundColor: '#FFC0CB',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10,
              borderRadius: 10,
              width: 110,
              height: 110,
            }}>
            {image === null ? (
              <MaterialCommunityIcons name="camera" size={30} color={'grey'} />
            ) : (
              <Image
                source={{uri: image}}
                style={{
                  borderRadius: 10,
                  width: 110,
                  height: 110,
                }}
              />
            )}
          </TouchableOpacity>
          <View style={style.passwordContainer}>
            <MaterialCommunityIcons name="pencil" size={20} color={'pink'} />
            <TextInput
              value={title}
              style={{width: '90%', marginLeft: 6}}
              onChangeText={text => setTitle(text)}
              placeholder="Title"
              placeholderTextColor={'#000'}
            />
          </View>
          <View
            style={[
              style.passwordContainer,
              {alignSelf: 'flex-start', width: '30%'},
            ]}>
            <FontAwesome name="dollar" size={20} color={'pink'} />
            <TextInput
              value={Price}
              style={{marginLeft: 14}}
              onChangeText={text => setPrice(text)}
              placeholder="Price"
              placeholderTextColor={'#000'}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
            }}
            style={style.categBtn}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Ionicons name="apps-sharp" size={20} color={'pink'} />
              <Text
                style={{
                  marginLeft: 6,
                }}>
                {category ? category : 'Category'}
              </Text>
            </View>
            <SimpleLineIcons name="arrow-down" size={10} color={'pink'} />
          </TouchableOpacity>
          <View
            style={[style.passwordContainer, {marginBottom: 0, width: '100%'}]}>
            <AntDesign name="calendar" size={20} color={'pink'} />
            <TextInput
              value={subTitle}
              style={{width: '90%', marginLeft: 6}}
              onChangeText={text => setSubTitle(text)}
              placeholder="SubTitle"
              placeholderTextColor={'#000'}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              postData();
            }}
            style={[
              style.loginBtn,
              {marginTop: 15, backgroundColor: '#FB5B64'},
            ]}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              POST
            </Text>
          </TouchableOpacity>
          <PersonalServiceModal
            navigation={navigation}
            showModal={showModal}
            hideModal={closeModal}
            placeCategory={placeCategory}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
export default UploadPersonalService;
