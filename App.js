import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.search} >
        <Text>Search</Text>
      </View>
      <View style={styles.list} >
        <Text>List</Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight // only for andriod. Does not work in ios
  },
  search: {
    padding: '5%',
    backgroundColor: 'green',
  },
  list: {
    flex: 1,
    padding: '5%',
    backgroundColor: 'blue',
  },
});
