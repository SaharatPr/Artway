import React from 'react'
import {
    View,
    Text,
    TextInput,
    Image
} from 'react-native';
import{
    ButtonGroup
} from '@ui-kitten/components';
import {styles} from './CreateDateOneDayeStyle'
class CreateDateOneDayPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        var x = "1/08/2020";
        return(
            <>
            <View style={styles.container}>
                <Text style={styles.txt} >
                    Create your trip name
                </Text>
                <TextInput style={styles.txtinput}></TextInput>
                <Text style={styles.txtdate} >
                    Create your trip day
                </Text>
                <View style={styles.date}>

                    <Image source={
                        {uri:'https://drive.google.com/uc?export=view&id=16nAUJfo2Ae3hPntVhVNjbO1_eKLUEu_P'}
                        } style={styles.imgcalenda}/>

                    <Text style={styles.txttxtcalenda} >
                        {x}
                    </Text>


                </View>
            </View>
            </>
        );
    }
}
export default CreateDateOneDayPage;