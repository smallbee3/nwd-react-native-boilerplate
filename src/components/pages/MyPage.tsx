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

import { userState } from '../../store/atom';
import { withScreen } from '../../utils/wrapper';
import {
  RootTabNavigationProps,
  RootTabParamList,
} from '../navigations/RootStackNavigator';

interface Props {
  navigation: RootTabNavigationProps<'MyPage'>;
  route: RouteProp<RootTabParamList, 'MyPage'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();
  const [, setUser] = useRecoilState(userState);
  const [visibleLogoutModal, setVisibleLogoutModal] = useState(false);
  const [visibleWithdrawalModal, setVisibleWithdrawalModal] = useState(false);

  const toggleLogoutOverlay = () => {
    setVisibleLogoutModal(!visibleLogoutModal);
  };

  const toggleWithdrawalOverlay = () => {
    setVisibleWithdrawalModal(!visibleWithdrawalModal);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visibleLogoutModal}
        onBackdropPress={toggleLogoutOverlay}>
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayTitle}>
            KAN에서 로그아웃 하시겠습니까?
          </Text>
          <Text style={styles.overlayDescription}></Text>
          <View style={styles.overlayButtonBox}>
            <TouchableOpacity
              style={styles.overlayConfirmButton}
              onPress={() => {
                setUser(null);
                toggleLogoutOverlay();
              }}>
              <Text style={styles.overlayConfirmButtonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overlayCancelButton}
              onPress={toggleLogoutOverlay}>
              <Text style={styles.overlayCancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <Overlay
        overlayStyle={styles.overlay}
        isVisible={visibleWithdrawalModal}
        onBackdropPress={toggleWithdrawalOverlay}>
        <View style={styles.overlayContainer}>
          <Text style={styles.overlayTitle}>KAN에서 탈퇴 하시겠습니까?</Text>
          <Text style={styles.overlayDescription}></Text>
          <View style={styles.overlayButtonBox}>
            <TouchableOpacity
              style={styles.overlayConfirmButton}
              onPress={toggleWithdrawalOverlay}>
              <Text style={styles.overlayConfirmButtonText}>확인</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.overlayCancelButton}
              onPress={toggleWithdrawalOverlay}>
              <Text style={styles.overlayCancelButtonText}>취소</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Overlay>
      <View style={styles.header}>
        <Icon
          style={styles.headerIcon}
          name="bars"
          type="font-awesome-5"
          color="#121217"
          size={14}
          // onPress={() => {}}
        />
        <Text style={styles.headerText}>{fbt('더 보기', '')}</Text>
        <Icon
          style={styles.headerIcon}
          name="cog"
          type="font-awesome-5"
          color="#fff"
          size={14}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>{fbt('내 정보', '')}</Text>
          </View>
          <View style={styles.profileImageBox}>
            <View style={styles.profileInfo}>
              <Image
                style={styles.profileImage}
                source={{
                  uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
              />
              <View style={styles.profileTextBox}>
                <Text style={styles.profileName}>Aasiya Jayavant</Text>
                <Text style={styles.profileEmail}>oscar@sendia.io</Text>
              </View>
            </View>
          </View>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>{fbt('추가 정보', '')}</Text>
            <Text style={styles.bannerText}>{fbt('추가 정보 수정', '')}</Text>
          </View>
          <View style={styles.additionalInfoBox}>
            <View style={styles.additionalInfo}>
              <Text style={styles.additionalInfoName}>{fbt('소속', '')}</Text>
              <Text style={styles.additionalInfoValue}>한국대학교</Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.additionalInfoName}>
                {fbt('연구분야', '')}
              </Text>
              <Text style={styles.additionalInfoValue}>네트워크</Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.additionalInfoName}>
                {fbt('홈페이지', '')}
              </Text>
              <Text style={styles.additionalInfoValue}>
                www.networkdefines.com
              </Text>
            </View>
            <View style={styles.additionalInfo}>
              <Text style={styles.additionalInfoName}>{fbt('연락처', '')}</Text>
              <Text style={styles.additionalInfoValue}>010-1234-5678</Text>
            </View>
          </View>
          <View style={styles.banner}>
            <Text style={styles.bannerText}>{fbt('계정 관리', '')}</Text>
          </View>
          <View style={styles.overlayButton}>
            <TouchableOpacity
              style={styles.manageBorder}
              onPress={toggleLogoutOverlay}>
              <Text style={styles.manageText}>{fbt('로그아웃', '')}</Text>
              <Icon
                style={styles.headerIcon}
                name="chevron-right"
                type="font-awesome-5"
                color="#121217"
                size={14}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.overlayButton}>
            <TouchableOpacity
              style={styles.manage}
              onPress={toggleWithdrawalOverlay}>
              <Text style={styles.manageText}>{fbt('회원 탈퇴', '')}</Text>
              <Icon
                style={styles.headerIcon}
                name="chevron-right"
                type="font-awesome-5"
                color="#121217"
                size={14}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.manageGrey}>
            <Text style={styles.manageGreyText}>
              {fbt('서비스 이용 약관', '')}
            </Text>
            <Icon
              style={styles.headerIcon}
              name="chevron-right"
              type="font-awesome-5"
              color="#6C7B8A"
              size={14}
            />
          </View>
          <View style={styles.manageGrey}>
            <Text style={styles.manageGreyText}>
              {fbt('개인정보 처리 방침', '')}
            </Text>
            <Icon
              style={styles.headerIcon}
              name="chevron-right"
              type="font-awesome-5"
              color="#6C7B8A"
              size={14}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  overlayContainer: {
    alignItems: 'center',
  },
  overlayTitle: {
    marginTop: 26,
    fontSize: 11,
    color: '#121217',
    width: '100%',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  overlayDescription: {
    marginTop: 5,
    fontSize: 9,
    color: '#6C7B8A',
  },
  overlayButtonBox: {
    borderTopColor: '#E7EAEB',
    borderTopWidth: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  overlayConfirmButton: {
    backgroundColor: '#fff',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#E7EAEB',
  },
  overlayConfirmButtonText: {
    fontSize: 11,
    color: '#59B58D',
    fontWeight: 'bold',
  },
  overlayCancelButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  overlayCancelButtonText: {
    fontSize: 11,
    color: '#59B58D',
    fontWeight: 'bold',
  },
  wrapper: {
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  headerIcon: {
    marginHorizontal: 25,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  scrollView: {
    marginTop: 50,
    backgroundColor: '#fff',
    width: '100%',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F4F6F9',
    width: '100%',
    paddingHorizontal: 25,
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bannerText: {
    color: '#6C7B8A',
    fontSize: 11,
  },
  profileImageBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  profileInfo: {
    display: 'flex',
    flexDirection: 'row',
    height: 70,
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
  },
  profileTextBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#121217',
    bottom: -2,
  },
  profileEmail: {
    marginTop: 3.5,
    fontSize: 15,
    letterSpacing: 1,
    color: '#6C7B8A',
    top: -2,
  },
  additionalInfoBox: {
    width: '100%',
  },
  additionalInfo: {
    display: 'flex',
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    borderBottomColor: '#F4F6F9',
    borderBottomWidth: 1,
  },
  additionalInfoName: {
    fontSize: 11,
    color: '#6C7B8A',
    width: '30%',
    marginLeft: 20,
  },
  additionalInfoValue: {
    fontSize: 14,
    marginRight: 20,
    color: '#121217',
  },
  overlayButton: {
    width: '100%',
  },
  manage: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
  manageBorder: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '100%',
    borderBottomColor: '#F4F6F9',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  manageGrey: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#F4F6F9',
    justifyContent: 'space-between',
  },
  manageIcon: {
    marginLeft: 24,
  },
  manageText: {
    color: '#121217',
    fontSize: 14,
    marginLeft: 15,
  },
  manageGreyText: {
    color: '#6C7B8A',
    fontSize: 14,
    marginLeft: 15,
  },
});

export default withScreen(Page);
