import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { ReactElement } from 'react';

import { IC_MASK } from '../../utils/Icons';
import { IC_SUPPORT } from '../../utils/Icons1';
import { IC_DOLA } from '../../utils/Icons2';
import { IC_TRANFER } from '../../utils/Icons3';
import { IC_USER } from '../../utils/Icons4';




import { Image } from 'react-native';
import Screen1 from '../screen/Screen1';
import Screen2 from '../screen/Screen2';
import Screen3 from '../screen/Screen3';
import Screen4 from '../screen/Screen4';
import Screen5 from '../screen/Screen5';

import logo from '../../../assets/icons/logo.png';


export type BottomTabParamList = {
  default: undefined;
};

export type BottomTabNavigationProps<
  T extends keyof BottomTabParamList = 'default'
> = BottomTabNavigationProp<BottomTabParamList, T>;

const Tab = createBottomTabNavigator<BottomTabParamList>();

const TabBarIcon = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 35 : 29,
        height: focused ? 35 : 29,
      }}
      source={IC_MASK}
    />
  );
};
const TabBarIcon1 = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 35 : 29,
        height: focused ? 35 : 29,
      }}
      source={IC_SUPPORT}
    />
  );
};
const TabBarIcon2 = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 35 : 29,
        height: focused ? 35 : 29,
      }}
      source={IC_DOLA}
    />
  );
};
const TabBarIcon3 = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 35 : 29,
        height: focused ? 35 : 29,
      }}
      source={IC_TRANFER}
    />
  );
};
const TabBarIcon4 = (focused: boolean): React.ReactElement => {
  return (
    <Image
      style={{
        width: focused ? 35 : 29,
        height: focused ? 35 : 29,
      }}
      source={IC_USER}
    />
  );
};


function MaterialBottomTabNavigator(): ReactElement {
  return (
    <Tab.Navigator
    initialRouteName="Screen3"
      // screenOptions={{
      //   tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon(focused),
      // }}
    >
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: 'Ưu đãi',
          tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon(focused),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
        tabBarLabel: 'Hỗ trợ',
         tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon1(focused),

        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon2(focused),
           headerTitle: props => <LogoTitle {...props} />

        }}
      />
      <Tab.Screen
        name="Screen4"
        component={Screen4}
        options={{
          tabBarLabel: 'Giao dịch',
          tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon3(focused),

        }}
      />
      <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{
          tabBarLabel: 'Tôi',
          tabBarIcon: ({ focused }): React.ReactElement => TabBarIcon4(focused),
        }}
      />

    </Tab.Navigator>
  );

}

export default MaterialBottomTabNavigator;
