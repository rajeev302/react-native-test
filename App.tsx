import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class HelloWorldApp extends Component {
  _onPressButton(){
    alert('you tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={[{key: 'Devin'},
            {key: 'Dan'},
            {key: 'Dominic'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'first'},
            {key: 'second'},
            {key: 'third'},
            {key: 'fourth'},
            {key: 'fifth'},
            {key: 'sixth'},
            {key: 'seventh'},
            {key: 'eight'},
            {key: 'ninth'},
            {key: 'tenth'}, 
            {key: 'eleventh'},
            {key: 'tweleveth'},
            {key: 'thirteenth'}]} 
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   justifyContent: "center",
   alignItems: "center"
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})