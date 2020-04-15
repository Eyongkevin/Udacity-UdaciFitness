import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry, Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
class FlexboxExamples extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          {Platform.OS == 'ios'
          ? <Ionicons name='ios-pizza' size={100} color='red' />
          : <Ionicons name='md-pizza' size={100} color='red' />}
        </View> 
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>   
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    flexDirection: 'column-reverse',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
  }
})

export default FlexboxExamples;


/**
 * Default CSS properties that React Native applies to Components
box-sizing: border-box;
position: relative;
align-items: stretch;
flex-shrink: 0;
align-content: flex-start;
border: 0 solid black;
margin: 0;
padding: 0;
min-width: 0;
 */