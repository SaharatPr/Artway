import { StyleSheet } from 'react-native'

import { Dimensions } from 'react-native';
const styles = StyleSheet.create({
    txtinput: {
        textAlignVertical:"center",
        backgroundColor: "#E6E6E6",
        width:"80%",
        alignItems: 'center',
        fontSize:15,
        marginTop:"2%",
        paddingTop:"2%",
        paddingBottom:"2%",
        paddingLeft:"5%",
        borderRadius:7
    },
    container: {
        // ...StyleSheet.absoluteFillObject,
        height: "40%",
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        height: "100%",
        borderTopRightRadius: 10,
        alignItems: 'center',
    },
    contenttrip: {
        paddingTop: "3%",
        width: "90%",
        height: "100%",
        zIndex:1,
        backgroundColor:"#FFFFFF"
    },
    textsubheader: {
        color: "#FF721A",
        fontSize: 18,
        fontWeight: "bold"
    },
    btnadd: {
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        backgroundColor: 'orange',
       

    },
    textadd: {
        paddingLeft: "5%",
        fontWeight:"bold"
    },
    itemText:{
        width:"80%"
    },
    autocompleteContainer: {
        width:"80%",
      },
      item: {
          fontSize:16
      },
      title: {
        fontSize: 16,
      },
      button: {
        paddingLeft: "5%",
        borderColor:"red",
        padding: 10,
        backgroundColor:"#FFFFFF",

      },
});



export { styles }