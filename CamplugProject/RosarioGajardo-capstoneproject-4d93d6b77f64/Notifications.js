import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import {Container, Left, Header, Icon} from 'native-base';
import CardDetails from './Card.js';
import { TouchableOpacity } from 'react-native-gesture-handler';


/*const data = require('./data.json');
const Plugs = data.Plugs;
const Panels = data.Panel;
const Company = data.Company;*/

export default class Notifications  extends Component {

  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, apidata:{},search: '' , dataSource: '', panels: '', plugs: ''};
    this.arrayholder = [];
    //this.state = {};
  }

    render() {

      const Plugs =this.props.route.params.data.Plugs;
      const Panels = this.props.route.params.data.Panel;
      const mapPanels = Plugs.map((data) => {
        if (data.InsertTemperature > 60){

          return( 

            <View>
            <Text style={styles.text}>TEMPERATURE at {data.InsertTemperature} </Text>
            <CardDetails key = {data.Id}
            Id={data.Id }
            InsertTemperature={data.InsertTemperature}
            Locked={data.Locked}
            DateTemperatureChecked={data.DateTemperatureChecked}
            Temperatures={data.Temperatures}
            Load={data.Load}
            Capped={data.Capped}
            Connected={data.Connected}
            Contamination={data.Contamination}
            Panels={Panels}
      />
            </View>
          )

        }
        if(data.Locked == 'false'){

          return(
          <View>
          <Text style={styles.text}>Plug is Unlock </Text>
          <CardDetails key = {data.Id}
          Id={data.Id }
          InsertTemperature={data.InsertTemperature}
          Locked={data.Locked}
          DateTemperatureChecked={data.DateTemperatureChecked}
          Temperatures={data.Temperatures}
          Load={data.Load}
          Capped={data.Capped}
          Connected={data.Connected}
          Contamination={data.Contamination}
          Panels={Panels}
    />
          </View>
         )
        }
        
      
      }

      )

       const mplugs = Plugs.map((data)=>{


        if(data.Load > 30){

          return(
          <View>
          <Text style={styles.text}>OverLoading </Text>
          <CardDetails key = {data.Id}
          Id={data.Id }
          InsertTemperature={data.InsertTemperature}
          Locked={data.Locked}
          DateTemperatureChecked={data.DateTemperatureChecked}
          Temperatures={data.Temperatures}
          Load={data.Load}
          Capped={data.Capped}
          Connected={data.Connected}
          Contamination={data.Contamination}
          Panels={Panels}/>
          </View>
         )
        }
        if(data.Connected == "false"){

          return(
          <View>
          <Text style={styles.text}>Disconnected </Text>
          <CardDetails key = {data.Id}
          Id={data.Id }
          InsertTemperature={data.InsertTemperature}
          Locked={data.Locked}
          DateTemperatureChecked={data.DateTemperatureChecked}
          Temperatures={data.Temperatures}
          Load={data.Load}
          Capped={data.Capped}
          Connected={data.Connected}
          Contamination={data.Contamination}
          Panels={Panels}/>
          </View>
         )
        }




       })
      



        return (
        
  <View>
  <Header style={{flexDirection: "row" },{justifyContent: "space-between"}}
    >
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


     
    
    <View>
    <Container style={styles.container}  >

      <ScrollView>

      {mapPanels}
      {mplugs}

      </ScrollView>

    </Container>
    </View>
      
    

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
  text: {
    marginTop:40,
    textAlign:"left",
    marginRight:20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  cardContent: {
    //alignItems: 'center',
   
}
});