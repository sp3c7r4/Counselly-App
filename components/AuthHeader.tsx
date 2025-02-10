import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import backButton from '@/assets/images/back_button.png'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const AuthHeader = () => {
  return (
    <View>
      <View style={{width: "100%", height: 10, justifyContent:"center", marginTop: 10}}>
        <Pressable onPress={() => router.replace('/(onboarding)')} style={{ position: "absolute", zIndex: 2}}>
          <Image source={backButton} style={styles.button_style} resizeMode='contain'/>
        </Pressable>
          <View style={styles.loading_bar}/>
      </View>
    </View>
  )
}

export default AuthHeader;

const styles = StyleSheet.create({
  button_style: {
    width: 17,
    height: 20,
  }, loading_bar: {
    height: 7,
    width: "60%",
    backgroundColor: Colors.app.light_green,
    borderRadius: 8,
    alignSelf: "center"
  }
})