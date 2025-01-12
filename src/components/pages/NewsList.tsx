import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React from 'react';
import { View } from 'react-native';
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
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
`;

const HeaderIcon = styled(Icon)``;

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
`;

const NewsList = styled.View`
  margin-top: 6;
  width: 90%;
`;

const NewsItem = styled.TouchableOpacity<{ on?: boolean }>`
  display: flex;
  flex-direction: row;
  background-color: #f4f6f9;
  border-radius: 8;
  margin-top: 8;
  height: 73;
  align-items: center;
  ${({ on }) => {
    if (on) {
      return css`
        background-color: #beebd0;
      `;
    }
  }}
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

const NewsInfo = styled.View``;

const NewsTitle = styled.Text`
  font-size: 14;
  font-weight: bold;
`;

const NewsSubTitle = styled.Text`
  margin-top: 2;
  font-size: 12;
  color: #6c7b8a;
`;

interface Props {
  navigation: RootStackNavigationProps<'NewsList'>;
  route: RouteProp<RootStackParamList, 'NewsList'>;
}

function Page({ navigation }: Props): React.ReactElement {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <Header>
        <View
          style={{
            left: 25,
            position: 'absolute',
          }}>
          <HeaderIcon
            name="bars"
            type="font-awesome-5"
            color="#121217"
            size={20}
            // onPress={() => {}}
          />
        </View>
        <HeaderText>2020 하계 학술대회</HeaderText>
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
      <Scroll>
        <Container>
          <NewsList>
            <NewsItem
              activeOpacity={1}
              onPress={() => navigation.navigate('NewsDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <NewsInfo>
                <NewsTitle>공지 및 뉴스 타이틀</NewsTitle>
                <NewsSubTitle>공지 및 뉴스 내용</NewsSubTitle>
              </NewsInfo>
            </NewsItem>
            <NewsItem
              on
              activeOpacity={1}
              onPress={() => navigation.navigate('NewsDetail')}>
              <DateCard>
                <Month>3월</Month>
                <Date>12</Date>
                <Point></Point>
              </DateCard>
              <NewsInfo>
                <NewsTitle>공지 및 뉴스 타이틀</NewsTitle>
                <NewsSubTitle>공지 및 뉴스 내용</NewsSubTitle>
              </NewsInfo>
            </NewsItem>
          </NewsList>
        </Container>
      </Scroll>
      {/* <Button
        text="Goto NewsDetail"
        style={{ backgroundColor: '#55f' }}
        onPress={() => navigation.navigate('NewsDetail')}
      /> */}
    </Wrapper>
  );
}

export default withScreen(Page);
