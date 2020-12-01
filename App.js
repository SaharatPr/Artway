import React from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

{/*  Import Page */ }
import LoginPage from './src/page/LoginPage/LoginPage';
import SpashScreenPage from './src/page/SpashScreenPage/SpashScreen';
import HomePage from './src/page/HomePage/HomePage';
import CreateTripPage from './src/page/CreateTripPage/CreateTripPage'
import CreateDateOneDayPage from './src/page/CreateDateOneDayPage/CreateDateOneDayPage'
import ChooseLocationPage from './src/page/ChoseLocationPage/ChooseLocationPage'


import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
const Stack = createStackNavigator();
class App extends React.Component {
  
  constructor(props) {
    super(props);
  }
  render() {

    function MyStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="SpashScreenPage" component={SpashScreenPage} options={{ headerShown: false }} />
          <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
          <Stack.Screen name="LoginPage" component={LoginPage} options={{ headerShown: false }} />
          <Stack.Screen name="CreateTripPage" component={CreateTripPage}
            options={
              {
                headerBackTitleVisible: false,
                headerTransparent: true,
                title: " ",
                headerTintColor: "#052238"
              }
            }
          />
          <Stack.Screen name="CreateDateOneDayPage" component={CreateDateOneDayPage}
            options={
              {
                title: 'My trip',
                headerTitleStyle: {
                  color: "#052238",
                  fontSize: 24
                },
                headerRight: ({navigate}) => {

                  return (
                    <Button title="NEXT" color="#000000"
                   
                    >

                    </Button>)
                },
                headerTintColor: "#FFF",
                headerBackTitleVisible: false,
                headerTintColor: "#052238",

              }
            } />
          <Stack.Screen name="ChooseLocationPage" component={ChooseLocationPage} options={{ headerShown: false }}
          
          
          
          />


        </Stack.Navigator>
      );
    }
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </ApplicationProvider>

    );
  }

}




export default App;
