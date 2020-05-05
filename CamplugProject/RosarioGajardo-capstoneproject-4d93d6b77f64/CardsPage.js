import React,{Component} from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Alert, SafeAreaView , FlatList,
  ActivityIndicator,
  Platform} from 'react-native';
import {Container, Left, Header, Icon} from 'native-base';
import SearchBarComponent from './SearchBar';
import CardDetails from './Card.js';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';
import { SearchBar } from 'react-native-elements';
import {ChipSet, Chip} from '@material/react-chips';
import {MqttClient} from 'mqtt';
import Panel from './Panel';

export default class CardsPage extends Component {

  constructor(props) {
    super(props);
    //setting default state
    this.state = { isLoading: true, apidata:{},search: '' , dataSource: '', panels: '', plugs: ''};
    this.arrayholder = [];
    //this.state = {};
  }

  async componentDidMount() {
    
    
    ///////Fetch data from api////
    try {
      const response = await fetch('https://k67gnuv5nk.execute-api.us-east-1.amazonaws.com/getplugs',
      { method: 'GET',
       mode:'no-cors',
        body:null
      });
      let responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          apidata: responseJson
        },
        function() {}
      );
    } catch (error) {
      console.error(error);
    }

    ///////////////////////////////
  
/*
//    this.client = myMqtt.connected('mqtt://test.mosquito.org');

   //clien id
    this.client = mqtt.connect('ws://52.221.181.230:15675/ws');
    this.client.on("connect",() =>{
      console.log("connected");
      this.client.subscribe("telemetry");
    })
    //take the url from backend, should look like this
    /*
    setup backend: MQTT{
      transport = net;
      url = "mqtt://52.221.181.230:1883";
      clientId = "XDK42_1";
    }
    */

    //subscribe to the topic -- topic: telemetry
   /* this.client.on('connect', () => {
      this.client.subscribe('telemetry',function(err){
        if (!err){
          console.log("Subscribed to telemetry");
          //client.publish('telemetry','Hello mqtt')
        }
      })
    })//

    this.client.on('message', (topic,message) => {
      console.log(message.toString());
      this.handleJsonMessage(JSON.parse(message.toString()));
    })
   */ 

    var Plugs = this.props.route.params.data.Plugs;
    var Panels = this.props.route.params.data.Panel;
    var Company = this.props.route.params.data.Company;

    var PlugsPanels = Plugs.concat(Panels);

        this.setState(
          {
            isLoading: false,
            dataSource: PlugsPanels,
            plugs: Plugs,
            panels: Panels
          },
          function() {
            this.arrayholder = PlugsPanels
          }
        );
      
  }

  handleJsonMessage = (json) =>{
    this.setState({
      ...json
    })
  }

 /* componentWillUnmount(){
    this.client.end();
  }*/

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  
  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.Id ? item.Id.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search: text,
    });

    console.log(this);
  }


mapArrayPlugs = () => {
  console.log(this.state);
  
  const mapPlugs = this.state.dataSource.map((data) => {

    if (data.Locked){
      return( 
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
              Panels={this.state.panels}
        />
      )
    }
    else {
      return( 
        <Panel key = {data.Id}
              Id={data.Id }
              Lat={data.Location.Lat}
              Long={data.Location.Long}
              ControllerTemperature={data.ControllerTemperature}
              CommunicationStatus={data.CommunicationStatus}
              FaultStatus={data.FaultStatus}
              NumberOfPlugs={data.NumberOfPlugs}
              Plugs={data.Plugs}
        />
      )
    }
  }
  )
  return mapPlugs;
}


  render(){

     let{apidata} = this.state;
     console.log(apidata);

    if (this.state.isLoading) {
      //Loading View while data is loading
      return (
        <View >
          <ActivityIndicator />
        </View>
      );
    }

  return (

<View  >
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


    <View style={styles.viewStyle}>
    <SearchBar
          round
          searchIcon= {{size : 24}}
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          placeholder="Type Here..."
          value={this.state.search}
          lightTheme
          placeholderTextColor={'#g5g5g5'}
          cancelButtonTitle="Cancel"
          shadowColor="#282828"
          
        />
    
    </View>

    
  
     <View >
    
     <Container >

       <ScrollView style={{paddingBottom: 60}}>

            <View style={styles.container}>{this.mapArrayPlugs()}</View>
            

       </ScrollView>

     </Container>

  </View>

</View> 
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 140,
    backgroundColor: '#ecf0f1',
  },
  bar: {
    flexDirection: "row",
    paddingTop: 20,
    paddingBottom: 5,
    backgroundColor: '#ecf0f1',
    height: 160
  },
  titlebar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 0,
  },
  textStyle: {
    padding: 10,
  },
  cardContent: {
    //alignItems: 'center',
    paddingBottom: 40,
    paddingLeft: 90,
    paddingRight: 90,
},
scrollView: {
  backgroundColor: 'pink',
  marginHorizontal: 20,
},
 
});