import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';


export default class App extends React.Component {
  render() {
   return <AppContainer />;
  }
}



const AppNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  
})

const AppContainer = createAppContainer(AppNavigator);
