import { StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        container :{
            position:"absolute",
            backgroundColor:"red",
            zIndex:4,
            height:"10%",
            bottom:0,
            right:0
        },
        tabbottom : {
            backgroundColor : "#FF00FF"
        },
        btnrout : {
            borderRadius:100,
            position:'absolute',
            flex:1,
            zIndex:3,
            padding: "10%",
            bottom:"11%",
            right:"5%",
            backgroundColor : "#FFFFFF",
            borderColor : "#FFFFFF",
            textAlign: "center",
            alignContent: "center",
            justifyContent:"center",
            shadowColor: "#000",
            shadowOffset: {
	            width: 0,
	            height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            elevation: 9,
        },
        imgrout :{
            justifyContent:"center",
            width:"70%",
            height:"70%",
            marginLeft:"auto",
            marginRight:"auto",
            marginTop:"auto",
            marginBottom:"auto",
            alignContent: "center",
            overflow:"visible"
        }
    }
);

export {styles}