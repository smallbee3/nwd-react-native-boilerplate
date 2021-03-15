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
import React from 'react';
import { useRecoilState } from 'recoil';

export interface RootStackParamList {
  default: undefined;
  Intro: undefined;
  Temp: { param: string };
  Login: undefined;
  FindPw: undefined;
  SignUp: undefined;
  ConfList: undefined;
  ConfDetail: undefined;
  ConfIntro: undefined;
  ConfPeople: undefined;
  ConfSubmit: undefined;
  ConfSchedule: undefined;
  ProgramList: undefined;
  ProgramDetail: undefined;
  NewsList: undefined;
  NewsDetail: undefined;
}
import { userState } from '../../store/atom';
import FindPw from '../pages/FindPw';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import ConfList from '../pages/ConfList';
import ConfDetail from '../pages/ConfDetail';
import ConfIntro from '../pages/ConfIntro';
import ConfPeople from '../pages/ConfPeople';
import ConfSubmit from '../pages/ConfSubmit';
import ConfSchedule from '../pages/ConfSchedule';
import ProgramList from '../pages/ProgramList';
import ProgramDetail from '../pages/ProgramDetail';
import NewsList from '../pages/NewsList';
import NewsDetail from '../pages/NewsDetail';

export type RootStackNavigationProps<
  T extends keyof RootStackParamList = 'default'
> = StackNavigationProp<RootStackParamList, T>;

const Stack = createStackNavigator<RootStackParamList>();

export interface RootTabParamList {
  default: undefined;
  ConfNavi: undefined;
  ProgramNavi: undefined;
  Location: undefined;
  NewsNavi: undefined;
  MyPage: undefined;
}
import MyPage from '../pages/MyPage';
import Location from '../pages/Location';

export type RootTabNavigationProps<
  T extends keyof RootTabParamList = 'default'
> = BottomTabNavigationProp<RootTabParamList, T>;

const Tab = createBottomTabNavigator<RootTabParamList>();

function RootNavigator(): React.ReactElement {
  const { theme } = useTheme();
  const [user, setUser] = useRecoilState(userState);

  const ConfNavi = () => {
    return (
      <Stack.Navigator initialRouteName={'ConfDetail'}>
        <Stack.Screen name="ConfDetail" component={ConfDetail} />
        <Stack.Screen name="ConfList" component={ConfList} />
        <Stack.Screen name="ConfIntro" component={ConfIntro} />
        <Stack.Screen name="ConfPeople" component={ConfPeople} />
        <Stack.Screen name="ConfSubmit" component={ConfSubmit} />
        <Stack.Screen name="ConfSchedule" component={ConfSchedule} />
      </Stack.Navigator>
    );
  };

  const ProgramNavi = () => {
    return (
      <Stack.Navigator initialRouteName={'ProgramList'}>
        <Stack.Screen name="ProgramList" component={ProgramList} />
        <Stack.Screen name="ProgramDetail" component={ProgramDetail} />
      </Stack.Navigator>
    );
  };

  const NewsNavi = () => {
    return (
      <Stack.Navigator initialRouteName={'NewsList'}>
        <Stack.Screen name="NewsList" component={NewsList} />
        <Stack.Screen name="NewsDetail" component={NewsDetail} />
      </Stack.Navigator>
    );
  };

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
      {user ? (
        <Tab.Navigator>
          {/* <Tab.Screen name="ConfList" component={ConfList} /> */}
          <Tab.Screen name="ConfNavi" component={ConfNavi} />
          <Tab.Screen name="ProgramNavi" component={ProgramNavi} />
          <Tab.Screen name="Location" component={Location} />
          <Tab.Screen name="NewsNavi" component={NewsNavi} />
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
