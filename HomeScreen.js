import React from 'react'
import{ StyleSheet,
        Text,
        View,
        FlatList,
        TouchableOpacity,
        Image,
        Pressable,
} from 'react-native';

const HomeScreen = () => {


        const DATA = [
                {
                        "id":"1",
                        "title":"FIRST wealth Credit Card           Credit Limit-Rs XXXX            Annual Percentage Rate-XX%",
                },
                {
                        "id":"2",
                        "title":"Cover Your Hospitalisation              expenses at just Rs 2200/year",
                },
                {
                        "id":"3",
                        "title":"Pradhan Mantri Jeevan Jyoti              Bima Yojana",
                },
                {
                        "id":"4",
                        "title":"Pradhan Mantri Suraksha             Bima Yojana",
                },
                
                ];

                const Item = ({title}) => {
                        return(
                                <View style={styles.item}>
                                <Text style={styles.innertext}>{title}</Text>
                        <Pressable style={styles.butto}>
                        <Text style={styles.innerbuttontext}>{"Apply Now"}</Text>
                        </Pressable>
                        
                                </View>
                        
                        
                        );
                        
                        }

                const renderItem = ({item})=>(
                        <Item title={item.title}/>
                        );
                        return (
                        <View style={styles.container}>
                                <FlatList
                                data={DATA}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                                />
                        
                        <TouchableOpacity style={styles.button}>Dashboard</TouchableOpacity>
                        </View>
                        );

}

const styles = StyleSheet.create({

        container: {
                marginTop:2,
                padding:2,
                alignItems: "center",
                backgroundColor: "#fff"
        },
        item: {
                backgroundColor: '#ffcccc',
                padding: 42,
                marginVertical: 5,
                marginHorizontal: 16,
                height: 220,
                width: 300,
                borderRadius: 25,
                alignItems: 'right'
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
                fontFamily: 'YU Gothic',
                marginBottom: 20,
        
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
                fontFamily: 'YU Gothic',
                fontSize: 12,
                fontWeight: 'bold'
        
        },

})

export default HomeScreen ;