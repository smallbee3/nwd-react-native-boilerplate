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
import { fbt } from 'fbt';
import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
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
import ConfDetail from '../pages/ConfDetail';
import ConfIntro from '../pages/ConfIntro';
import ConfList from '../pages/ConfList';
import ConfPeople from '../pages/ConfPeople';
import ConfSchedule from '../pages/ConfSchedule';
import ConfSubmit from '../pages/ConfSubmit';
import FindPw from '../pages/FindPw';
import Login from '../pages/Login';
import NewsDetail from '../pages/NewsDetail';
import NewsList from '../pages/NewsList';
import ProgramDetail from '../pages/ProgramDetail';
import ProgramList from '../pages/ProgramList';
import SignUp from '../pages/SignUp';

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
import Location from '../pages/Location';
import MyPage from '../pages/MyPage';

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
          <Tab.Screen
            name="ConfNavi"
            component={ConfNavi}
            options={{
              tabBarLabel: () => <Text>{fbt('홈', '')}</Text>,
              tabBarIcon: () => (
                <Icon name="home" type="font-awesome-5" size={14} />
              ),
            }}
          />
          <Tab.Screen
            name="ProgramNavi"
            component={ProgramNavi}
            options={{
              tabBarLabel: () => <Text>{fbt('프로그램', '')}</Text>,
              tabBarIcon: () => (
                <Icon name="calendar-alt" type="font-awesome-5" size={14} />
              ),
            }}
          />
          <Tab.Screen
            name="Location"
            component={Location}
            options={{
              tabBarLabel: () => <Text>{fbt('위치', '')}</Text>,
              tabBarIcon: () => (
                <Icon name="map-marked-alt" type="font-awesome-5" size={14} />
              ),
            }}
          />
          <Tab.Screen
            name="NewsNavi"
            component={NewsNavi}
            options={{
              tabBarLabel: () => <Text>{fbt('공지', '')}</Text>,
              tabBarIcon: () => (
                <Icon name="bullhorn" type="font-awesome-5" size={14} />
              ),
            }}
          />
          <Tab.Screen
            name="MyPage"
            component={MyPage}
            options={{
              tabBarLabel: () => <Text>{fbt('더 보기', '')}</Text>,
              tabBarIcon: () => (
                <Icon name="ellipsis-h" type="font-awesome-5" size={14} />
              ),
            }}
          />
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
