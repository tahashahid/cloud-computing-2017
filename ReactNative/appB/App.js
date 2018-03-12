/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
*/




import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, StatusBar, TextInput, Button} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});
//export default App;

export default class  HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const navigate = (a,b)={};
    //this.props.navigation
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Profile', { name: 'Jane' })
        }
      />
    );
  }
}

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    //const { navigate } = this.props.navigation;
    const navigate = (a,b)={};
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Home', { name: 'Jane' })
        }
      />
    );
  }
}
