import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, StyleSheet, LogBox} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Home/Home';
import Orders from './src/Orders/Orders';
import OrderDetail from './src/Orders/OrderDetail';
import UploadHomeService from './src/UploadHomeService/UploadHomeService';
import UpdateHomeServices from './src/UpdateHomeServices/UpdateHomeServices';
import UpdatePersonal from './src/UpdatePersonal/UpdatePersonal';
import UploadPersonalService from './src/UploadPersonalService/UploadPersonalService';
import ApproveScreen from './src/ApproveScreen/ApproveScreen';
import Details from './src/Details/Details';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs(true);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          options={{header: () => null}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Orders"
          component={Orders}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="OrderDetail"
          component={OrderDetail}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="UploadHomeService"
          component={UploadHomeService}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="UpdateHomeServices"
          component={UpdateHomeServices}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="UpdatePersonal"
          component={UpdatePersonal}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="UploadPersonalService"
          component={UploadPersonalService}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="ApproveScreen"
          component={ApproveScreen}
        />
        <Stack.Screen
          options={{header: () => null}}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({});
