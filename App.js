import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Orders from './src/Orders';
import HomeScreen from './src/HomeScreen';
import Upload from './src/Upload';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
// const Tab = createMaterialTopTabNavigator();

function StackScreens() {
  return (
    <Stack.Navigator
      initialRouteName="StackScreens"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{header: () => null}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{header: () => null}}
        name="Orders"
        component={Orders}
      />
    </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="StackScreens"
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen
          options={{header: () => null}}
          name="Home"
          component={StackScreens}
        />
        <Tab.Screen
          options={{header: () => null}}
          name="Upload"
          component={Upload}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({});
