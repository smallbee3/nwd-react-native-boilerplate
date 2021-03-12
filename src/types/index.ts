import { SFC } from 'react';
import { StyleProp, TextStyle } from 'react-native';

export interface User {
  displayName: string;
  age: number;
  job: string;
}

interface IconProps {
  style?: StyleProp<TextStyle>;
  width?: number | string;
  height?: number | string;
  children?: never;
}

export type IconType = SFC<IconProps>;
