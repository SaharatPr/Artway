import React from 'react';
import {
    View,
    ImageBackground,
    div,
    Image,
    TouchableOpacity
} from 'react-native';
import { styles } from './LoginStyle'
import { Button, 
  ButtonGroup, 
  Text } from '@ui-kitten/components';
class LoginPage extends React.Component{
        constructor(props){
          super(props);
        }
        render(){
            return(
              <View style={styles.container}>
              <ImageBackground source={require("../../../assets/background/home.png")} style={styles.imagebackground}>
                <Image source={require('../../../assets/icon/app/icon-app-spashscreen.png')} style={styles.icon}>
                </Image>
                <Button style={styles.btnlogin} onPress={()=>this.props.navigation.navigate('HomePage')}>
                  <Text>
                    Login
                  </Text>
                </Button>
                <Button style={styles.btnnewuser}>
                  <Text style={styles.txtnewuser}>
                    New user? Sign up
                  </Text>
                </Button>
                <Text style={styles.or}>
                  - or connect with -
                </Text>
                <ButtonGroup style={styles.btngroup}>
                  <Button style={styles.btnfacebook}>
                    <Text style={styles.or}>
                      Facebook
                    </Text>
                  </Button>
                  <Button style={styles.btngoogle}>
                    <Text style={styles.or}>
                      Google
                    </Text>
                  </Button>
                </ButtonGroup>

              </ImageBackground>

              </View>
            );
          }

}

export default LoginPage;