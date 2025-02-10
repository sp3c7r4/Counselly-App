import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import backButton from '@/assets/images/back_white.png'
import newChat from '@/assets/images/new_chat.png'
import { router } from 'expo-router'

const ChatHeader = () => {
  return (
    <View>
      <View style={{flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
        <Pressable onPress={() => router.back()} style={{ flexDirection: "row", alignItems: "center"}}>
          <Image source={backButton} style={{height: 16, width: 16}} resizeMode="contain"/>
          <Text style={{fontFamily: "Outfit-Regular", fontSize: 17, color: "white"}}> Chats </Text>
        </Pressable>
        <Text style={{fontFamily: "Outfit-SemiBold", fontSize: 17, color: "white", marginRight: 15}}>Counselly <Text style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Outfit-Regular"}}>3.5 Leo</Text></Text>
        <Image source={newChat} style={{height: 20, width: 20}} resizeMode="contain"/>
      </View>
    </View>
  )
}

export default ChatHeader

const styles = StyleSheet.create({})