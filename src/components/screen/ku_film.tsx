//This is an example code for Navigator//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Button,Image,Text,ScrollView} from 'react-native';
//import all the components we are going to use.

export default class ku_film extends Component {

  render() {

    let ku_film  ="https://kuvip8.com/wp-content/uploads/2020/09/ku_film.png";

    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <ScrollView>
        <Image style={{width: '100%', height: 200,}}
          source={{uri: ku_film}}
        />
        <Text style={styles.text} >
        {'\n'}
         * Với rất nhiều bộ phim<Text style={{fontWeight: "bold"}}> HOT </Text>được chúng tôi sưu tập nhằm mang đến cho hội viên những giây phút giải trí thực thụ. {'\n'}{'\n'}
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
