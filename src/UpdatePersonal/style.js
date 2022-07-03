import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  listItem: {margin: 10, backgroundColor: 'red'},
  TiName: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  listHeaderTxt: {
    marginTop: 20,
    marginBottom: 6,
    color: 'black',
    paddingHorizontal: '3%',
    fontWeight: '600',
    fontSize: 17,
  },
  loaderStyle: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
