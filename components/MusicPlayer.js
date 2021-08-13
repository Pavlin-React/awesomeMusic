import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MusicPlayer = () => {
  return (
    <View style={styles.container}>
      <Text>React Native Music Player</Text>
    </View>
  )
}

export default MusicPlayer

let styles=StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
