import React from 'react';
import { Platform, View } from 'react-native';

export const withScreen = (WrappedComponent: React.ComponentType<any>) => {
  return (props) => {
    return (
      <View
        style={
          Platform.OS === 'web'
            ? {
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                // height: Dimensions.get('window').height - headerHeight,
              }
            : {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }
        }>
        <WrappedComponent {...props} />
      </View>
    );
  };
};
