

import React from 'react';
import { View, Image, Button, ImageBackground, StyleSheet } from 'react-native';

class SpashScreen extends React.Component {
    constructor(props) {
        super(props);
        this.switchScreen();

    }
    switchScreen() {
        const { navigate } = this.props.navigation;
      setTimeout(function(){ 
          navigate('LoginPage');
       }, 1000)
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require("../../../assets/background/home.png")} style={styles.image}>
                    <Image source={require('../../../assets/icon/app/icon-app-spashscreen.png')} styles={styles.icon}>
                    </Image>
                </ImageBackground>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#052238"
  
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: 'center',
    },
    icon:{
      justifyContent: "center",
      alignItems: 'center',
    }
  });
  
export default SpashScreen;