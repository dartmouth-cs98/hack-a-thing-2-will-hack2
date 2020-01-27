//adapted from cs52 final project
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation';
import welcome from '../components/welcome'

export const InitialPage = createStackNavigator(
    {
      IntroductionPage,
    },
    {
      initialRouteName: 'IntroductionPage',
    },
);

export default createAppContainer(InitialPage);