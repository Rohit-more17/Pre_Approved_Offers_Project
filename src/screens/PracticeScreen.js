import React from "react";
import {View , Text , StyleSheet, TouchableOpacity} from 'react-native'

const PracticeScreen = () => {

        const names = ["Row","Row Reverse","Column","Column Reverse"]

        return <View style = {styles.mainView}> 
                <View style = {styles.red}>
                        <View style={{borderWidth : 2 , flex : 1, margin : 10}}>

                        </View>
                </View>
                <View style = {styles.green}>
                        <View style ={styles.midView}>
                                {names.map((name , index)=>{
                                        return <View style = {styles.buttonsView}>
                                                        <TouchableOpacity key={name} style = {styles.button}>
                                                                <Text>{name}</Text>
                                                        </TouchableOpacity>
                                                
                                        </View>
                                })}
                        <Text>Check 1 </Text>
                        </View>
                </View>
                <View style ={styles.blue}>

                        <View style={styles.b1}></View>
                        <View style={styles.b1}></View>
                        <View style={styles.b1}></View>

                </View>
        </View>
}

const styles = StyleSheet.create({
        mainView :{
                flexDirection: "column",
                flex : 1,
        },
        red :{
                flex: 0.5, backgroundColor: "red" , 
                   
        },
        green : {
                flex : 5 , 
        },
        blue : {
                flex : 0.5 ,
                backgroundColor :"blue",
                flexDirection :"row",
        },
        b1 : {
                borderWidth : 1 ,
                flex : 1,
                margin : 10 ,
                borderColor:  "white"

        },
        midView :{
                marginHorizontal : 16,
                borderWidth : 3 ,
                borderColor :"white",
                flex : 1,
        },
        buttonsView:{
                flex : 1,
                flexDirection : "row",
                borderWidth : 1,
                justifyContent : "center",
                alignItems:"center"

        },
 
        
})

export default PracticeScreen ;