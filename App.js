/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import List from './src/pages/List';
import LinkedListPage from './src/pages/LinkedListPage';

const AppNavigator = createStackNavigator(
  {
    List: {screen: List},
    LinkedListPage: {screen: LinkedListPage},
  },
  {
    initialRouteName: 'List',
  },
);
const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
