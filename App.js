import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  Text
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './src/page/LoginPage/LoginPage';
import SpashScreenPage from './src/page/SpashScreenPage/SpashScreen';
import HomePage from './src/page/HomePage/HomePage';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout } from '@ui-kitten/components';
const Stack = createStackNavigator();
class App extends React.Component{ß
  constructor(props){
    super(props);
  }
  render(){

    function MyStack() {
      return (
        <Stack.Navigator>
        <Stack.Screen name="SpashScreenPage" component={SpashScreenPage} options={{headerShown: false}}/>
          <Stack.Screen name="HomePage" component={HomePage} />
           <Stack.Screen name="LoginPage" component={LoginPage} options={{headerShown: false}}/>
          
        </Stack.Navigator>
      );
    }
    return(
      <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
      <MyStack />
      </NavigationContainer>
      </ApplicationProvider>
      
    );
  }
  
}




export default App;
