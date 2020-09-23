import React, { Component } from 'react';
import { Button, View, Text,Image,StyleSheet,Linking,ScrollView } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Screen5 extends Component {

  render() {
    let uu_dai ="https://kuvip8.com/wp-content/uploads/2020/09/uu_dai.png";

    return (
      <View style={{ flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
      //  marginTop:30,
     }}>

      <Image style={{width: '100%', height: 170,}}
        source={{uri: uu_dai}}
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
               * Tặng 20% cho lần nạp tiền đầu tiên. {'\n'}{'\n'}
               * Nhận 1 trong 5 món quà giá trị: {'\n'}{'\n'}
                  {'\u00A0'}{'\u00A0'}{'\u00A0'}- Máy hút bụi để bàn,{'\n'}{'\n'}
                  {'\u00A0'}{'\u00A0'}{'\u00A0'}- Tai nghe Bluetooth,{'\n'}{'\n'}
                  {'\u00A0'}{'\u00A0'}{'\u00A0'}- Máy phun sương cắm Usb, {'\n'}{'\n'}
                  {'\u00A0'}{'\u00A0'}{'\u00A0'}- Sạc dự phòng 2 lỗ,{'\n'}{'\n'}
                  {'\u00A0'}{'\u00A0'}{'\u00A0'}- Loa di động Bluetooth.{'\n'}{'\n'}
               * Tiền hoàn trả cao được trả ngay sau mỗi ván cược .{'\n'}
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
        margin:3,
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
    margin:2,
    fontWeight: 'bold',

  }
})
