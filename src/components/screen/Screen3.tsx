import React, { Component } from 'react';
import { StyleSheet,  View ,Text,Image,Button,Alert
,FlatList,Linking,TouchableHighlight,ScrollView} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import  logo from '../../../assets/icons/logo.png';
import { createStackNavigator, createAppContainer } from 'react-navigation';


export default class Home extends Component {
  constructor(props) {
    super(props);
    let link = "https://kuvip8.com/wp-content/uploads/2020/09/";
    this.state = {
      images: [
        link+"slide-cool.jpg",
        link+"slide-khuyen-mai.jpg",
        link+"slide-qua-tang.jpg",
        link+"slide-the-thao.jpg",
      ]
      };
  }

  OnBUttonPress = () => {
   //  Alert();
      this.props.navigator.push({
        id: 'Registry'
      })
  }
  render() {
    const { navigate } = this.props.navigation;
    let link = "https://kuvip8.com/wp-content/uploads/2020/09/";

    let casino_ku = link+"casino_ku.png";
    let casino_live =link+"casino_live.png";
    let casino_football =link+"casino_football.png";
    let casino_xoso =link+"casino_xoso.png";
    let casino_pocker =link+"casino_pocker.png";
    let casino_game =link+"casino_game.png";
    let casino_cool =link+"casino_cool.png";
    let casino_film =link+"casino_film.png";
    let casino_sport =link+"casino_sport.png";

    const DATA = [

      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '',
        url:  casino_football,
        link: 'KU THỂ THAO',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '',
        url:  casino_xoso,
        link: 'KU XỔ SỐ',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '',
        url:  casino_pocker,
        link: 'KU GAME',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '',
        url:  casino_game,
        link: 'KU GAME'
      }
      ,
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '',
        url:  casino_film,
        link: 'KU PHIM'
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: '',
        url:  casino_cool,
        link: 'KU PHIM'
      }

    ];
    const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
    const renderItem = ({ item }) => (
      <View style={styles.container}>

        <TouchableHighlight onPress={() =>navigate(item.link)}>
          <Image style={{width: '98%', height: 80,}}
            source={{uri: item.url}}
          />
          </TouchableHighlight>
          </View>
     );

    return (


      <View style={styles.container}>
          <View style={styles.stretch} >
                <Image source={logo}
                  style={{width: 60, height: 50}} />
                  <View style={styles.fixToText}>

                      <Text style={styles.container_button}
                        onPress={() => {
                          Linking.openURL('http://www.kuvip86.com/');
                        }}>

                       Đăng ký
                     </Text>

                     <Text style={styles.container_button}
                      onPress={() => {
                        Linking.openURL('http://www.kuvip86.com/');
                      }}>
                      Đăng nhập
                    </Text>

         </View>
         </View>
         <View style={styles.slide}>
            <SliderBox
              images={this.state.images}
            //  autoplay
              circleLoop
              imageLoadingColor="#2196F3"
            />
             </View>
        <View>
        <ScrollView>
        <View style={{width: '100%', height: 170, flexDirection: 'column'}}>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex: 1, margin: 2}} >
            <TouchableHighlight onPress={() =>navigate('KU THỂ THAO')} >
              <Image style={{width: '98%', height: 170,}}
                source={{uri: casino_sport}}
              />
               </TouchableHighlight>
            </View>
          <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{flex: 1,  margin: 2}} >
             <TouchableHighlight onPress={() =>navigate('KU CASINO')} >
              <Image style={{width: '100%', height: 82,}}
                source={{uri: casino_ku}}
              />
              </TouchableHighlight>
           </View>
            <View style={{flex: 1, margin: 2}} >
            <TouchableHighlight onPress={() =>navigate('KU CASINO')} >
              <Image style={{width: '100%', height: 82,}}
                source={{uri: casino_live}}
              />
              </TouchableHighlight>
           </View>
          </View>

        </View>
       </View>
  </ScrollView>
        </View>

        <FlatList
            numColumns={2}
            columnWrapperStyle={styles.row}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />


      </View>

    );

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
  stretch:{
      paddingTop: 30,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  fixToText: {
      textAlign: 'center',
      marginVertical: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },

    bottom: {
    //flex: 0.3,
    //backgroundColor: "#003399",
    borderWidth: 1,
    borderRadius: 10,
    marginRight:2

  },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 2,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    row: {
           flex: 1,
           justifyContent: "space-between",
           height: 80, maxWidth: '100%',
           marginTop:5,
           marginLeft:3,
           marginRight:3
       },

  container_button: {
    // flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     textAlign:'center',
     paddingTop: 5,
     //backgroundColor: '#003399',
     color:'#003399',
     width: 100,
     height: 30,
     borderWidth: 1,
     borderRadius: 10,
     marginRight:2,
     fontWeight: "bold"

   },
   slide: {
     // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign:'center',
      maxWidth: '98%',
      height: 200,
      marginLeft:3,
    },

});
