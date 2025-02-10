import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontSize from '@/constants/FontSize'
import { Colors } from '@/constants/Colors'

const ChatContainerDash = ({title, timestamp, onPress}:{title: string, timestamp: Date, onPress: () => void}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{marginTop: 10}}>
        <Text style={{fontSize: 20, fontFamily: "Outfit-Regular", color: Colors.app.light_green}}>{title}</Text>
        <Text style={{fontSize: 10, fontFamily: "Outfit-Regular", color: "rgba(255,255,255,0.2)"}}>{new Date(timestamp).toDateString()} {new Date(timestamp).toLocaleTimeString()}</Text>
      </View>
      <View style={{borderBottomWidth: 1, borderBottomColor: "rgba(0,0,0,0.2)", marginTop: 6}}/>
    </TouchableOpacity>
  )
}

export default ChatContainerDash

const styles = StyleSheet.create({})