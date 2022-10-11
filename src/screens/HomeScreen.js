import React, { useState } from 'react'
import{ StyleSheet,
        Text,
        View,
        FlatList,
        TouchableOpacity,
        Image,Modal, 
        Pressable,
} from 'react-native'; 
import DropDownComponent from '../components/DropDownComponent'
const HomeScreen = () => {

        const [modalToggle ,setModalToggle] = useState(false)

        const handlePopUp =()=>{
                setModalToggle(true)
        }

        const handleClosePopUp=()=>{
                setModalToggle(false)
        }

        const DATA = [
                {
                        "id":"1",
                        "title":"FIRST wealth Credit Card Credit Limit-Rs XXXX Annual Percentage Rate-XX%",
                },
                {
                        "id":"2",
                        "title":"Cover Your Hospitalisation expenses at just Rs 2200/year",
                },
                {
                        "id":"3",
                        "title":"Pradhan Mantri Jeevan Jyoti Bima Yojana",
                },
                {
                        "id":"4",
                        "title":"Pradhan Mantri Suraksha Bima Yojana",
                },
                
                ];

                const Item = ({title}) => {
                        return(
                                <View style={styles.item}>
                                        <Text style={styles.innertext}>{title}</Text>
                                        <TouchableOpacity style={styles.applyNow}
                                        
                                        onPress={handlePopUp}
                                        >
                                                <Text style={styles.innerbuttontext}>Apply Now</Text>
                                        </TouchableOpacity>
                        
                                </View>
                        
                        
                        );
                        
                        }

                const renderItem = ({item})=>(
                                <Item title={item.title}/>
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
        applyNow:{
                marginTop : 30,
                backgroundColor : "rgb(128,0,0)",
                height : 50 ,
                width : 200,
                borderRadius : 50,
                alignItems :"center",
                justifyContent :"center"

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
        },
        container: {
                marginTop:2,
                padding:2,
                alignItems: "center",
                backgroundColor: "#fff",
                borderWidth:5,
                flex:1,
        },
        item: {
                backgroundColor: '#ffcccc',
                padding: 42,
                marginVertical: 5,
                marginHorizontal: 16,
                height: 220,
                width: 600,
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
                fontSize: 20,
        
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
        
        },
        innerbuttontext: { 
                fontSize: 17,
                fontWeight: 'bold',
                color: '#fff'
        
        },

})

export default HomeScreen ;
