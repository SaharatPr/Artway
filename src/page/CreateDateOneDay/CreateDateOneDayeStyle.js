import {StyleSheet} from 'react-native';
const styles = StyleSheet.create(
    {
       container :{
        flex: 1,
        flexDirection: "column",
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        },
        txt:{
            color : "#052238",
            fontSize:30.0,
            fontWeight:"bold"
        },
        txtinput: {
            backgroundColor : '#E6E6E6',
            width:"80%",
            fontSize:25.0,
            padding: "3%",
            borderRadius:10,
            textAlign: "center",
            marginTop: "5%"
        },
        txtdate:{
            color : "#052238",
            fontSize:30.0,
            fontWeight:"bold",
            marginTop: "10%" 
        }, 
        date:{
            backgroundColor : "#052238",
            width : "50%",
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: 'center',
            borderRadius: 10,
            marginTop : "5%",
            flexDirection: "row",
            padding: "3%",
        },
        txttxtcalenda:{
            color : "#FFFFFF",
            fontSize: 18,
            flexDirection: "column",
        },
        imgcalenda: {
            width:20,
            height: 20,
            flexDirection: "row",
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: "column",
            marginRight:"10%"
        },
        selectdate:{
            width:"50%",
            borderRadius:10,
            borderColor: "#052238",
            marginTop:"5%",
            height:100
        },
        datetime:{
            backgroundColor : "#FF00FF"
        }

    }
);

export {styles};