import 'react-native-gesture-handler';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import React, {Component} from 'react';
import Profile from './Profile';
import Notifications from './Notifications';
import CardsPage from './CardsPage';
import AddComponent from './customButtons';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  
  
const Drawer = createDrawerNavigator();
const test = "test";

export class MyDrawer extends Component{


render () {

    var data = this.props.data;
    console.log(data);
    return (
      <Drawer.Navigator 
        drawerContentOptions={{ activeTintColor:'#e91e63',
                                itemStyle: { marginVertical: 30, marginLeft : 20},
                                }}
        >
       <Drawer.Screen  name="Feed" component={CardsPage} initialParams={{data}}/>
        <Drawer.Screen name="Notifications" component={ Notifications } initialParams={{data}} />
        <Drawer.Screen name="Profile" component={Profile} initialParams={{data}}/>
        <Drawer.Screen  name="Add component" component={AddComponent} initialParams={{data}} />
      </Drawer.Navigator>
    );
  }
}


  //export default class App extends Component {
  export default class MainPage extends Component {

    render() {


        console.log({test});

        return (
          <NavigationContainer>
              <MyDrawer data={this.props.data}/>
         </NavigationContainer>
        );

  }

}
