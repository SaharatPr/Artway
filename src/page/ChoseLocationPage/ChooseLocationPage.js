import React from 'react';
import MapView, { Heatmap, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    TouchableOpacity,
    Modal,
  } from 'react-native';
  import {
    Button
} from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';
import {queryplace} from '../../Controller/GoogleMaps/GoogleMapsPlace'
import { styles } from './ChooseLocationPageStyle';
import Autocomplete from 'react-native-autocomplete-input';
class ChooseLocationPage extends React.Component{
    constructor(props){
        super(props);
        this.conponentDidmon();
        this.state = {
          location : null,
          displaysearch : "none",
          resultplace: null
        };
    }
   async conponentDidmon(){
     const location =await this.handleuserlocation().then(lo=>{
       return lo;
     });
     this.setState({location : location});
    }

    handleuserlocation =async ()=>{
      return new Promise(async (resolve, reject) => {
       await Geolocation.getCurrentPosition(async (info) => {
          resolve({
            longitude :info.coords.longitude,
            latitude: info.coords.latitude,
            latitudeDelta: 0.09,
            longitudeDelta: 0.035
          });
        }); 
      });
    }
    
    async onChangeText(text){
      const value = text;
      const resultplace =await queryplace(text);
      this.setState({resultplace:resultplace});
    }

    dispalysearch(){
     this.setState({displaysearch : "flex"});
    }

    render(){
      const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
      const Item = ({ name }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{name}</Text>
        </View>
      );

      const renderItem = ({ item }) => (
        <Item title={item.title} />
      );
        return(
            <>
            <View style={styles.container}>

              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                showsUserLocation={true}
                region={this.state.location}
            />

            </View>

            <View style={styles.content}>
              <View style={styles.contenttrip}>
                <Text style={styles.textsubheader}>
                  1 August 2020
                </Text>
                <View style={{ flexDirection: 'row',alignItems:'center',paddingTop:"5%", position:"relative"}}>
                  <TouchableOpacity style={styles.btnadd} onPress={this.dispalysearch.bind(this)}>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.dispalysearch.bind(this)}>
                    <Text style={styles.textadd}>
                      Add more Place
                    </Text>
                  </TouchableOpacity>
                </View>


              </View>
              <View style={{backgroundColor:"#FFFFFF",alignItems:'center', position:"absolute", height:"100%", width:"100%", display:this.state.displaysearch}}>
              <TextInput style={styles.txtinput}
                    onChangeText={text => this.onChangeText(text)}
                    value={this.value}
                    ></TextInput>

                    <Autocomplete
                    autoCapitalize="none"
                    autoCorrect={false}
                    containerStyle={styles.autocompleteContainer}
                    data={this.state.resultplace?.resultplace}
                    
                    onChangeText={text => this.onChangeText(text)}
                    placeholder=""
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                  />
              </View>
            </View>
            

            </>
        );
    }
}

export default ChooseLocationPage;
// <TouchableOpacity style={styles.btnadd}>
// </TouchableOpacity>
// <View>
//             <Text>
//             dawdwadawdawda
//             </Text>
//             <TextInput style={styles.txtinput}
//             onChangeText={text => this.onChangeText(text)}
//             value={this.value}
//             ></TextInput>
//             </View>