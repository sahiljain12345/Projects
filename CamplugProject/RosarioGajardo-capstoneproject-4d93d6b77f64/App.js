import 'react-native-gesture-handler';
import React, {Component} from 'react';
import MainPage from './MainPage.js';
import * as Font from 'expo-font';

  
const dataJson = require('./data.json');

export default class App extends Component {

  
  render() {

      return (
       <MainPage data={dataJson} />
      );

}

}

