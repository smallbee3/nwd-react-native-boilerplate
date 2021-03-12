import type { FC } from 'react';
import React from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import { StyledButton } from '../Styles';
import { Body3 } from '../Typography';

const StyledButtonDisabled = styled(StyledButton)`
  background-color: ${({ theme }) => theme.disabled};
  border-color: rgb(200, 200, 200);
`;

const StyledTextDisabled = styled(Body3)`
  color: ${({ theme }) => theme.disabled};
`;

interface Props {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  text?: string;
}

const ButtonDisabled: FC<Props> = ({ style, textStyle, text }) => {
  return (
    <StyledButtonDisabled style={style}>
      <StyledTextDisabled style={textStyle}>{text}</StyledTextDisabled>
    </StyledButtonDisabled>
  );
};

export default ButtonDisabled;
