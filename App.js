// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar, Rectangle } from 'react-native';
import { WebView } from 'react-native-webview';
export default function App() {

  return (
    // <View style={styles.container}>
    //   <Text style={styles.redtext}>Youtube Player</Text>
    // </View >
    <View style={{
      width: '100%',
      height: 300,
      paddingTop: StatusBar.currentHeight,
      alignItems: 'center'
    }}>
      <View style={{
        backgroundColor: 'yellow',
        width: '100%',
        height: 200
      }}>
        <WebView
          source={{ uri: 'https://www.youtube.com/embed/8zT6CYu0iYQ' }}
        />
      </View>


      <Text>Youtube videos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight,
  },
  redtext: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
