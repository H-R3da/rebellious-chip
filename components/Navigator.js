import React from 'react';
import {  View } from 'react-native';
import {  createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import MoroccoScreen from './MoroccoScreen';

const TabNavigator = createMaterialBottomTabNavigator(
  { 
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Gallery',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-images-sharp'} />
          </View>
        ),
      },
    },

    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon
              style={[{ color: tintColor }]} size={25} name={'ios-chatbubbles-sharp'} />
          </View>
        ),
       
      },
    },

    Morocco: {
      screen: MoroccoScreen,
      navigationOptions: {
        tabBarLabel: 'Morocco',
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} size={25} name={'ios-book-sharp'} />
          </View>
        ),
      },
    }


  },

     
  {
    initialRouteName: 'Home',
    activeColor: '#fff',
    inactiveColor: '#787878',
    barStyle: { backgroundColor: '#282828' },
  }
);

export default createAppContainer(TabNavigator);





