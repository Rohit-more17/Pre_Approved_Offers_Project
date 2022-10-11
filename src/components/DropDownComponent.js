import React from 'react'
import {Text, View, StyleSheet} from 'react-native'
import {Picker} from '@react-native-picker/picker';

const DropDownComponent = () => {

        return <View  >

                <Picker
                style = {styles.picker}
                >
                        <Picker.Item style={{fontSize:20,}} label = "Better offers on card" value = "reason1"/>
                        <Picker.Item label = "Reason 2" value = "reason2"/>
                        <Picker.Item label = "Reason 3" value = "reason3"/>
                
                </Picker>


        </View>


}

const styles = StyleSheet.create({
  picker : {
          width : 600 ,
          height : 80 , 
          borderRadius : 10, 
          marginTop : 20 ,
          borderColor :"white",
          fontSize:20,
          color:"black",
          fontWeight : "bold",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 2,
          fontSize:20,
          backgroundColor:"white"
          
          
  }
})


export default DropDownComponent 