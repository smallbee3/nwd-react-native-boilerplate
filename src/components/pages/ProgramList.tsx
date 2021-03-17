import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React from 'react';
import { Icon } from 'react-native-elements';
import styled, { css } from 'styled-components/native';

import { withScreen } from '../../utils/wrapper';
import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../navigations/RootStackNavigator';

const Wrapper = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`;

const Header = styled.View`
  width: 100%;
  height: 50;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
`;

const HeaderIcon = styled(Icon)`
  margin-left: 25;
  margin-right: 25;
`;

const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 16;
`;

const Logo = styled.View`
  display: flex;
  flex-direction: column;
  height: 60;
  padding-vertical: 8;
`;

const LogoImage = styled.Image`
  flex: 1;
  height: auto;
`;

const Favorite = styled.View`
  display: flex;
  margin-top: 16;
  align-items: center;
  justify-content: center;
`;

const TabBox = styled.ScrollView`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #f4f6f9;
`;

const Slider = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-vertical: 10;
`;

const Tab = styled.TouchableOpacity<{ on?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30;
  width: 110;
  border-radius: 7;
  margin-horizontal: 10;
  ${({ on }) => {
    if (on) {
      return css`
        background-color: #fff;
        shadow-color: #6c7b8a;
        shadow-opacity: 0.1;
        shadow-radius: 20;
        elevation: 4;
      `;
    }
  }}
`;

const TabButton = styled.TouchableOpacity`
  width: 100%;
`;

const TabText = styled.Text`
  font-size: 12;
`;

const FavoriteButton = styled.TouchableOpacity`
  position: relative;
  background-color: #59b58d;
  width: 90%;
  border-radius: 8;
  height: 50;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 10;
`;
const FavoriteButtonIconBox = styled.View`
  position: absolute;
  left: 16;
`;

const FavoriteButtonIcon = styled(Icon)``;

const FavoriteButtonText = styled.Text`
  color: #fff;
  font-size: 15;
`;

const Scroll = styled.ScrollView`
  background-color: #ffffff;
  width: 100%;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10;
`;

const SessionBox = styled.View`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-top: 10;
`;

const SessionTag = styled.Text`
  color: #59b58d;
  font-weight: bold;
  margin-right: 6;
  font-size: 16;
`;

const SessionTitle = styled.Text`
  color: #121217;
  font-weight: bold;
  font-size: 16;
`;

const ProgramList = styled.View`
  margin-top: 0;
  width: 90%;
`;

const ProgramItem = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 8;
  margin-top: 8;
  margin-bottom: 6;
  height: 73;
  align-items: center;
  shadow-color: #6c7b8a;
  shadow-opacity: 0.1;
  shadow-radius: 8;
  shadow-offset: {
    height: 2;
    width: 0;
  }
  elevation: 8;
`;

const DateCard = styled.View`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 58;
  width: 50;
  border-radius: 8;
  margin-left: 12;
  margin-right: 16;
  shadow-color: #6c7b8a;
  shadow-opacity: 0.1;
  shadow-radius: 20;
  elevation: 10;
`;

const Month = styled.Text`
  font-size: 11;
  bottom: -2;
  color: #6c7b8a;
`;

const Date = styled.Text`
  top: -2;
  font-size: 22;
  font-weight: bold;
  letter-spacing: -0.75;
`;

const Point = styled.View`
  position: absolute;
  top: 5;
  right: 5;
  height: 5;
  width: 5;
  border-radius: 5;
  background-color: #59b58d;
`;

const TimeBox = styled.View`
  height: 54;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-right: 16;
`;

const StartTime = styled.Text`
  font-size: 12;
  color: #121227;
`;

const EndTime = styled.Text`
  font-size: 12;
  color: #121227;
`;

const ProgramInfo = styled.View``;

const ProgramTitle = styled.Text`
  font-size: 14;
  font-weight: bold;
`;

const ProgramSubTitle = styled.Text`
  margin-top: 2;
  font-size: 12;
  color: #6c7b8a;
`;

const VideoButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 6;
  right: 6;
`;

const VideoButtonIcon = styled(Icon)``;

interface Props {
  navigation: RootStackNavigationProps<'ProgramList'>;
  route: RouteProp<RootStackParamList, 'ProgramList'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();

  const {
    // route: {
    //   params: {param},
    // },
    navigation,
  } = props;

  return (
    <Wrapper>
      {/* <Button
        text="Goto ProgramDetail"
        style={{ backgroundColor: '#55f' }}
        onPress={() => navigation.navigate('ProgramDetail')}
      /> */}
      <Header>
        <HeaderIcon
          name="bars"
          type="font-awesome-5"
          color="#121217"
          size={20}
          // onPress={() => {}}
        />
        <HeaderText>2020 하계 학술대회</HeaderText>
        <HeaderIcon name="cog" type="font-awesome-5" color="#fff" size={14} />
      </Header>
      <Logo>
        <LogoImage
          source={{
            uri:
              'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
          }}
          resizeMode="contain"
        />
      </Logo>
      <Favorite>
        <FavoriteButton>
          <FavoriteButtonIconBox>
            <FavoriteButtonIcon
              name="bookmark"
              type="font-awesome-5"
              color="#fff"
              size={16}
            />
          </FavoriteButtonIconBox>
          <FavoriteButtonText>
            {fbt('북마크에 추가하시겠습니까?', '')}
          </FavoriteButtonText>
        </FavoriteButton>
      </Favorite>
      <TabBox horizontal={true} showsHorizontalScrollIndicator={false}>
        <Slider>
          <Tab>
            <TabText>목련관</TabText>
          </Tab>
          <Tab on>
            <TabText>동백관</TabText>
          </Tab>
          <Tab>
            <TabText>샘플관</TabText>
          </Tab>
          <Tab>
            <TabText>샘플관</TabText>
          </Tab>
          <Tab>
            <TabText>샘플관</TabText>
          </Tab>
          <Tab>
            <TabText>샘플관</TabText>
          </Tab>
          <Tab>
            <TabText>샘플관</TabText>
          </Tab>
          <Tab on>
            <TabText>샘플관</TabText>
          </Tab>
        </Slider>
      </TabBox>
      <Scroll>
        <Container>
          <SessionBox>
            <SessionTag>{fbt('세션', '')}1</SessionTag>
            <SessionTitle>특집 주제</SessionTitle>
          </SessionBox>
          <ProgramList>
            <ProgramItem
              activeOpacity={1}
              onPress={() => navigation.navigate('ProgramDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <TimeBox>
                <StartTime>10:00</StartTime>
                <EndTime>12:00</EndTime>
              </TimeBox>
              <ProgramInfo>
                <ProgramTitle>피그말리온 리타 길들이기</ProgramTitle>
                <ProgramSubTitle>발표 : 이소민 (충북대)</ProgramSubTitle>
                <ProgramSubTitle>사회 : 이소민 (충북대)</ProgramSubTitle>
              </ProgramInfo>
              <VideoButton>
                <VideoButtonIcon
                  name="play-circle"
                  type="font-awesome-5"
                  color="#FF0000"
                  size={24}
                />
              </VideoButton>
            </ProgramItem>
            <ProgramItem
              activeOpacity={1}
              onPress={() => navigation.navigate('ProgramDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <TimeBox>
                <StartTime>10:00</StartTime>
                <EndTime>12:00</EndTime>
              </TimeBox>
              <ProgramInfo>
                <ProgramTitle>피그말리온 리타 길들이기</ProgramTitle>
                <ProgramSubTitle>발표 : 이소민 (충북대)</ProgramSubTitle>
                <ProgramSubTitle>사회 : 이소민 (충북대)</ProgramSubTitle>
              </ProgramInfo>
              <VideoButton>
                <VideoButtonIcon
                  name="play-circle"
                  type="font-awesome-5"
                  color="#FF0000"
                  size={24}
                />
              </VideoButton>
            </ProgramItem>
            <ProgramItem
              activeOpacity={1}
              onPress={() => navigation.navigate('ProgramDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <TimeBox>
                <StartTime>10:00</StartTime>
                <EndTime>12:00</EndTime>
              </TimeBox>
              <ProgramInfo>
                <ProgramTitle>피그말리온 리타 길들이기</ProgramTitle>
                <ProgramSubTitle>발표 : 이소민 (충북대)</ProgramSubTitle>
                <ProgramSubTitle>사회 : 이소민 (충북대)</ProgramSubTitle>
              </ProgramInfo>
              <VideoButton>
                <VideoButtonIcon
                  name="play-circle"
                  type="font-awesome-5"
                  color="#E5E5E5"
                  size={24}
                />
              </VideoButton>
            </ProgramItem>
          </ProgramList>
          <SessionBox>
            <SessionTag>{fbt('세션', '')}1</SessionTag>
            <SessionTitle>특집 주제</SessionTitle>
          </SessionBox>
          <ProgramList>
            <ProgramItem
              activeOpacity={1}
              onPress={() => navigation.navigate('ProgramDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <TimeBox>
                <StartTime>10:00</StartTime>
                <EndTime>12:00</EndTime>
              </TimeBox>
              <ProgramInfo>
                <ProgramTitle>피그말리온 리타 길들이기</ProgramTitle>
                <ProgramSubTitle>발표 : 이소민 (충북대)</ProgramSubTitle>
                <ProgramSubTitle>사회 : 이소민 (충북대)</ProgramSubTitle>
              </ProgramInfo>
              <VideoButton>
                <VideoButtonIcon
                  name="play-circle"
                  type="font-awesome-5"
                  color="#FF0000"
                  size={24}
                />
              </VideoButton>
            </ProgramItem>
            <ProgramItem
              activeOpacity={1}
              onPress={() => navigation.navigate('ProgramDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <TimeBox>
                <StartTime>10:00</StartTime>
                <EndTime>12:00</EndTime>
              </TimeBox>
              <ProgramInfo>
                <ProgramTitle>피그말리온 리타 길들이기</ProgramTitle>
                <ProgramSubTitle>발표 : 이소민 (충북대)</ProgramSubTitle>
                <ProgramSubTitle>사회 : 이소민 (충북대)</ProgramSubTitle>
              </ProgramInfo>
              <VideoButton>
                <VideoButtonIcon
                  name="play-circle"
                  type="font-awesome-5"
                  color="#E5E5E5"
                  size={24}
                />
              </VideoButton>
            </ProgramItem>
          </ProgramList>
        </Container>
      </Scroll>
    </Wrapper>
  );
}

export default withScreen(Page);
