import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sports from './assets/Sports.svg'

export default function App() {
  return (
    <View style={styles.container}>
      <Sports height='400' width='400'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
