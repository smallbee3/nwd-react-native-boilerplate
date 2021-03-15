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

const ButtonWrapper = styled.View`
  position: absolute;
  flex-direction: column;
  bottom: 40px;
  width: 85%;
  align-self: center;
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
    <>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 100 }}>
        ConfDetail
      </Text>
      <Container>
        <ButtonWrapper>
          <Button
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
          />
          {/* <Button
        testID="btn-back"
        onPress={(): void => navigation.goBack()}
        text={param}
        style={{
          backgroundColor: theme.text,
        }}
      /> */}
        </ButtonWrapper>
      </Container>
    </>
  );
}

export default withScreen(Page);
