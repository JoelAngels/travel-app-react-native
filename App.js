import React from 'react';
import {View, Text} from 'react-native';
import Home from './components/Home';
import Details from './components/Details';
import Liked from './components/Liked';
import Profile from './components/Profile';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Feather from 'react-native-vector-icons/Feather';
// import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Text>App</Text>
      <Text>App</Text>
    </View>
  );
};

export default App;
