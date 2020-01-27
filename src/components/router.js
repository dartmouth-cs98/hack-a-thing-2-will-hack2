// originally adapted from https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c
// and https://snack.expo.io/@react-navigation/auth-flow-v3
// also similar code used in my final project for cs52

import {
  createSwitchNavigator,
} from 'react-navigation';
import Welcome from '../navigation/initialPage';

// eslint-disable-next-line import/prefer-default-export
export const createRootNavigator = (props) => {
  return createSwitchNavigator(
    {
      Welcome,
    },
    {
      initialRouteName: 'Welcome',
    },
  );
};