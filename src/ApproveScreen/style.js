import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  subContainerCartItems: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  subContainerCartItemsTwo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 75,
    backgroundColor: 'pink',
    borderRadius: 10,
  },
  btnColor: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 50,
    backgroundColor: 'pink',
  },
  btnColorPink: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    height: 50,
    backgroundColor: '#F0F8FF',
  },
  btnContainer: {
    width: '80%',
    height: 50,
    marginTop: '6%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    flexDirection: 'row',
    backgroundColor: '#F0F8FF',
    borderRadius: 30,
  },
  cartItemsContainer: {
    padding: 12,
    borderWidth: 0.3,
    borderColor: 'grey',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 5,
    width: '90%',
    alignSelf: 'center',
  },
  subTitxt: {
    fontSize: 15,
    color: 'black',
    fontWeight: '700',
  },
  contiBtn: {
    marginTop: 9,
    alignSelf: 'center',
    width: '90%',
    height: 43,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'magenta',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  subImg: {width: 22, height: 22},
});
