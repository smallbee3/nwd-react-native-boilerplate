import { RouteProp } from '@react-navigation/core';
import { useTheme } from 'dooboo-ui';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { fbt } from 'fbt';

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
  navigation: RootStackNavigationProps<'NewsDetail'>;
  route: RouteProp<RootStackParamList, 'NewsDetail'>;
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
    <>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 100 }}>
        NewsDetail
      </Text>
      <Container>
        <Button
          onPress={(): void => navigation.goBack()}
          text="Go Back(to NewsList)"
          style={{ backgroundColor: '#f5f' }}
        />
      </Container>
    </>
  );
}

export default withScreen(Page);
