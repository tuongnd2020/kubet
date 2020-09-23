//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button,Image,Text,ScrollView} from 'react-native';
//import all the components we are going to use.

export default class ku_sport extends Component {

  render() {

    let kuthethao ="https://kuvip8.com/wp-content/uploads/2020/09/kuthethao.png";

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <ScrollView>
        <Image style={{width: '100%', height: 200,}}
          source={{uri: kuthethao}}
        />
        <Text style={styles.text} >
        {'\n'}
         *<Text style={{fontWeight: "bold"}}> KU THỂ THAO</Text> cung cấp cho khách hàng rất nhiều sàn nhằm mang đến sự lựa chọn đa dạng bao gồm sàn: {'\n'}
          <Text style={{fontWeight: "bold", color:"red"}}>
            {'\u00A0'}{'\u00A0'} . Ku Thể Thao,{'\n'}
            {'\u00A0'}{'\u00A0'} . JZ Thể Thao,{'\n'}
            {'\u00A0'}{'\u00A0'} . CMD Thể Thao,{'\n'}
            {'\u00A0'}{'\u00A0'} . SAbA Thể Thao, {'\n'}
            {'\u00A0'}{'\u00A0'} . AG Thể Thao và BBIN Thể Thao.</Text>{'\n'}
        * Trong<Text style={{fontWeight: "bold"}}> KU</Text> thể thao có rất nhiều môn khác nhau để cho khách hàng lựa chọn bao gồm:{'\n'}
          {'\u00A0'}{'\u00A0'}{'\u00A0'}<Text style={{fontWeight: "bold"}}>. Bóng Đá, Bóng Rổ, Quần Vợt, Hockey</Text>, và các giải thể thao điện tử hàng đầu thế giới.Với sảnh ku thể thao mới ra mắt khách hàng sẽ có những trải nghiệm mới nhất với cá cược thể thao.
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
