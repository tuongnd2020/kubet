import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';

import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';
import ku_sport from '../screen/ku_sport';
import ku_casino from '../screen/ku_casino';
import ku_xoso from '../screen/ku_xoso';
import ku_game from '../screen/ku_game';
import ku_film from '../screen/ku_film';

import MaterialBottomTabNavigator from './MaterialBottomTabNavigator';
import MaterialTopTabNavigator from './MaterialTopTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import StackNavigator from './StackNavigator';
import { useThemeContext } from '../../providers/ThemeProvider';


const Stack = createNativeStackNavigator();


function RootNavigator(): React.ReactElement {
  const { theme } = useThemeContext();
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.background,
        },
        headerTitleStyle: { color: theme.fontColor },
        headerTintColor: theme.tintColor,
      //  headerShown: false,
      }}
    >
      <Stack.Screen
        name = " "
        component={BottomTabNavigator}
           options= {{headerShown: false}}
      />
    <Stack.Screen name="KU THỂ THAO" component={ku_sport}  screenOptions={{ headerShown: true}}/>
    <Stack.Screen name="KU CASINO" component={ku_casino}  screenOptions={{ headerShown: true}}/>
    <Stack.Screen name="KU XỔ SỐ" component={ku_xoso}  screenOptions={{ headerShown: true}}/>
    <Stack.Screen name="KU GAME" component={ku_game}  screenOptions={{ headerShown: true}}/>
    <Stack.Screen name="KU PHIM" component={ku_film}  screenOptions={{ headerShown: true}}/>

      </Stack.Navigator>
      </NavigationContainer>
      // <Stack.Navigator
      //   screenOptions={{
      //     headerStyle: {
      //       backgroundColor: theme.background,
      //     },
      //     headerTitleStyle: { color: theme.fontColor },
      //     headerTintColor: theme.tintColor,
      //   }}
      // >
      //   <Stack.Screen name="Intro" component={Intro} />
      //   <Stack.Screen name="StackNavigator" component={StackNavigator} />
      //   <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      //   <Stack.Screen
      //     name="BottomTabNavigator"
      //     component={BottomTabNavigator}
      //   />
      //   <Stack.Screen
      //     name="MaterialTopTabNavigator"
      //     component={MaterialTopTabNavigator}
      //   />
      //   <Stack.Screen
      //     name="MaterialBottomTabNavigator"
      //     component={MaterialBottomTabNavigator}
      //   />
      // </Stack.Navigator>
      //</NavigationContainer>
  );
}

export default RootNavigator;
