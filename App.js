import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'

const App = () => {
  return (
    <SafeAreaView>
      <Text>hello world</Text>
    </SafeAreaView>
  )
}

export default App

let styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
