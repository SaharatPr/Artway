import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container : {                       
        flex: 1,
        flexDirection: "column",

       },
        imgbackgroud:{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
            alignItems: 'center',
        },
        txt :{
            fontSize:40,
            color:"#052238"
        },
        btncreate:{
            backgroundColor : "#052238",
            color : "#FFFFFF",
            borderColor : "#052238",
            width: "70%",
            paddingTop : "5%",
            paddingBottom : "5%",
            marginTop: "10%",
            
        },
        btndraf : {
            backgroundColor : "#ADACAC",
            width: "70%",
            paddingTop : "5%",
            paddingBottom : "5%",
            marginTop: "10%",
            borderColor : "#ADACAC",
        },
        txtbtn : {
            color : "#FFFFFF",
            
        }
    
});



export {styles};