import React, { Component } from 'react';
import { Button, View, Text,Image,StyleSheet,Linking } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Screen5 extends Component {

  render() {
    let support ="https://kuvip8.com/wp-content/uploads/2020/09/support.png";

    return (
      <View style={{ flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
      //  marginTop:80,
     }}>

      <Image style={{width: '100%', height: 170,}}
        source={{uri: support}}
      />
      <View style={styles.legend_button}>
        <Text style={styles.container_button}
         onPress={() => {
           Linking.openURL('https://tawk.to/chat/5d32dbc66d80831228392680/default');
         }}>
         HỔ TRỢ
       </Text>
       </View>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'stretch',
  },
  container_button:{
    marginTop:5,
    fontWeight: "bold",
    width: 240,
    height: 40,
    color:'#FFF',
    textAlign:'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  } ,
  legend_button:{
      //  flex: 1,
        marginTop:30,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#003399',
        textAlign:'center',
        justifyContent: 'center',
        width: '95%',
        height: 100,
        alignItems: 'center',


    },
  legend:{
        margin:3,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',

    },
  text: {
    lineHeight: 20,
    fontSize: 16,
    textAlign: 'justify',
    marginTop:10,
    margin:2,
    fontWeight: 'bold',

  }
})
