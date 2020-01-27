// adapted from https://medium.com/the-react-native-log/building-an-authentication-flow-with-react-navigation-fb5de2203b5c
// and https://snack.expo.io/@react-navigation/auth-flow-v3
import {
  createSwitchNavigator,
} from 'react-navigation';
// eslint-disable-next-line import/no-named-as-default
import PreAuth from '../navigation/preAuth';
import postSignUp from '../navigation/postSignUp';
// eslint-disable-next-line import/no-named-as-default
import PostLogIn from '../navigation/postLogIn';
import { MainTabBar } from '../navigation/main_tab_bar';

// eslint-disable-next-line import/prefer-default-export
export const createRootNavigator = (props) => {
  return createSwitchNavigator(
    {
      PostLogIn,
      SignedIn: MainTabBar,
      SignedOut: PreAuth,
      SignedUp: postSignUp,
    },
    {
      initialRouteName: props.authenticated ? 'SignedIn' : 'SignedOut',
    },
  );
};