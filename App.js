import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './src/components/router';

export default class App extends Component {
  render() {
    const Layout = createAppContainer(createRootNavigator(this.props));
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    )
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
