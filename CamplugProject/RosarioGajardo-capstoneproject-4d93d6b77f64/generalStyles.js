import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: '#ecf0f1',
      },
    
    cardContent: {
        //alignItems: 'center',
        paddingBottom: 40,
        paddingLeft: 90,
        paddingRight: 90,
    },
  
    title: {
      textAlign: 'center',
      marginTop: 8,
    },
  
    textField: {
      height: 40,
      textAlign:'center',
      marginHorizontal: 8,
      borderBottomColor: '#d3d3d3',
      borderBottomWidth: 1,
    },
  
    topicFont: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      marginBottom: 20,
    },
  
    checkBoxContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 8,
    },
  });
  