/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';  
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,ImageBackground, TextInput, Dimensions, TouchableOpacity,

} from 'react-native';
// import { Actions } from 'react-native-router-flux';
 import bgImg from './assets/night.jpg';
 import logo from './assets/logo.png';
 import Icon from 'react-native-vector-icons/Ionicons';
 const {width:WIDTH} = Dimensions.get('window');


export default class Login extends Component{  

    state = {
      Username:'',
      UserId:'',
    }
 
  handleChangeInput = ({ target }) => {
  //  this.setState({ UserId: "Nikhil-7", Username:"NIKHILKUMARDWIVEDI"})
   this.setState({ [target.Username]: target.value });
   console.log("A: ",this.state.Username)
   console.log("B: ",this.state.UserId)
   console.log( "target.value ",target.value)
   
   Actions.about()
  }
  render() {  
    return (  
    <ImageBackground source={bgImg} style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}></Image>
            <Text style={styles.logoText}>Please Login With Your Credentials</Text>
        </View>
        
        <View style={styles.inputContainer}>
      
            {/* <Icon name={'person'} size={28}  color={'rbgo(255,255,255,0.7)'} 
            style={styles.inputIcon} /> */}
            <TextInput 
            style={styles.input}
            placeholder={'Username'}
            title="Username"
            placeholderTextColor={'rgba(255,255,255,0.9)'}
            underlineColorAndroid='transparent'></TextInput>
        </View>
        <View style={styles.inputContainer}>
            {/* <Icon name={'lock'} size={28}  color={'rbgo(255,255,255,0.7)'} 
            style={styles.inputIcon} /> */}
            <TextInput 
            style={styles.input}
            placeholder={'UserId'}
            name="UserId"
            placeholderTextColor={'rgba(255,255,255,0.9)'}
            underlineColorAndroid='transparent'></TextInput>
        </View>
        <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text} onPress={this.handleChangeInput.bind(this)}>Login</Text>
        </TouchableOpacity>
        <View>  
                <Text> {this.state.Username} </Text>  
                <Text> {this.state.UserId} </Text>  
            </View>  

    </ImageBackground>
      
    );  
  }  
}  
var styles = StyleSheet.create({
    container: {
      flex: 1,
      // remove width and height to override fixed static size
      width: null,
      height: null,
    justifyContent:'center',
    alignItems:'center',
    },
    logoContainer:{
     alignItems:'center',
     marginBottom:50 
    },
    logo:{
        width:120,
        height:120,
        //marginTop:-250
    },
    logoText:{
        color:'white',
        fontSize:20,
        fontWeight:'500',
        opacity:1
    },
    inputContainer:{
      marginTop:10
    },
    input:{
        width: WIDTH-55,
        height:45,
        borderRadius: 25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color:'rgba(255,255,255,0.7)',
        marginHorizontal:25
    },
    inputIcon:{
        position:'absolute',
        top:5,
        left:37
    },
    btnLogin:{
      width: WIDTH-55,
      height:45,
      borderRadius: 25,
     backgroundColor:'#432577',
     justifyContent:'center',
     marginTop:20
    },
    text:{
      color:'rgba(255,255,255,0.9)',
      fontSize:16,
      textAlign:'center'

    }
  });
