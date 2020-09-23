//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button,Image,Text,ScrollView} from 'react-native';
//import all the components we are going to use.

export default class ku_game extends Component {

  render() {

    let ku_game ="https://kuvip8.com/wp-content/uploads/2020/09/ku_game.png";

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image style={{width: '100%', height: 200,}}
          source={{uri: ku_game}}
        />
        <Text style={styles.text} >
        {'\n'}
         * Với hàng trăm trò chơi khác nhau chúng tự tin khách  hàng sẽ có nhiều trò chơi hấp dẫn để tham gia giải trí tại trang mạng của chúng tôi. {'\n'}{'\n'}
           Những trò chơi được nhiều người lựa chọn như <Text style={{fontWeight: "bold"}}>bắn cá, xì dách</Text> …{'\n'}
        </Text>
        </ScrollView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    lineHeight: 19,
    fontSize: 16,
    textAlign: 'justify',
    marginTop:10,
    margin:5,
    //fontWeight: 'bold',

  }
});
