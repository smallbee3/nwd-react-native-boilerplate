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

  background-color: ${({ theme }) => theme.background};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

interface Props {
  navigation: RootStackNavigationProps<'FindPw'>;
  route: RouteProp<RootStackParamList, 'FindPw'>;
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
      <Text>FindPw</Text>
      <Container>
        <Button
          testID="btn-back"
          onPress={(): void => navigation.goBack()}
          text={'Go back'}
          style={{
            backgroundColor: theme.text,
          }}
        />
      </Container>
    </>
  );
}

export default withScreen(Page);
