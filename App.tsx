import React, * as react from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

export default class HelloWorldApp extends react.Component {
  _onPressButton() {
    alert('you tapped the button!')
  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.flatList}>
          <FlatList data={[{ key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'first' },
          { key: 'second' },
          { key: 'third' },
          { key: 'fourth' },
          { key: 'fifth' },
          { key: 'sixth' },
          { key: 'seventh' },
          { key: 'eight' },
          { key: 'ninth' },
          { key: 'tenth' },
          { key: 'eleventh' },
          { key: 'tweleveth' },
          { key: 'thirteenth' }]}
            renderItem={({ item }) => <Text style={styles.flatListitem}>{item.key}</Text>} />
        </View>

        <View style={styles.formContainerLayout}>
          <Button onPress={this._onPressButton} title="Press Me"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    paddingTop: 22,
    justifyContent: "center",
    alignItems: "center"
  },
  flatList: {
    flexGrow: 1,
    height: "20%"
  },
  flatListitem: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  formContainerLayout: {
    flex: 2
  }
})