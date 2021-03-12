import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import { fbt } from 'fbt';
import React from 'react';
import { Text } from 'react-native';
import { useRecoilState } from 'recoil';
import styled from 'styled-components/native';

import { userState } from '../../store/atom';
import { withScreen } from '../../utils/wrapper';
import {
  RootTabNavigationProps,
  RootTabParamList,
} from '../navigations/RootStackNavigator';
import Button from '../uis/Button';

const Container = styled.View`
  flex: 1;
  align-self: stretch;

  background-color: ${({ theme }) => theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootTabNavigationProps<'MyPage'>;
  route: RouteProp<RootTabParamList, 'MyPage'>;
}

function Page(props: Props): React.ReactElement {
  const { theme } = useTheme();
  const [, setUser] = useRecoilState(userState);

  // const {
  //   route: {
  //     params: {param},
  //   },
  //   navigation,
  // } = props;

  return (
    <>
      <Text>MyPage</Text>
      <Container>
        <Button
          testID="btn-logout"
          onPress={(): void => setUser(null)}
          text={fbt('로그아웃', '')}
          style={{
            backgroundColor: theme.text,
          }}
        />
      </Container>
    </>
  );
}

export default withScreen(Page);
