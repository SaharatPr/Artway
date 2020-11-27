import { StyleSheet } from 'react-native'
  
 const styles = StyleSheet.create({   
   container : {                       
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#052238"
   },
   imagebackground:{
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: 'center',
   },
   icon : {
    justifyContent: "center",
    alignItems: 'center',

   },
   btnlogin : {
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    paddingVertical: 10,
    width:"80%",
    marginTop: "20%"
   },
   btnnewuser : {
    width: "80%",
    borderRadius: 2,
    backgroundColor : "#000000",
    marginTop: "3%",
    borderColor :"#FFFFFF"
   },
   txtnewuser :{
       color :"#FFFFFF"
   },
   or : {
    color : "#FFFFFF",
    marginTop: "4%",
   },
   btngroup : {
    marginTop: "4%",
   },   
   btnfacebook :{
       backgroundColor : "#395196",
       width : "40%",
       marginRight: "0.5%",
   },
   btngoogle:{
       backgroundColor : "#D9372B",
       width : "40%",
       marginLeft: "0.5%",
   }
 })
  


 const buttons = StyleSheet.create({  
   primary: {                         
     flex: 1,
     height: 70,
     backgroundColor: 'red',
     justifyContent: 'center',
     alignItems: 'center',
     marginLeft: 20,
     marginRight: 20
   }
 })
  
 export { styles, buttons }