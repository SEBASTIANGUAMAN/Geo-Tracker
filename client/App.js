import React from 'react';
import Localitation from './components/localitation';
import { StyleSheet, Text, View, Button, TouchableOpacityBase, TextInput } from 'react-native';


export default function App() {

  return (
    <Localitation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#367698',
    color: 'white'
  }
});
