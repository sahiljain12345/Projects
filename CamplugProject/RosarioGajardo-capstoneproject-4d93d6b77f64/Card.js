import React,{Component} from 'react';
import { StyleSheet, View, Button, Text, ScrollView, Alert } from 'react-native';
import {} from 'native-base';
import {Card} from 'react-native-elements'
import Graph from './Graph';

export default class CardDetails extends Component {

    constructor () { 
        super();
        this.state = {showGraph: false , Panels:""};
      }

      showGraphFunc = () => {
          if (this.state.showGraph == false){
            this.setState({showGraph: true});
          }
          else if (this.state.showGraph == true){
            this.setState({showGraph: false});
          }
      }

      panelTheyAreAt = () =>{
        var id;
        this.props.Panels.map((data) => {
                if (data.Plugs.includes(this.props.Id)==true)
                id = data.Id;
         })
        return id;
      }

    render() {

      var title = "PLUG: " + this.props.Id;

        return (

         <View style={{margin : 10}}>
          <Card  key = {this.props.Id }
                 title={title}
                 style={styles.cardContent}
                  >
             <Text style={styles.paragraph}>
                  
                  
             </Text>
             <Text style={styles.paragraph}>
                  Live temp: {this.props.InsertTemperature}   Connected:  {this.props.Connected}
             </Text>
            
             <Text style={styles.paragraph}>
             Load:  {this.props.Load}   Capped:  {this.props.Capped}   Locked:  {this.props.Locked}
             </Text>
            
             <Text style={styles.paragraph}>
             Contamination:  {this.props.Contamination}
             </Text>

             <Text style={styles.paragraph}> Panel they belong to: {this.panelTheyAreAt()} </Text>
             
             <Button title="Live Tempreature" onPress={this.showGraphFunc} ></Button>
                    {this.state.showGraph &&
                          <View style={styles.cardContent}>
                                <Graph dates={this.props.DateTemperatureChecked} temperatures={this.props.Temperatures}/>
                          </View>}
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
   
},
});