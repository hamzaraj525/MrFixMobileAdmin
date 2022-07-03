import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View, Modal, Text} from 'react-native';
import style from './../Modal/style';

const PersonalServiceModal = props => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        props.hideModal();
      }}
      visible={props.showModal}>
      <View style={style.containerContent}>
        <View style={style.exploreSection}>
          <Text style={style.exploreHeader}>Select a Category </Text>
          <View style={style.exploreContent}>
            <TouchableOpacity
              style={[style.singleExplore, {backgroundColor: '#f44a53'}]}
              onPress={() => {
                props.placeCategory('Ban Jao Beautifull');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/woman-2.png')}
                style={style.imgStyle}
              />
              <Text numberOfLines={1} style={style.exploreText}>
                Ban Jao B..
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.singleExplore, {backgroundColor: '#fb8634'}]}
              onPress={() => {
                props.placeCategory('Facial');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/facial.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Facial</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.singleExplore, {backgroundColor: '#FACA2E'}]}
              onPress={() => {
                props.placeCategory('Mehndi Service');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/henna.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Mehndi S..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[style.singleExplore, {backgroundColor: '#21D973'}]}
              onPress={() => {
                props.placeCategory('Makeup');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/makeover.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Makeup</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.singleExplore,
                {
                  marginRight: 'auto',
                  backgroundColor: '#32BBAC',
                  marginLeft: '7%',
                },
              ]}
              onPress={() => {
                props.placeCategory('Mani Pedi');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/manicure.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Mani Pedi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.singleExplore,
                {
                  marginRight: 'auto',
                  backgroundColor: '#399CF0',
                  marginLeft: '7%',
                },
              ]}
              onPress={() => {
                props.placeCategory('Massage');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/massage.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Massage</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.placeCategory('Hair Treatment');
                props.hideModal();
              }}
              style={[
                style.singleExplore,
                {
                  marginRight: 'auto',
                  backgroundColor: '#3D6AE9',
                },
              ]}>
              <Image
                source={require('./../../../assets/Images/hairdryer.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Hair Treat..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.placeCategory('Waxing');
                props.hideModal();
              }}
              style={[
                style.singleExplore,
                {
                  marginLeft: '7%',
                  marginRight: 'auto',
                  backgroundColor: '#984DE6',
                },
              ]}>
              <Image
                source={require('./../../../assets/Images/wax-2.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Waxing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.singleExplore,
                {
                  marginRight: 'auto',
                  backgroundColor: '#399CF0',
                  marginLeft: '7%',
                },
              ]}
              onPress={() => {
                props.hideModal();
              }}>
              {/* <MaterialIcons
                  name="sports-basketball"
                  size={22}
                  color={'white'}
                /> */}
              <Text style={style.exploreText}></Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default PersonalServiceModal;
