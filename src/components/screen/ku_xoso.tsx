//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button,Image,Text,ScrollView} from 'react-native';
//import all the components we are going to use.

export default class ku_xoso extends Component {

  render() {

    let ku_xoso ="https://kuvip8.com/wp-content/uploads/2020/09/ku_xoso.png";

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image style={{width: '100%', height: 200,}}
          source={{uri: ku_xoso}}
        />
        <Text style={styles.text} >
        {'\n'}
         *<Text style={{fontWeight: "bold"}}> KU CASINO</Text> là sản phầm đặc biệt của <Text style={{fontWeight: "bold"}}>KUBET</Text> với rất nhiều trò chơi hấp dẫn bao gồm : {'\n'}
          <Text style={{fontWeight: "bold"}}>
            {'\u00A0'}{'\u00A0'} . Xóc Đĩa Online.{'\n'}
            {'\u00A0'}{'\u00A0'} . Sicbo.{'\n'}
            {'\u00A0'}{'\u00A0'} . Baccarat</Text> với những <Text style={{fontWeight: "bold"}}>Dealer</Text> xinh đẹp trực tiếp tham gia chia bài,mang đến cảm giác hứng khởi cho khách hàng.{'\n'}
        * <Text style={{fontWeight: "bold"}}> KU CASINO</Text> là sản phẩm không ở đâu có chỉ duy nhất chúng tôi. {'\n'}
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
