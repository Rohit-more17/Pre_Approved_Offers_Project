import React, { useState } from 'react'
import{ StyleSheet,
        Text,
        View,
        FlatList,
        TouchableOpacity,
        Modal, 

} from 'react-native'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import DropDownComponent from '../components/DropDownComponent'
const HomeScreen = () => {

        const [modalToggle ,setModalToggle] = useState(true)

        const handlePopUp =()=>{
                setModalToggle(true)
        }

        const handleClosePopUp=()=>{
                setModalToggle(false)
        }

        const handleConfirm =()=>{
                
                alert("Successful")

        }

        const DATA = [
                {
                        "id":"1",
                        "title":"FIRST wealth Credit Card Credit Limit-Rs XXXX Annual Percentage Rate-XX%",
                        color:"#666699",
                        textcolor:"#fff",
                        buttoncolor: "#fff",
                        innerbuttontext: "rgb(128,0,0)",
                        "image":"D:\Flatlist Project\Pre_Approved_Offers_Project\assets\Credit-Card.png"
                },
                {
                        "id":"2",
                        "title":"Cover Your Hospitalisation expenses at just Rs 2200/year",
                        color:"#ff6666",
                        textcolor:"#fff",
                        buttoncolor: "#fff",
                        innerbuttontext: "rgb(128,0,0)",
                        "image":"D:\Flatlist Project\Pre_Approved_Offers_Project\assets\handshake-heart.png"
                        
                },
                {
                        "id":"3",
                        "title":"Pradhan Mantri Jeevan Jyoti Bima Yojana",
                        color:"#ffe5cc",
                        textcolor:"#000000",
                        buttoncolor: "rgb(128,0,0)",
                        innerbuttontext: "#fff",
                        "image":"D:\Flatlist Project\Pre_Approved_Offers_Project\assets\PMJJBY.png"
                        
                },
                {
                        "id":"4",
                        "title":"Pradhan Mantri Suraksha Bima Yojana",
                        color:"#cce6ff",
                        textcolor:"#000000",
                        buttoncolor: "rgb(128,0,0)",
                        innerbuttontext:"#fff",
                        "image":"D:\Flatlist Project\Pre_Approved_Offers_Project\assets\PMJDY.png"
                        

                },
                
                ];

                const Item = ({title, color, id, textcolor, image, buttoncolor, innerbuttontext}) => {
                        return(
                                
                                <View style={{ ...styles.item, backgroundColor: color}}>

                                        <Text style={{ ...styles.innertext, color: textcolor}}>{title}</Text>




                                        <TouchableOpacity style={{ ...styles.applyNow, backgroundColor: buttoncolor}}

                                        
                                        onPress={handlePopUp}

                                        >
                                                <Text style={{ ...styles.innerbuttontext, color:innerbuttontext}}>Apply Now</Text>
                                        </TouchableOpacity>

                        
                                </View>
                        
                        
                        );
                        
                        }

                const renderItem = ({item})=>(
                                <Item title={item.title} color={item.color} id={item.id} textcolor={item.textcolor} image={item.image} buttoncolor={item.buttoncolor} innerbuttontext={item.innerbuttontext}/>
                        )
        return  <View style={styles.container}>
                
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id}/>
                

                <TouchableOpacity  style={styles.Dashboard_button}>
                        <Text style={styles.Dashboard}>Dashboard</Text>      
                </TouchableOpacity>
                <Modal
                transparent={true}
                animationType="slide"
                visible={modalToggle}
                >
                        
                        <View style={styles.modalView}>
                                <View style = {styles.topImage}>
                                        <MaterialIcons name="info-outline" size={70} color="white" />
                                </View>
                                <Text style={styles.topText}>This customer already has a banking relationship with us</Text>
                                
                                <Text style={styles.textId}>The following accounts exist under the Customer ID *****8471</Text>

                               <View style={styles.accountsContainer}>
                                        <View style={styles.type1}>
                                                <View style={styles.inType}>
                                                        <Text style={{fontSize:20}}>Account</Text>
                                                        <Text style = {{fontWeight:"bold", fontSize:20}}>Type 1</Text>
                                                        
                                                </View>
                                                <View style={styles.inType}>
                                                        <Text style={{fontSize:20}}>Account Number 1</Text>
                                                        <Text style = {{fontWeight:"bold", fontSize:20}}>*******5415</Text>
                                                </View>
                                        </View>
                                                
                                        <View style={styles.type1}>
                                                <View style={styles.inType}>
                                                        <Text style={{fontSize:20}}>Account</Text>
                                                        <Text style = {{fontWeight:"bold", fontSize:20}}>Type 2</Text>
                                                        
                                                </View>
                                                <View style={styles.inType}>
                                                        <Text style={{fontSize:20}}>Account Number 2</Text>
                                                        <Text style = {{fontWeight:"bold", fontSize:20}}>******4579</Text>
                                                </View>
                                        </View>


                               </View>

                               <View style={styles.numberContainer}>
                                        <Text style={{color:"white",fontSize:20}}>Customers registered mobile number +91 32903 23231 will be used for account opening</Text>
                               </View>
                                <View style={styles.reasonView}>
                                <Text  style={{fontSize:20}}>Select reason for opening new account</Text>
                                <DropDownComponent></DropDownComponent>
                                </View>
 
                                <TouchableOpacity
                                onPress = {handleConfirm}
                                style ={styles.confirm}
                                >
                                        <Text style ={{fontWeight:"bold",  color :"white" , fontSize :20}}>Confirm</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                onPress={handleClosePopUp}>
                                        <Text style ={{marginTop :20,fontWeight:"bold",fontSize : 20 , color :"rgb(128,0,0)"}}>Cancel</Text>
                                </TouchableOpacity>
                        </View>
                </Modal>


                
                </View>
        
        
        
}

const styles = StyleSheet.create({
        topImage :{
                height : 100 , 
                width : 100 , 
                backgroundColor : "rgb(235, 149, 50)", 
                borderRadius : 200, 
                position : "absolute" , 
                top : -50, 
                alignItems :"center",
                justifyContent :"center"
        },
        applyNow:{
                marginTop : 20,
                height : 50 ,
                width : 110,
                borderRadius : 50,
                alignItems :"center",
                justifyContent :"center",
                marginLeft: 140

        },

        Dashboard_button:{
                marginTop : 10,
                backgroundColor : "rgb(128,0,0)",
                height : 50 ,
                width : 200,
                borderRadius : 50,
                alignItems :"center",
                justifyContent :"center",
                marginBottom: 60

        },
        Dashboard:{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold'
        },

        button : {
                alignItems:"center",
                justifyContent:"center",
                alignSelf:"center",
                height:40,
                width : 80,
                backgroundColor : "blue",

        },
        modalView: {
                alignSelf:"center",
                top:170,
                height:840,
                width:670,
                backgroundColor: "#ececec",
                borderRadius: 20,
                margin:30,
                padding:15,
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                width: 0,
                height: 2
                },
                shadowOpacity: 5,
                shadowRadius: 4,
                elevation: 5,
        },
        topText :{
                marginHorizontal : 35,
                marginTop : 45,
                top : 10,
                fontWeight: "bold",
                fontSize:35, 
        },
        textId :{
                marginTop:22,
                fontSize:21,
                marginRight : 9,
        },
        accountsContainer :{
                marginTop:20,
                width : 600,
                height :180 , 
                backgroundColor : "white",
                borderRadius : 9,
        },
        type1:{
                padding  : 15 ,
                height :90,
                width:600, 
                flexDirection : "row",
        },
        inType :{ 
                flex : 1 ,
        },
        numberContainer : {
                marginTop : 20 ,
                height :90,
                width:600, 
                backgroundColor : "#050A30",
                borderRadius : 9,
                padding : 20,

        },

        reasonView :{
                marginTop : 20,
                height : 100,
                width : 600, 
        },
        confirm :{
                marginTop : 70,
                backgroundColor : "rgb(128,0,0)",
                height : 50 ,
                width : 200,
                borderRadius : 50,
                alignItems :"center",
                justifyContent :"center"
        },
        container: {
                marginTop:2,
                padding:2,
                alignItems: "center",
                backgroundColor: "#fff",
                flex:1,
        },
        item: {
                backgroundColor: '#ffcccc',
                padding: 42,

                marginVertical: 12,
                marginHorizontal: 16,
                height: 220,
                width: 700,

                borderRadius: 25,

        },
        button: {
                padding: 20,
                marginTop:30,
                marginBottom: 40,
                borderWidth : 2 ,
                height : 20,
                width : 100,
                justifyContent:"center",
                alignItems :"center",
                backgroundColor:"#b3b3ff",
                borderRadius:20,
        },
        innertext: { 
                marginBottom: 20,
                fontWeight: 'bold',
                fontSize: 24,
                marginLeft:140

        
        },
        butto: {
                padding: 20,
                marginTop:30,
                marginBottom: 40,
                borderWidth : 2 ,
                height : 15,
                width : 70,
                justifyContent:"center",
                alignItems :"center",
                backgroundColor:"#ff4d4d",
                borderRadius:20,
                fontFamily :"arial"
        },
        innerbuttontext: { 

                fontSize: 17,
                fontWeight: 'bold',

        
        },

})

export default HomeScreen ;