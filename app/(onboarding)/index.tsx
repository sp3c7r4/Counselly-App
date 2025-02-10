import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'
import onboardingImage from '@/assets/images/onboarding.png'
import welcomeScreenLogo from '@/assets/images/welcome_screen_image.png'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '@/components/Button'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar';

const Index = () => {
  return (
    <SafeAreaView style={{ flex:1 }}>
      <ImageBackground source={onboardingImage} style={styles.backgroundImage}/>
      <View style={[ styles.overlay, {position: "absolute", gap: 10} ]}>
        <View >
          <Image resizeMode="contain" source={welcomeScreenLogo} style={styles.welcomeScreenLogo}/>
          <View>
            <Text style={{fontFamily: "Outfit-SemiBold", color: "white", fontSize: 25}}>Smart Care for Independent Living</Text>
            <Text style={{fontFamily: "Outfit-Regular", color: "white", fontSize: 12, opacity: 0.7}}>AI-powered assistance designed to enhance safety, provide comfort, and support independent living—ensuring peace of mind for you and your loved ones.</Text>
          </View>
        </View>
        <View style={{flexDirection: "row", gap: 8, marginRight: 60}}>
          <Button title='login' onPress={() => router.replace("/(dashboard)/home")} color="rgba(255,255,255,0.5)"/>
          <Button title='Register' onPress={() => router.replace("/(auth)/signup")}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
  }, overlay: {
    flex: 1,
    paddingHorizontal: 16,
    borderRadius: 10,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    paddingBottom: 40
  }, welcomeScreenLogo: {
    height: 70,
    width: 200
  }
})
export default Index;