import React, { Component } from 'react';
import { Button, View, Text,Image,StyleSheet,Linking,ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Screen5 extends Component {

  render() {
    let casino_regis ="https://kuvip8.com/wp-content/uploads/2020/09/casino_regis.png";

    return (
      <View style={{ flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        marginTop:30,
     }}>

      <Image style={{width: '100%', height: 170,}}
        source={{uri: casino_regis}}
      />
      <View style={styles.legend_button}>
        <Text style={styles.container_button}
         onPress={() => {
           Linking.openURL('http://www.kuvip86.com/');
         }}>
         ĐĂNG KÍ NGAY
       </Text>
       </View>
          <View style={styles.legend}>
            <ScrollView>
              <Text style={styles.text} >
              {'\n'}
               * KU thể thao mang đến cho khách hàng những trải nghiệm. {'\n'}{'\n'}
               * Mới nhất chuyên nghiệp nhất với nhiều thể loại kèo.{'\n'}{'\n'}
               * Và đa dạng giải đấu trên khắp hành tinh.{'\n'}
              </Text>
             </ScrollView>
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
        margin:3,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#003399',

    },
  legend:{
        margin:6,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginBottom:250,

    },
  text: {
    lineHeight: 20,
    fontSize: 16,
    textAlign: 'justify',
    marginTop:10,
    margin:4,
    fontWeight: 'bold',

  },

})
