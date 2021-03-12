import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';

import { userState } from '../../store/atom';
import { withScreen } from '../../utils/wrapper';
import {
  RootStackNavigationProps,
  RootStackParamList,
} from '../navigations/RootStackNavigator';
import Button from '../uis/Button';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }) => theme.background};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'Login'>;
  route: RouteProp<RootStackParamList, 'Login'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();

  // const {
  //   route: {
  //     params: {param},
  //   },
  //   navigation,
  // } = props;
  const { navigation } = props;
  const [, setUser] = useRecoilState(userState);

  return (
    <>
      <Text>Login</Text>
      <Container>
        <ButtonWrapper>
          <Button
            testID="btn-login"
            text={fbt('로그인', '')}
            onPress={(): void =>
              setUser({
                id: '1',
              })
            }
          />
          <View style={{ marginTop: 8 }} />
          <Button
            testID="btn-facebook-login"
            text={fbt('페이스북 계정으로 로그인', '')}
            style={{ backgroundColor: '#3B5998' }}
          />
          <View style={{ marginTop: 8 }} />
          <Button
            testID="btn-google-login"
            text={fbt('구글 계정으로 로그인', '')}
            style={{ backgroundColor: '#fff' }}
          />
          <View style={{ marginTop: 8 }} />
          <Button
            testID="btn-apple-login"
            text={fbt('애플 계정으로 로그인', '')}
            style={{ backgroundColor: '#fff' }}
          />
        </ButtonWrapper>
        {/* <Button
          testID="btn-back"
          onPress={(): void => navigation.goBack()}
          text={'Go back'}
          style={{
            backgroundColor: theme.text,
          }}
        /> */}
      </Container>
    </>
  );
}

export default withScreen(Page);
