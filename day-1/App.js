import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Lo from './assets/logo.svg'

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <View>
        <Image source={require("./assets/splash.png")} />
      </View>
<View>
  <Lo height={50} width={50} />
</View>
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
