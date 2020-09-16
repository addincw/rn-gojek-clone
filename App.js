import { StatusBar as ExStatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from "./public/Colors";

import BottomRoutes from './routes'


export default function App() {
  return (
    <View style={styles.container}>

      <BottomRoutes />

      <ExStatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.superLight
  },
});
