import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { useAppContext } from '../../providers/AppProvider';
import { User } from '../../types';
import { IC_MASK } from '../../utils/Icons';
import { withScreen } from '../../utils/wrapper';
import { RootStackNavigationProps } from '../navigations/RootStackNavigator';
import Button from '../uis/Button';
import IntroView from '../uis/IntroTemp';

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
  navigation: RootStackNavigationProps<'Intro'>;
}

function Intro(props: Props): React.ReactElement {
  let timer: number;

  const { setUser } = useAppContext();

  const { changeThemeType } = useTheme();
  const [isLoggingIn, setIsLoggingIn] = React.useState<boolean>(false);

  const onLogin = (): void => {
    setIsLoggingIn(true);

    timer = setTimeout(() => {
      const tempUser: User = {
        displayName: 'dooboolab',
        age: 30,
        job: 'developer',
      };

      setUser(tempUser);
      setIsLoggingIn(false);
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <Container>
      <IntroView />
      <ButtonWrapper>
        <Button
          testID="btn-login"
          imgLeftSrc={IC_MASK}
          isLoading={isLoggingIn}
          onPress={(): void => onLogin()}
          text={fbt('로그인', 'sign in')}
        />
        <View style={{ marginTop: 8 }} />
        <Button
          testID="btn-navigate"
          onPress={(): void =>
            props.navigation.navigate('Temp', {
              param: 'GO BACK',
            })
          }
          text={fbt('화면 전환', 'navigate')}
        />
        <View style={{ marginTop: 8 }} />
        <Button
          testID="btn-theme"
          onPress={(): void => changeThemeType()}
          text={fbt('테마 변경', 'change theme')}
        />
      </ButtonWrapper>
    </Container>
  );
}

export default withScreen(Intro);
