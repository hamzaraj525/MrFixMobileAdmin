import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
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
