import { StyleSheet} from 'react-native';

const styles = StyleSheet.create(
    {
        container :{

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
            backgroundColor : "#FFFFFF",
            borderColor : "#FFFFFF",
            bottom:100,
            right: 20,
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
            alignContent: "center",
            overflow:"visible"
        }
    }
);

export {styles}