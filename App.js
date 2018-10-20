/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Alert} from 'react-native';

import Login from './src/components/Login/Login';
import Gallery from './src/components/Gallery/Gallery';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  selectImage = (image) => {
    Alert.alert(
      'Choose Image!',
      'image: ' + image,
    );
  }

  render() {
    let images = [
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
      'https://facebook.github.io/react-native/docs/assets/favicon.png',
    ];
    return (
      <Gallery 
        data={images}
        column={2}
        icon={'search'}
        onSelect={this.selectImage}
      />
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to React Native!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
