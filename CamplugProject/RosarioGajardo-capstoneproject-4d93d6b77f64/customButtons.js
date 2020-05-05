import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {TextInput, Text, Button, View, SafeAreaView,ScrollView} from 'react-native';
import {Left, Header, Icon, Container} from 'native-base';
import {CheckBox, Card} from 'react-native-elements';
import {styles} from './generalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';


const data = require('./data.json');
const Plugs = data.Plugs;
const Panels = data.Panel;

export default class AddComponent extends Component{

  constructor(props) {
    super(props)
    this.state = {
      PanelFormVisible: false,
      PlugFormVisible: false,
    }
  }

  ///Changes state to show or hide panel form
  SwitchToPanelPage = () => {
    this.setState({ PanelFormVisible: ! this.state.PanelFormVisible });
  }

  ///Changes state to show or hide plug form
  SwitchToPlugPage = () => {
    this.setState({ PlugFormVisible: ! this.state.PlugFormVisible });
  }

  render(){
    return(

<View>
  <Container>
<ScrollView>
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
  
      <SafeAreaView style = {styles.container}>
      
        <Card title="ADD COMPONENT">
           
          <View  style = {styles.cardContent}>

            {/*Panel section*/}
            <Text style = { styles.title }>Click to add a panel </Text>
            <CustomFillButton caption = 'ADD A PANEL' function = {this.SwitchToPanelPage}/>
            { this.state.PanelFormVisible ? <AddPanel func = {this.SwitchToPanelPage}/> : null }{/*Toggles form*/}

            {/*Plug section*/}
            <Text style = { styles.title }> *Note: All plugs must be contained inside of a panel </Text>
            <CustomFillButton caption = 'ADD A PLUG' function = {this.SwitchToPlugPage}/>
            { this.state.PlugFormVisible ? <AddPlug func = {this.SwitchToPlugPage}/> : null }{/*Toggles form*/}

          </View>
          
        </Card>
        
      </SafeAreaView>
      </ScrollView> 
      </Container>
      </View>
    );
  }
}

//Custom Wide Button
export class CustomFillButton extends Component{
  render(){
    return(
      <View style ={{marginHorizontal:8, marginTop: 25}}>
        <Button 
          title={this.props.caption}
          onPress={this.props.function}
        />
      </View>
    );
  }
}

//Panel Component
export class AddPanel extends Component{

  constructor(props) {
    super(props)
    this.state = {
      PanelIdValueHolder: '',
      PanelLocationHolder: ''
    }
  }

  GetStateValues = () => {
    const PanelIdValueHolder  = this.state.PanelIdValueHolder; 
    const PanelLocationHolder = this.state.PanelLocationHolder; 
    alert("New Panel Added " + PanelIdValueHolder + " " + PanelLocationHolder); 
  }

  submit = () =>{
    var id = this.state.PanelIdValueHolder;
    var location = this.state.PanelLocationHolder;
    Panels.push({
      "PanelId": id,
      "NumberOfPlugs": "",
      "Plugs": "",
      "ControllerTemperature": "" ,
      "Location":{
           "Address": location,
           "Long":"",
           "Lat":""}
    });
    this.props.func();
  }

  render(){
    return(
      <Card>
        <View style = {styles.cardContent}>
          {/*Panel id section*/}
          <Text style = { styles.title }>Enter Panel tag/Id (alphanumeric) </Text>
          <TextInput 
            style = {styles.textField}
            placeholder = '123ABC'
            onChangeText = {PanelIdValueHolder => this.setState({PanelIdValueHolder})}
          />

          {/*Location section*/}
          <Text style = { styles.title }>Enter location</Text>
          <TextInput 
            style = {styles.textField}
            placeholder = 'some address'
            onChangeText = {PanelLocationHolder => this.setState({PanelLocationHolder})}
          />
          <CustomFillButton caption = 'Submit' function = {this.submit}/>
        </View>
      </Card>
    );
  }
}

//Plug Component
export class AddPlug extends Component{

  constructor(props) {
    super(props)
    this.state = {
      PlugIdValueHolder: '',
      PanelIdValueHolder: '',
      FemaleChecked: false,
      MaleChecked: false,
      Option: '',
    }
  }
  //To save plug information after it is submitted
  GetStateValues = () => {
    const PlugIdValueHolder = this.state.PlugIdValueHolder; 
    const PanelIdValueHolder  = this.state.PanelIdValueHolder; 
    const Option = this.state.Option;
    alert("New Plug Added: Plug " + PlugIdValueHolder + " in Panel: " + PanelIdValueHolder + "Plug Type: " + Option); 
  }
  malePressed = (option) => {
    //Change selected checkbox to male and uncheck female

    this.setState({
      MaleChecked: true,
      FemaleChecked: false,
      Option: 'male'
    });
  }

  femalePressed = (option) => {
    //Change selected checkbox to female and uncheck male

    this.setState({
      MaleChecked: false,
      FemaleChecked: true,
      Option: 'female'
    });
  }

  render(){
    return(
      <Card>
        <View  style = {styles.cardContent}>

          {/*AddPlug section*/}
          <Text style = {styles.title}>Enter Plug ID (alphanumeric)</Text>  
          <TextInput 
            style = {styles.textField}
            placeholder = '123ABC'
            onChangeText = {PlugIdValueHolder => this.setState({PlugIdValueHolder})}
          />

          {/*Panel id*/}
          <Text style = { styles.title }>Enter Panel ID (alphanumeric)</Text>
          <TextInput 
            style = {styles.textField}
            placeholder = '123ABC'
            onChangeText = {PanelIdValueHolder => this.setState({PanelIdValueHolder})}
          />

          {/*Plug type section(male or female)*/}
          <View style = { styles.checkBoxContainer }>
            <CheckBox title = 'male' checked = {this.state.MaleChecked} textStyle={{fontWeight: 'normal'}} onPress = {this.malePressed}/>
            <CheckBox title = 'female' checked = {this.state.FemaleChecked} textStyle={{fontWeight: 'normal'}} onPress = {this.femalePressed}/>
          </View>

          <CustomFillButton caption = 'Submit' function = {this.props.func}/>

        </View>
      </Card>
    );
  }
}
