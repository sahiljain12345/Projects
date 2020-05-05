import React,{Component} from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import {} from 'native-base';
import {Card} from 'react-native-elements'

export default class Panel extends Component {

    plugInPanel = () =>{
        const map = this.props.Plugs.map((data) => {
              return( 
                <Text style={styles.paragraph}>{data}</Text>
              )
            
    })
return map;
}

    render() {

        
      var title = "PANEL: " + this.props.Id;
      

        return (

         <View style={styles.container}>
          <Card  key = {this.props.Id }
                 title={title}
                 style={styles.cardContent}
                  >
             <Text style={styles.paragraph}>
                  Panel location:
            </Text>
            <Text style={styles.paragraph}> Latitude: {this.props.Lat}   Longitude: {this.props.Long} </Text>
             <Text style={styles.paragraph}>
             Controller Temperature: {this.props.ControllerTemperature}  Communication Status:{this.props.CommunicationStatus}  
             </Text>
              <Text style={styles.paragraph}>
             Fault Status:  {this.props.FaultStatus}  Number of Plugs:  {this.props.NumberOfPlugs}  
             </Text>
            <Text style={styles.paragraph}>Plugs:  {this.plugInPanel()} </Text> 
              
             
          </Card>
</View>
      
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin:15,
    textAlign:"left",
    marginRight:20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  cont:{
marginBottom:20 

  },

cardContent: {
    //alignItems: 'center',
    paddingBottom: 40,
    paddingLeft: 90,
    paddingRight: 90,
},
});