import React, { useState } from 'react'
import {View , Text , StyleSheet, Modal, TouchableOpacity} from 'react-native' 
import DropDownComponent from '../components/DropDownComponent'


const TempScreen = () => {

        const [modalToggle ,setModalToggle] = useState(true)

        const handlePopUp =()=>{
                setModalToggle(true)
        }

        const handleClosePopUp=()=>{
                setModalToggle(false)
        }

        return <View style={{backgroundColor:"white" , flex:1}}>
                <Text style={{fontSize:50}}>Temporary Screen</Text>
                <TouchableOpacity
                onPress = {handlePopUp}
                >
                        <View style={styles.button}>
                                <Text style={{color:"white", fontSize:20}}>Pop up</Text>
                        </View>

                </TouchableOpacity>

                <Modal
                transparent={true}
                animationType="slide"
                visible={modalToggle}
                >
                        <View style={styles.modalView}>
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
                                onPress = {()=>alert("Successful")}
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
                height:800,
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
                top : 10,
                fontWeight: "bold",
                fontSize:35, 
        },
        textId :{
                marginTop:20,
                fontSize:22,
                marginLeft:15,
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
        }
       
})

export default TempScreen ;