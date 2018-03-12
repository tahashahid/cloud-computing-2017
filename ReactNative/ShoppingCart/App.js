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
  Button,
  FlatList
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

let cart = [];

class Menu extends React.Component {
  
  render() {
    const navigate = this.props.navigate;
    return (
      <View>
        <Button
          title="Go to Profile"
          onPress={() =>
            navigate('Profile')
          }
        />
        <Button
          title="Go to Products"
          onPress={() =>
            navigate('Products')
          }
        />
        <Button
          title="Go to Cart"
          onPress={() =>
            navigate('Cart')
          }
        />
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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const navigate = this.props.navigation.navigate;
    return (
      <View>
        <Menu navigate={navigate}/>
        <Text>Home</Text>
      </View>
    );
  }
}
class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Menu navigate={navigate}/>
        <Text>Profile</Text>
      </View>
    );
  }
}
class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };
  render() {
    const styles = StyleSheet.create({
      container: {
      flex: 1,
      paddingTop: 22
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    })
    const { navigate } = this.props.navigation;
    return (
      <View>
         <Menu navigate={navigate}/>
        <Text>Cart</Text>

        <FlatList
          data={cart}
          renderItem={({item}) => <Text 
            style={styles.item}
            onPress={()=> {
              navigate('ProductDetail', item);
            }}
            >{item.name}
          </Text>}
        />
      </View>
    );
  }
}
class ProductsScreen extends React.Component {
  static navigationOptions = {
    title: 'Products',
  };
  render() {

    const styles = StyleSheet.create({
      container: {
      flex: 1,
      paddingTop: 22
      },
      item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    })
    const { navigate } = this.props.navigation;
    const productsList = [
      {id: 1, name: 'p1', amount: 10, key: '1'},
      {id: 2, name: 'p2', amount: 43, key: '2'},
      {id: 3, name: 'p3', amount: 25, key: '3'},
      {id: 4, name: 'p4', amount: 104, key: '4'},
      {id: 5, name: 'p5', amount: 43, key: '5'},
    ];

    return (
      <View>
        <Menu navigate={navigate}/>
        <Text>Products</Text>
        <FlatList
          data={productsList}
          renderItem={({item}) => <Text 
            style={styles.item}
            onPress={()=> {
              navigate('ProductDetail', item);
            }}
            >{item.name}
          </Text>}
        />
      </View>
    );
  }
}
class ProductDetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Product Detail'
  };
  render() {
    const { navigate } = this.props.navigation;
    const item = this.props.navigation.state.params;
    return (
      <View>
         <Menu navigate={navigate}/>
         <Text>Product Detail</Text>
         <Text>id: {item.id}</Text>
         <Text>name: {item.name}</Text>
         <Text>amount: {item.amount}</Text>

         <Button onPress={()=>{
           cart.push(item);
         }} title="Add to cart" />
          
      </View>
    );
  }
}

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Cart: { screen: CartScreen },
  Products: { screen: ProductsScreen },
  ProductDetail: { screen: ProductDetailScreen },
});


export default App;