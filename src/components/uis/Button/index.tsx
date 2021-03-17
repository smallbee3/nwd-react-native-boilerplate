import type { FC } from 'react';
import React from 'react';
import type {
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

import ButtonDisabled from './ButtonDisabled';
import ButtonLoading from './ButtonLoading';
import ButtonWrapper from './ButtonWrapper';

interface Props {
  testID?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
  disabledStyle?: ViewStyle;
  textStyle?: TextStyle;
  imgLeftSrc?: ImageSourcePropType;
  imgLeftStyle?: StyleProp<ImageStyle>;
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
  leftElement?: React.ReactElement;
  rightElement?: React.ReactElement;
}

const Button: FC<Props> = ({
  testID,
  isLoading,
  isDisabled,
  onPress,
  style,
  disabledStyle,
  textStyle,
  imgLeftSrc,
  imgLeftStyle,
  indicatorColor,
  activeOpacity,
  text,
  leftElement,
  rightElement,
}) => {
  if (isDisabled)
    return <ButtonDisabled style={disabledStyle} textStyle={textStyle} />;

  if (isLoading) return <ButtonLoading indicatorColor={indicatorColor} />;

  return (
    <ButtonWrapper
      testID={testID}
      onPress={onPress}
      imgLeftSrc={imgLeftSrc}
      style={style}
      imgLeftStyle={imgLeftStyle}
      activeOpacity={activeOpacity}
      text={text}
      textStyle={textStyle}
      leftElement={leftElement}
      rightElement={rightElement}
    />
  );
};

export default Button;
