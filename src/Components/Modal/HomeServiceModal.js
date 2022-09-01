import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View, Modal, Text} from 'react-native';
import style from './../Modal/style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HomeServiceModal = props => {
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
              activeOpacity={0.8}
              style={[style.singleExplore, {backgroundColor: '#f44a53'}]}
              onPress={() => {
                props.placeCategory('AC Services');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/air-conditioner.png')}
                style={style.imgStyle}
              />
              <Text numberOfLines={1} style={style.exploreText}>
                Air-cond..
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[style.singleExplore, {backgroundColor: '#fb8634'}]}
              onPress={() => {
                props.placeCategory('Car Services');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/car.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Car</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[style.singleExplore, {backgroundColor: '#FACA2E'}]}
              onPress={() => {
                props.placeCategory('Geyser');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/water-heater.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Water-he..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[style.singleExplore, {backgroundColor: '#21D973'}]}
              onPress={() => {
                props.placeCategory('Cleaning');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/broom.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Broom</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                style.singleExplore,
                {
                  marginRight: 'auto',
                  backgroundColor: '#32BBAC',
                  marginLeft: '7%',
                },
              ]}
              onPress={() => {
                props.placeCategory('Electrition');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/electrician.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Electrician</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                style.singleExplore,
                {
                  marginRight: 'auto',
                  backgroundColor: '#399CF0',
                  marginLeft: '7%',
                },
              ]}
              onPress={() => {
                props.placeCategory('Home Appliances');
                props.hideModal();
              }}>
              <Image
                source={require('./../../../assets/Images/washing-machine.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Washing..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                props.placeCategory('Painter');
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
                source={require('./../../../assets/Images/painter.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Painter..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                props.placeCategory('Plumber');
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
                source={require('./../../../assets/Images/plumbering.png')}
                style={style.imgStyle}
              />
              <Text style={style.exploreText}>Plumber..</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
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
              <MaterialIcons name="comment" size={22} color={'white'} />
              <Text style={style.exploreText}>Coming..</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default HomeServiceModal;
