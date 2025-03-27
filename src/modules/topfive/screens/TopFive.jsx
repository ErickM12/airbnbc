import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
//rnfs
export default function TopFive() {
  return (
    <View style={styles.container}>
      <Text>TopFive</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})