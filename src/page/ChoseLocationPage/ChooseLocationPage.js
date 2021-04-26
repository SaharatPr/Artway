import React from 'react';
import MapView, { Heatmap, PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import {
  Button
} from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';
import { queryplace } from '../../Controller/GoogleMaps/GoogleMapsPlace'
import { styles } from './ChooseLocationPageStyle';
class ChooseLocationPage extends React.Component {
  constructor(props) {
    super(props);
    this.conponentDidmon();
    this.state = {
      location: null,
      displaysearch: "none",
      resultplace: null,
      pinlocation : [],
      zindex:0
    };
    this.pinlo = [];
    this.markermap = [];
    this.setaddmoreplace =" ";
  }
  async conponentDidmon() {
    const location = await this.handleuserlocation().then(lo => {
      return lo;
    });
    this.setState({ location: location });
  }

  handleuserlocation = async () => {
    return new Promise(async (resolve, reject) => {
      await Geolocation.getCurrentPosition(async (info) => {
        resolve({
          longitude: info.coords.longitude,
          latitude: info.coords.latitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.035
        });
      });
    });
  }

  async onChangeText(text) {
    const value = text;
    const resultplace = await queryplace(text);
    this.setState({ resultplace: resultplace });
  }

  dispalysearch() {
    this.setState({ displaysearch: "flex" });
    this.setState({ zindex: 2 });
  }

  async pinlocation(title, lat, lng){
  await  this.pinlo.push({
      latitude : lat,
      longitude : lng
    });
   await this.setState({pinlocation: this.pinlo});
   for (const key in this.state.pinlocation) {

    this.setaddmoreplace.push(
      <Text>
       "XXX"
      </Text>
      /* <View style={styles.item}>
        <TouchableOpacity style={styles.button} onPress={()=>this.pinlocation(title, lat, lng)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    /*   <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: "5%", position: "relative" }}>
      <TouchableOpacity key={key} style={styles.btnadd} onPress={this.dispalysearch.bind(this)}>
      </TouchableOpacity>
     <TouchableOpacity onPress={this.dispalysearch.bind(this)}>
        <Text key={key} style={styles.textadd}>
          {title}
            </Text>
      </TouchableOpacity> 
    </View>
    
    
    */
    );
    await this.markermap.push(<Marker key={key} coordinate={{ latitude : this.state.pinlocation[key].latitude , longitude : this.state.pinlocation[key].longitude }}>
      </Marker>);
   }
  //  console.log(this.setaddmoreplace);
   this.setState({ zindex: 0 });
  //  this.setState({ displaysearch: "none" });
  }
  render() {
    const DATA = this.state.resultplace;
    const Item = ({ title, lat, lng}) => (
      <View style={styles.item}>
        <TouchableOpacity style={styles.button} onPress={()=>this.pinlocation(title, lat, lng)}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      </View>
    );

    const renderItem = ({ item }) => (
      <Item title={item.name} lat={item.location.lat}  lng={item.location.lng}/>
    );
    return (
      <>
        <View style={styles.container}>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            showsUserLocation={true}
            region={this.state.location}
          >
          {this.markermap}
          </MapView>
        </View>

        <View style={styles.content}>
          <View style={styles.contenttrip}>
            <Text style={styles.textsubheader}>
              1 August 2020  
                </Text>
                <Text>
                =================
                </Text>
    
                {this.setaddmoreplace}
             
                
                <Text>
                =================
                </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: "5%", position: "relative" }}>
              <TouchableOpacity style={styles.btnadd} onPress={this.dispalysearch.bind(this)}>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.dispalysearch.bind(this)}>
                <Text style={styles.textadd}>
                  Add more Place
                    </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{zIndex: this.state.zindex , backgroundColor: "#FFFFFF", alignItems: 'center', position: "absolute", height: "100%", width: "100%", display: this.state.displaysearch }}>
            <TextInput style={styles.txtinput}
              onChangeText={text => this.onChangeText(text)}
              value={this.value}
            />
            <FlatList
              style={styles.autocompleteContainer}
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.name}
            />
            <View>

            </View>

          </View>
        </View>


      </>
    );
  }
}

export default ChooseLocationPage;
// {this.state.location?.latitude  &&           <Marker coordinate={{ latitude : this.state.location?.latitude , longitude : this.state.location?.longitude }}>
// </Marker>
 
// }
// {this.markermap}

// <Marker coordinate={{ latitude : this.state.location?.longitude , longitude : this.state.location?.longitude }}>
// </Marker>
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