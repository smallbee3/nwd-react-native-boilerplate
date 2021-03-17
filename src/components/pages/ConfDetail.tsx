import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React from 'react';
import { Icon } from 'react-native-elements';
import styled from 'styled-components/native';

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
  position: absolute;
  top: 0;
  left: 0;
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
  margin-top: 50;
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
  margin-bottom: 10;
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

const ImageCardBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-horizontal: 20;
`;

const ImageCard = styled.TouchableOpacity`
  margin-top: 15;
  width: 170;
  height: 165;
  border-radius: 8;
  overflow: hidden;
`;

const ImageCardBackground = styled.ImageBackground`
  flex: 1;
`;

const ImageCardInfo = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-horizontal: 10;
  padding-vertical: 10;
  justify-content: flex-end;
  background-color: rgba(18, 18, 23, 0.5);
`;

const ImageCardTitle = styled.Text`
  font-size: 18;
  color: #fff;
  font-weight: bold;
`;

const ImageCardDescription = styled.Text`
  font-size: 12;
  margin-top: 10;
  color: #fff;
`;

const ContactInfoBox = styled.View`
  margin-top: 15;
  width: 90%;
`;

const ContactTitle = styled.Text`
  font-size: 16;
  font-weight: bold;
  color: #121217;
`;

const ContactInfoDetail = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 10;
`;

const ContactInfoDetailAddress = styled.Text`
  color: #121217;
  font-size: 12;
`;

const ContactInfoDetailText = styled.Text`
  color: #121217;
  font-size: 12;
  width: 50%;
  margin-top: 3;
`;

const ContactInfoDetailTextBox = styled.View`
  display: flex;
  flex-direction: row;
`;

const SupportLogoList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 90%;
  margin-top: 10;
`;

const SupportLogoImageBox = styled.View`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 30;
  margin-top: 5;
  margin-bottom: 5;
`;

const SupportLogoImage = styled.Image`
  flex: 1;
  width: auto;
`;

interface Props {
  navigation: RootStackNavigationProps<'ConfDetail'>;
  route: RouteProp<RootStackParamList, 'ConfDetail'>;
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
            text="Goto ConfList"
            style={{ backgroundColor: '#55f' }}
            onPress={() => navigation.navigate('ConfList')}
          />
          <Button
            text="Goto ConfIntro"
            style={{ backgroundColor: '#55f' }}
            onPress={() => navigation.navigate('ConfIntro')}
          />
          <Button
            text="Goto ConfPeople"
            style={{ backgroundColor: '#55f' }}
            onPress={() => navigation.navigate('ConfPeople')}
          />
          <Button
            text="Goto ConfSubmit"
            style={{ backgroundColor: '#55f' }}
            onPress={() => navigation.navigate('ConfSubmit')}
          />
          <Button
            text="Goto ConfSchedule"
            style={{ backgroundColor: '#55f' }}
            onPress={() => navigation.navigate('ConfSchedule')}
          /> */}

      {/*
          <Button
            testID="btn-back"
            onPress={(): void => navigation.goBack()}
            text={param}
            style={{
              backgroundColor: theme.text,
            }}
          />
          */}
      <Header>
        <HeaderIcon
          name="bars"
          type="font-awesome-5"
          color="#121217"
          size={14}
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
      <Scroll>
        <Container>
          <ImageCardBox>
            <ImageCard onPress={() => navigation.navigate('ConfIntro')}>
              <ImageCardBackground
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                }}>
                <ImageCardInfo>
                  <ImageCardTitle>{fbt('소개', '')}</ImageCardTitle>
                  <ImageCardDescription numberOfLines={3}>
                    하계 학술대회는 셰익스 피어 사후 200년이 지난 현대 사회에서
                    의미를 찾고 되새기기 위한 ...
                  </ImageCardDescription>
                </ImageCardInfo>
              </ImageCardBackground>
            </ImageCard>
            <ImageCard onPress={() => navigation.navigate('ConfPeople')}>
              <ImageCardBackground
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                }}>
                <ImageCardInfo>
                  <ImageCardTitle>{fbt('위원회', '')}</ImageCardTitle>
                  <ImageCardDescription numberOfLines={3}>
                    하계 학술대회는 셰익스 피어 사후 200년이 지난 현대 사회에서
                    의미를 찾고 되새기기 위한 ...
                  </ImageCardDescription>
                </ImageCardInfo>
              </ImageCardBackground>
            </ImageCard>
          </ImageCardBox>
          <ImageCardBox>
            <ImageCard>
              <ImageCardBackground
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                }}>
                <ImageCardInfo>
                  <ImageCardTitle>{fbt('모집 분야', '')}</ImageCardTitle>
                  <ImageCardDescription numberOfLines={3}>
                    하계 학술대회는 셰익스 피어 사후 200년이 지난 현대 사회에서
                    의미를 찾고 되새기기 위한 ...
                  </ImageCardDescription>
                </ImageCardInfo>
              </ImageCardBackground>
            </ImageCard>
            <ImageCard>
              <ImageCardBackground
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
                }}>
                <ImageCardInfo>
                  <ImageCardTitle>{fbt('중요 일정', '')}</ImageCardTitle>
                  <ImageCardDescription numberOfLines={3}>
                    하계 학술대회는 셰익스 피어 사후 200년이 지난 현대 사회에서
                    의미를 찾고 되새기기 위한 ...
                  </ImageCardDescription>
                </ImageCardInfo>
              </ImageCardBackground>
            </ImageCard>
          </ImageCardBox>
          <ContactInfoBox>
            <ContactTitle>
              한국지능정보시스템학회_사무국 이은주 사무국장
            </ContactTitle>
            <ContactInfoDetail>
              <ContactInfoDetailAddress>
                {fbt('주소: ', '')}서울특별시 성북구 정릉로 77 국민대학교 국제관
                305호
              </ContactInfoDetailAddress>
              <ContactInfoDetailTextBox>
                <ContactInfoDetailText>
                  {fbt('tel: ', '')}02-1234-5678
                </ContactInfoDetailText>
                <ContactInfoDetailText>
                  {fbt('email: ', '')}office@kiiss.or.kr
                </ContactInfoDetailText>
              </ContactInfoDetailTextBox>
              <ContactInfoDetailText>
                {fbt('홈페이지: ', '')}www.kiiss.or.kr
              </ContactInfoDetailText>
            </ContactInfoDetail>
          </ContactInfoBox>
          <SupportLogoList>
            <SupportLogoImageBox>
              <SupportLogoImage
                source={{
                  uri:
                    'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
                }}
                resizeMode="contain"
              />
            </SupportLogoImageBox>
            <SupportLogoImageBox>
              <SupportLogoImage
                source={{
                  uri:
                    'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
                }}
                resizeMode="contain"
              />
            </SupportLogoImageBox>
            <SupportLogoImageBox>
              <SupportLogoImage
                source={{
                  uri:
                    'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
                }}
                resizeMode="contain"
              />
            </SupportLogoImageBox>
            <SupportLogoImageBox>
              <SupportLogoImage
                source={{
                  uri:
                    'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
                }}
                resizeMode="contain"
              />
            </SupportLogoImageBox>
            <SupportLogoImageBox>
              <SupportLogoImage
                source={{
                  uri:
                    'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
                }}
                resizeMode="contain"
              />
            </SupportLogoImageBox>
            <SupportLogoImageBox>
              <SupportLogoImage
                source={{
                  uri:
                    'https://dv8u54qddgb7y.cloudfront.net/society/images/logos/kips/logo_large.png',
                }}
                resizeMode="contain"
              />
            </SupportLogoImageBox>
          </SupportLogoList>
        </Container>
      </Scroll>
    </Wrapper>
  );
}

export default withScreen(Page);
