import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import { StatusBar } from 'expo-status-bar';
import AuthHeader from '@/components/AuthHeader';

const signin = () => {
  return (
    <SafeAreaView style={styles.rootComponent}>
      <View>
        <AuthHeader/>
        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: "Outfit-SemiBold", color: "white", fontSize: 25}}>Login</Text>
        </View>
      </View>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

export default signin;

const styles = StyleSheet.create({
  rootComponent: {
    flex:1,
    backgroundColor: Colors.dark.background,
    paddingHorizontal: 16
  }
})