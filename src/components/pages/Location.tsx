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
  flex: 1;
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
  padding-top: 15;
`;

const Info = styled.View`
  width: 90%;
  margin-top: 15;
`;

const Title = styled.Text`
  font-size: 14;
  color: #6c7b8a;
`;

const Description = styled.Text`
  font-size: 14;
  color: #121217;
  margin-top: 6;
`;

const Map = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 6;
  height: 200;
  border-radius: 8;
  overflow: hidden;
`;

const MapSampleImage = styled.Image`
  flex: 1;
  width: 100%;
  height: auto;
`;

interface Props {
  navigation: RootTabNavigationProps<'Location'>;
  route: RouteProp<RootTabParamList, 'Location'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();

  // const {
  //   route: {
  //     params: {param},
  //   },
  //   navigation,
  // } = props;

  return (
    <Wrapper>
      <Header>
        <HeaderIcon
          name="bars"
          type="font-awesome-5"
          color="#121217"
          size={14}
          // onPress={() => {}}
        />
        <HeaderText>2020 하계 학술대회</HeaderText>
        <HeaderIcon
          name="star"
          type="font-awesome-5"
          color="#121217"
          size={14}
        />
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
          <Info>
            <Title>{fbt('위치', '')}</Title>
            <Description>
              Delivery is scheduled for today between 14:00 - 18:00 on 913 Bear
              Hill Street Flushing, NY 11354.{' '}
            </Description>
          </Info>
          <Info>
            <Title>{fbt('숙소', '')}</Title>
            <Description>
              Delivery is scheduled for today between 14:00 - 18:00 on 913 Bear
              Hill Street Flushing, NY 11354.{' '}
            </Description>
            <Description>
              Delivery is scheduled for today between 14:00 - 18:00 on 913 Bear
              Hill Street Flushing, NY 11354.{' '}
            </Description>
          </Info>
          <Info>
            <Title>{fbt('교통', '')}</Title>
            <Description>
              Delivery is scheduled for today between 14:00 - 18:00 on 913 Bear
              Hill Street Flushing, NY 11354.{' '}
            </Description>
          </Info>
          <Info>
            <Title>{fbt('약도', '')}</Title>
            <Map>
              <MapSampleImage
                source={{
                  uri:
                    'https://media.vlpt.us/images/nawnoes/post/46794d96-7647-48a1-a6fb-ef108030f86d/image.png',
                }}
              />
            </Map>
          </Info>
        </Container>
      </Scroll>
    </Wrapper>
  );
}

export default withScreen(Page);
