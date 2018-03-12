/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';



class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  alert(){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => {
          this.props.navigation.navigate('Profile');
        }},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'destructive'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
  }
  render() {

    let users = ['a', 'b', 'c'];

    const { navigate } = this.props.navigation;
    return (

      <View>
        <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
       style={{width: 400, height: 400}} />
        {
          users.map(user => <Text>
              Welcome to React Native!
            </Text>)
        }
        <Button
          title="Alert"
          onPress={this.alert.bind(this)}
        />
        <Button
          title="Profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
      </View>
     
    );
  }
}
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'ProfileScreen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>
            Welcome to Profile Screen
        </Text>
        <Test />
        <Button
          title="Go to Home"
          onPress={() =>
            navigate('Home')
          }
        />
      </View>
    );
  }
}

class Test extends React.Component {
  
  render() {
    return (
      <View>
        <Text>
            Test...
        </Text>
      </View>
    );
  }
}


const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default App;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
