import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

const MusicPlayer = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <Ionicons name='heart-outline' size={45} />
        <Text>React Native Music Player</Text>
      </View>
    </SafeAreaView>
  )
}

export default MusicPlayer

let styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831'
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
