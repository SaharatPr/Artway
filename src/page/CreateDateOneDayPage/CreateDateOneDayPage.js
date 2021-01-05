import React from 'react'
import {
    View,
    Text,
    TextInput,
    Image
} from 'react-native';
import {
    ButtonGroup
} from '@ui-kitten/components';
import { styles } from './CreateDateOneDayeStyle';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import styled from 'styled-components'
class CreateDateOneDayPage extends React.Component {
    constructor(props) {
        super(props);
    }
    async onChangeText(text){
        const value = text;
       this.props.navigation.setParams({ tripname: text})
      }
    render() {
  
   
        var x = "1/08/2020";
        return (
            <>
                <View style={styles.container}>
                    <Text style={styles.txt} >
                        Create your trip name
                </Text>
                    <TextInput style={styles.txtinput}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.value}
                    ></TextInput>
                    <Text style={styles.txtdate} >
                        Create your trip day
                </Text>
                    <View style={styles.date}>
                        <Image source={
                            { uri: 'https://drive.google.com/uc?export=view&id=16nAUJfo2Ae3hPntVhVNjbO1_eKLUEu_P' }
                        } style={styles.imgcalenda} />

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

 // <ButtonGroup style={styles.selectdate}>
                    //     <ScrollPicker style={styles.datetime}
                    //         dataSource={[
                    //             'a',
                    //             'b',
                    //             'c',
                    //             'd',
                    //         ]}
                    //         selectedIndex={1}
                    //         renderItem={(data, index, isSelected) => {
                    //             //
                    //         }}
                    //         onValueChange={(data, selectedIndex) => {
                    //             //
                    //         }}
                    //         wrapperBackground={'#FFFFFF'}
                              
                    //         highlightColor={'#FFFFFF'}
                    //         highlightBorderWidth={2}
                    //         activeItemColor={'#222121'}
                    //         itemColor={'#B4B4B4'}
                    //     />
                    //     <ScrollPicker style={styles.datetime}
                    //         dataSource={[
                    //             'a',
                    //             'b',
                    //             'c',
                    //             'd',
                    //         ]}
                    //         selectedIndex={1}
                    //         renderItem={(data, index, isSelected) => {
                    //             //
                    //         }}
                    //         onValueChange={(data, selectedIndex) => {
                    //             //
                    //         }}
                    //         wrapperBackground={'#FFFFFF'}
                              
                    //         highlightColor={'#FFFFFF'}
                    //         highlightBorderWidth={2}
                    //         activeItemColor={'#222121'}
                    //         itemColor={'#B4B4B4'}
                    //     />
                    //     <ScrollPicker style={styles.datetime}
                    //     dataSource={[
                    //         'a',
                    //         'b',
                    //         'c',
                    //         'd',
                    //     ]}
                    //     selectedIndex={1}
                    //     renderItem={(data, index, isSelected) => {
                    //         //
                    //     }}
                    //     onValueChange={(data, selectedIndex) => {
                    //         //
                    //     }}
                    //     wrapperBackground={'#FFFFFF'}
                          
                    //     highlightColor={'#FFFFFF'}
                    //     highlightBorderWidth={2}
                    //     activeItemColor={'#222121'}
                    //     itemColor={'#B4B4B4'}
                    // />
                        
                    // </ButtonGroup>