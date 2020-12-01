import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Tab1 from '../../tab/Tab1/Tab1';
import Tab2 from '../../tab/Tab2/Tab2';
import Tab3 from '../../tab/Tab3/Tab3';
import Tab4 from '../../tab/Tab4/Tab4';
import { styles } from './HomeStyle';
import { Layout } from '@ui-kitten/components';
const MaterialBottomTabs = createMaterialBottomTabNavigator();
class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
        <>
          <TouchableOpacity title="" style={styles.btnrout} onPress={()=>this.props.navigation.navigate('CreateTripPage')}>
            <Image source={{uri:'https://drive.google.com/uc?export=view&id=1Sbbt_Zo0eUqJrlM-o2DiS35jQphRm-L-'}}  style={styles.imgrout}></Image>
          </TouchableOpacity>

          <MaterialBottomTabs.Navigator barStyle={{ backgroundColor: '#052238' , height:"10%"}}>
           
            <MaterialBottomTabs.Screen
              name="Tab1"
              style={{ margin: "auto",padding: "auto", }}
              component={Tab1}
              options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                  <Image source={{uri:'https://drive.google.com/uc?export=view&id=1eZaSQCuWrBgT5_-ho6fsUP-0qYfnlP3d'}} style={{width:"150%",height:"150%"}}/>
                ),
              }}
            />
            <MaterialBottomTabs.Screen 
            name="Tab2" 
            component={Tab2}
            style={{ margin: "auto",padding: "auto", }}
              options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                  <Image source={{uri:'https://drive.google.com/uc?export=view&id=1mg7FQj3XVHtgv-hF5mtizTl8DZYHYLsH'}} style={{width:"150%",height:"150%"}}/>
                ),
              }}
            />
            <MaterialBottomTabs.Screen 
            name="Tab3" 
            component={Tab3}
            style={{ margin: "auto",padding: "auto", }}
              options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                  <Image source={{uri:'https://drive.google.com/uc?export=view&id=1QS_AjSNSxS8poIc4zSF_9bgTz6qBwwva'}} style={{width:"150%",height:"150%"}}/>
                ),
              }}
            />
            <MaterialBottomTabs.Screen 
            name="Tab4" 
            component={Tab4}
            style={{ margin: "auto",padding: "auto", }}
              options={{
                tabBarLabel: '',
                tabBarIcon: () => (
                  <Image source={{uri:'https://drive.google.com/uc?export=view&id=1SsrJDBu-nQmzUxgMUegr-rgpWc99W1Zq'}} style={{width:"150%",height:"150%"}}/>
                ),
              }}
            />
            
          </MaterialBottomTabs.Navigator>
          </>
    );
    
  }

}

export default Home;
