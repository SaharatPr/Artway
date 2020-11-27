import React from 'react';
import { Button } from 'react-native';
import {
  View,
  Text,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab1 from '../../tab/Tab1/Tab1';
import Tab2 from '../../tab/Tab2/Tab2';
import Tab3 from '../../tab/Tab3/Tab3';
import { styles } from './HomeStyle';
const MaterialBottomTabs = createMaterialBottomTabNavigator();
class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (

          <MaterialBottomTabs.Navigator barStyle={{ backgroundColor: '#052238' }}>
            <MaterialBottomTabs.Screen
              name="Tab1"
              style={{ marginBottom: 16 }}
              component={Tab1}
              options={{
                tabBarLabel: 'Home',
                tabBarIcon: () => (
                  <Image source={{uri:"https://drive.google.com/file/d/1mg7FQj3XVHtgv-hF5mtizTl8DZYHYLsH/view?usp=sharing"}} 
                  style={{width: 26, height: 26}}
                  ></Image>
                ),
              }}
            />
            <MaterialBottomTabs.Screen name="Tab2" component={Tab2}
              options={{
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                  <Icon name = {'home'} size={25} style={[{ color: 'white' }]} />
                  
                )
              }}
            />
            <MaterialBottomTabs.Screen name="Tab3" component={Tab3}
              options={{
                tabBarLabel: 'Map',
                tabBarIcon: () => (
                  <Icon style={[{ color: 'white' }]} size={25} name={'map'} />
                ),
              }}
            />
          </MaterialBottomTabs.Navigator>


    );
  }

}

export default Home;
