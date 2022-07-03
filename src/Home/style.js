import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainSubViewContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subViewContainer: {
    height: 170,
    width: Dimensions.get('window').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
