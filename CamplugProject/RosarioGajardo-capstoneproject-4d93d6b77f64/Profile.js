import React, { Component } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Left, Header, Icon} from 'native-base';
import * as Font from 'expo-font';
//npm install -g expo-cli
//expo init Name of Project
//cd Name of Project ^
//npm start
//Needed to update node modules to include latest versions
//npm install -g npm-check-updates
//ncu -u
//npm update
//npm install

export default class Profile extends Component{

  /*componentDidMount(){
    Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
  }*/
  render(){
    return(
    <View>

<Header style={{flexDirection: "row" },{justifyContent: "space-between"}}>
      <Left>
       <SafeAreaView style={{flex:1}}>
         <TouchableOpacity style={{ alignItems: "flex-end",margin: 16}}
                            onPress={this.props.navigation.openDrawer}>
           <Icon 
             name="md-menu"
             size={40} 
             color='#000' />
         </TouchableOpacity>
         
       </SafeAreaView>
      </Left>
  </Header>

    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignSelf: "center"}}>
          <View style={styles.profileImage}>
            <Image source={require("./assets/Forklift.png")} style={styles.image} resizeMode="center"></Image>
          </View>
          <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#DFD8C8"></MaterialIcons>
          </View>
          <View style={styles.active}></View>
          <View style={styles.add}>
            <Ionicons name="md-add" size={48} color="#DFD8C8" style={{marginTop: 6, marginLeft: 2}}></Ionicons>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={[styles.text, {fontWeight: "200", fontSize: 36}]}>Gabe</Text>
          <Text style={[styles.text, {color: "#AEB5BC", fontSize: 14}]}>Journeyman Level 1</Text>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24}]}>50</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24}]}>50</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[styles.text, { fontSize: 24}]}>50</Text>
            <Text style={[styles.text, styles.subText]}>Posts</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#FFF"
  },
  text: {
      fontFamily: "HelveticaNeue",
      color: "#52575D"
  },
  image: {
      flex: 1,
      height: undefined,
      width: undefined
  },
  titleBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 24,
      marginHorizontal: 16
  },
  subText: {
      fontSize: 12,
      color: "#AEB5BC",
      textTransform: "uppercase",
      fontWeight: "500"
  },
  profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      overflow: "hidden"
  },
  dm: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: 20,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
  },
  active: {
      backgroundColor: "#34FFB9",
      position: "absolute",
      bottom: 28,
      left: 10,
      padding: 4,
      height: 20,
      width: 20,
      borderRadius: 10
  },
  add: {
      backgroundColor: "#41444B",
      position: "absolute",
      bottom: 0,
      right: 0,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center"
  },
  infoContainer: {
      alignSelf: "center",
      alignItems: "center",
      marginTop: 16
  },
  statsContainer: {
      flexDirection: "row",
      alignSelf: "center",
      marginTop: 32
  },
  statsBox: {
      alignItems: "center",
      flex: 1
  },
  mediaImageContainer: {
      width: 180,
      height: 200,
      borderRadius: 12,
      overflow: "hidden",
      marginHorizontal: 10
  },
  mediaCount: {
      backgroundColor: "#41444B",
      position: "absolute",
      top: "50%",
      marginTop: -50,
      marginLeft: 30,
      width: 100,
      height: 100,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 12,
      shadowColor: "rgba(0, 0, 0, 0.38)",
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 20,
      shadowOpacity: 1
  },
  recent: {
      marginLeft: 78,
      marginTop: 32,
      marginBottom: 6,
      fontSize: 10
  },
  recentItem: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 16
  },
  activityIndicator: {
      backgroundColor: "#CABFAB",
      padding: 4,
      height: 12,
      width: 12,
      borderRadius: 6,
      marginTop: 3,
      marginRight: 20
  }
});


