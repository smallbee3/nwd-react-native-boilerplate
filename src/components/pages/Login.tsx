import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

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

  return (
    <>
      <Text>Login</Text>
      <Container>
        <ButtonWrapper>
          <Button
            testID="btn-findPw"
            onPress={(): void => navigation.navigate('FindPw')}
            text={'FindPW'}
            style={{
              backgroundColor: theme.text,
            }}
          />
          <Button
            testID="btn-SignUp"
            onPress={(): void => navigation.navigate('SignUp')}
            text={'SignUp'}
            style={{
              backgroundColor: theme.text,
            }}
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
