import React from 'react'
import {
    View,
    ImageBackground
} from 'react-native';
import { Button, Text} from '@ui-kitten/components';
import { 
    styles,

} from './CreateTripStyle'
class CreateTripPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://drive.google.com/uc?export=view&id=1N70J7xubuX71iz2uU1lHoT7B7B3_qRtl' }} style={styles.imgbackgroud}>
                <Text category='h1' style={styles.txt}>
                    Create your trip
                </Text>    
                <Button style={styles.btncreate} onPress ={()=>this.props.navigation.navigate('CreateDateOneDayPage')}>
                    <Text style={styles.txtbtn}>
                        CREATE 1 DAY TRIP
                    </Text>
                </Button>
                <Button style={styles.btncreate}>
                    <Text style={styles.txtbtn}>
                        CREATE MULTIPLE DAY TRIP
                    </Text>
                </Button>
                    <Button style={styles.btncreate}>
                    <Text style={styles.txtbtn}>
                        CREATE FROM MY ROUTE
                        </Text>
                    </Button>
                    <Button style={styles.btndraf}>
                    <Text style={styles.txtbtn}>
                       YOUR DRAFT
                       </Text>
                    </Button>
                </ImageBackground>
            </View>


        );
    }
}

export default CreateTripPage;