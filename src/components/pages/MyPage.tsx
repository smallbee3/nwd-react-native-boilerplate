import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React, { useState } from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { useRecoilState } from 'recoil';
import styled, { css } from 'styled-components/native';

import { userState } from '../../store/atom';
import { withScreen } from '../../utils/wrapper';
import {
  RootTabNavigationProps,
  RootTabParamList,
} from '../navigations/RootStackNavigator';

const Wrapper = styled.SafeAreaView`
  width: 100%;
  flex: 1;
`;

const OverlayContainer = styled.View`
  align-items: center;
`;

const OverlayTitle = styled.Text`
  margin-top: 26;
  font-size: 14;
  color: #121217;
  width: 100%;
  text-align: center;
  font-weight: bold;
`;

const OverlayButtonBox = styled.View`
  border-top-color: #e7eaeb;
  border-top-width: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 20;
`;

const overlayButton = css`
  background-color: #fff;
  height: 40;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const OverlayConfirmButton = styled.TouchableOpacity`
  ${overlayButton}
  border-right-width: 1;
  border-right-color: #e7eaeb;
`;

const OverlayCancelButton = styled.TouchableOpacity`
  ${overlayButton}
`;

const OverlayButtonText = styled.Text`
  font-size: 14;
  color: #59b58d;
  font-weight: bold;
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
  z-index: 10;
`;

const HeaderIcon = styled(Icon)`
  margin-horizontal: 20;
`;

const HeaderText = styled.Text`
  font-weight: bold;
  font-size: 16;
`;

const Scroll = styled.ScrollView`
  margin-top: 50;
  background-color: #fff;
  width: 100%;
`;

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Banner = styled.View`
  display: flex;
  flex-direction: row;
  background-color: #f4f6f9;
  width: 100%;
  padding-horizontal: 20;
  height: 40;
  align-items: center;
  justify-content: space-between;
`;

const BannerText = styled.Text`
  color: #6c7b8a;
  font-size: 14;
`;

const ProfileImageBox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const ProfileInfo = styled.View`
  display: flex;
  flex-direction: row;
  height: 70;
  align-items: center;
`;

const ProfileImage = styled.Image`
  width: 45;
  height: 45;
  border-radius: 5;
  margin-left: 20;
  margin-right: 20;
`;

const ProfileTextBox = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled.Text`
  font-size: 18;
  font-weight: bold;
  letter-spacing: 1;
  color: #121217;
  bottom: -2;
`;

const ProfileEmail = styled.Text`
  margin-top: 3.5;
  font-size: 15;
  letter-spacing: 1;
  color: #6c7b8a;
  top: -2;
`;

const AdditionalInfoBox = styled.View`
  width: 100%;
`;

const AdditionalInfo = styled.View`
  display: flex;
  flex-direction: row;
  height: 60;
  align-items: center;
  border-bottom-color: #f4f6f9;
  border-bottom-width: 1;
`;

const AdditionalInfoName = styled.Text`
  font-size: 14;
  color: #6c7b8a;
  width: 30%;
  margin-left: 20;
`;

const AdditionalInfoValue = styled.Text`
  font-size: 14;
  margin-right: 20;
  color: #121217;
`;

const ManageButtonBox = styled.View`
  width: 100%;
`;

const manageButton = css`
  display: flex;
  flex-direction: row;
  height: 50;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const ManageButton = styled.TouchableOpacity`
  ${manageButton}
`;

const ManageBorderButton = styled.TouchableOpacity`
  ${manageButton}
  border-bottom-color: #F4F6F9;
  border-bottom-width: 1;
`;

const ManageGreyButton = styled.TouchableOpacity`
  ${manageButton}
  background-color: #F4F6F9;
`;

const ManageText = styled.Text`
  color: #121217;
  font-size: 14;
  margin-left: 20;
`;

const ManageGreyText = styled.Text`
  color: #6c7b8a;
  font-size: 14;
  margin-left: 20;
`;

interface Props {
  navigation: RootTabNavigationProps<'MyPage'>;
  route: RouteProp<RootTabParamList, 'MyPage'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();
  const [user, setUser] = useRecoilState(userState);
  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false);
  const [visibleWithdrawalModal, setVisibleWithdrawalModal] = useState(false);

  const toggleLogoutOverlay = () => {
    setVisibleLogoutModal(!visibleLogoutModal);
  };

  const toggleWithdrawalOverlay = () => {
    setVisibleWithdrawalModal(!visibleWithdrawalModal);
  };

  const logout = () => {
    // toggleLogoutOverlay();
    setUser(null);
  };

  return (
    <Wrapper>
      {/* 로그아웃 팝업 */}
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visibleLogoutModal}
        onBackdropPress={toggleLogoutOverlay}>
        <OverlayContainer>
          <OverlayTitle>
            {fbt('KAN에서 로그아웃 하시겠습니까?', '')}
          </OverlayTitle>
          <OverlayButtonBox>
            <OverlayConfirmButton onPress={toggleLogoutOverlay}>
              <OverlayButtonText>{fbt('확인', '')}</OverlayButtonText>
            </OverlayConfirmButton>
            <OverlayCancelButton onPress={toggleLogoutOverlay}>
              <OverlayButtonText>{fbt('취소', '')}</OverlayButtonText>
            </OverlayCancelButton>
          </OverlayButtonBox>
        </OverlayContainer>
      </Overlay>

      {/* 회원 탈퇴 팝업 */}
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visibleWithdrawalModal}
        onBackdropPress={toggleWithdrawalOverlay}>
        <OverlayContainer>
          <OverlayTitle>{fbt('KAN에서 탈퇴 하시겠습니까?', '')}</OverlayTitle>
          <OverlayButtonBox>
            <OverlayConfirmButton onPress={toggleWithdrawalOverlay}>
              <OverlayButtonText>{fbt('확인', '')}</OverlayButtonText>
            </OverlayConfirmButton>
            <OverlayCancelButton onPress={toggleWithdrawalOverlay}>
              <OverlayButtonText>{fbt('취소', '')}</OverlayButtonText>
            </OverlayCancelButton>
          </OverlayButtonBox>
        </OverlayContainer>
      </Overlay>

      {/* 헤더 */}
      <Header>
        <HeaderIcon
          name="bars"
          type="font-awesome-5"
          color="#121217"
          size={14}
          // onPress={() => {}}
        />
        <HeaderText>{fbt('더 보기', '')}</HeaderText>
        <HeaderIcon name="cog" type="font-awesome-5" color="#fff" size={14} />
      </Header>

      {/* 내용 */}
      <Scroll>
        <Container>
          <Banner>
            <BannerText>{fbt('내 정보', '')}</BannerText>
          </Banner>
          <ProfileImageBox>
            <ProfileInfo>
              <ProfileImage
                source={{
                  uri: user?.thumbnail,
                }}
              />
              <ProfileTextBox>
                <ProfileName>
                  {user?.firstName} {user?.familyName}
                </ProfileName>
                <ProfileEmail>{user?.email}</ProfileEmail>
              </ProfileTextBox>
            </ProfileInfo>
          </ProfileImageBox>
          <Banner>
            <BannerText>{fbt('추가 정보', '')}</BannerText>
            <BannerText>{fbt('추가 정보 수정', '')}</BannerText>
          </Banner>
          <AdditionalInfoBox>
            <AdditionalInfo>
              <AdditionalInfoName>{fbt('소속', '')}</AdditionalInfoName>
              <AdditionalInfoValue>{user?.organization}</AdditionalInfoValue>
            </AdditionalInfo>
            <AdditionalInfo>
              <AdditionalInfoName>{fbt('연구분야', '')}</AdditionalInfoName>
              <AdditionalInfoValue>{user?.jobTitle}</AdditionalInfoValue>
            </AdditionalInfo>
            <AdditionalInfo>
              <AdditionalInfoName>{fbt('홈페이지', '')}</AdditionalInfoName>
              <AdditionalInfoValue>www.networkdefines.com</AdditionalInfoValue>
            </AdditionalInfo>
            <AdditionalInfo>
              <AdditionalInfoName>{fbt('연락처', '')}</AdditionalInfoName>
              <AdditionalInfoValue>010-1234-5678</AdditionalInfoValue>
            </AdditionalInfo>
          </AdditionalInfoBox>
          <ManageGreyButton>
            <ManageBorderButton onPress={toggleLogoutOverlay}>
              <ManageGreyText>{fbt('로그아웃', '')}</ManageGreyText>
              <HeaderIcon
                name="chevron-right"
                type="font-awesome-5"
                color="#121217"
                size={14}
              />
            </ManageBorderButton>
          </ManageGreyButton>
          <ManageGreyButton>
            <ManageButton onPress={toggleWithdrawalOverlay}>
              <ManageGreyText>{fbt('회원 탈퇴', '')}</ManageGreyText>
              <HeaderIcon
                name="chevron-right"
                type="font-awesome-5"
                color="#121217"
                size={14}
              />
            </ManageButton>
          </ManageGreyButton>
          <ManageGreyButton>
            <ManageGreyText>{fbt('서비스 이용 약관', '')}</ManageGreyText>
            <HeaderIcon
              name="chevron-right"
              type="font-awesome-5"
              color="#6C7B8A"
              size={14}
            />
          </ManageGreyButton>
          <ManageGreyButton>
            <ManageGreyText>{fbt('개인정보 처리 방침', '')}</ManageGreyText>
            <HeaderIcon
              name="chevron-right"
              type="font-awesome-5"
              color="#6C7B8A"
              size={14}
            />
          </ManageGreyButton>
        </Container>
      </Scroll>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '80%',
    padding: 0,
    overflow: 'hidden',
  },
});

export default withScreen(Page);
