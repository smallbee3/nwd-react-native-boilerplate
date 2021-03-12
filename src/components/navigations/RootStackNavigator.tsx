import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import { useTheme } from 'dooboo-ui';
import React, { useState } from 'react';

export interface RootStackParamList {
  default: undefined;
  Intro: undefined;
  Temp: { param: string };
  Login: undefined;
  FindPw: undefined;
  SignUp: undefined;
}
import FindPw from '../pages/FindPw';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

export interface RootTabParamList {
  default: undefined;
  ConfList: undefined;
  EventList: undefined;
  FriendList: undefined;
  MyPage: undefined;
}
import ConfList from '../pages/ConfList';
import EventList from '../pages/EventList';
import FriendList from '../pages/FriendList';
import MyPage from '../pages/MyPage';

export type RootTabNavigationProps<
  T extends keyof RootTabParamList = 'default'
> = BottomTabNavigationProp<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

function RootNavigator(): React.ReactElement {
  const { theme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme.background,
          border: theme.border,
          card: theme.paper,
          primary: theme.primary,
          notification: theme.primary,
          text: theme.text,
        },
        dark: true,
      }}>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Screen name="ConfList" component={ConfList} />
          <Tab.Screen name="EventList" component={EventList} />
          <Tab.Screen name="FriendList" component={FriendList} />
          <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: {
              backgroundColor: theme.background,
            },
            headerTitleStyle: { color: theme.text },
            headerTintColor: theme.primary,
          }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="FindPw" component={FindPw} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default RootNavigator;
