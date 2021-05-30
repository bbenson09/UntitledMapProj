import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is an untitled map project :)</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// TODO (@bevin): Remove API key from .env file before release
const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: 'untitled-map-project-9d42f.firebaseapp.com',
  databaseURL: 'https://untitled-map-project-9d42f.firebaseio.com/',
  projectId: 'untitled-map-project-9d42f',
  storageBucket: 'untitled-map-project-9d42f.appspot.com',
};

firebase.initializeApp(firebaseConfig);


