import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import profileImage from '@/assets/images/demo.png'
import logoIcon from '@/assets/images/star.png'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated'

const data = {
  firstname: "Spectra",
  lastname: "Gee",
  id: 1,
  image: profileImage
}



const ChatContainer = ({userMessage, modelMessage, loading}:{userMessage: string, modelMessage: string, loading: boolean}) => {

  const scale = useSharedValue(1); // Initial scale

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.5, { duration: 800 }), // Grow
        withTiming(1, { duration: 800 })   // Shrink
      ),
      -1, // Infinite loop
      true // Reverse direction
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <View style={{marginTop: 15, gap: 5}}>
        <View style={{padding: 10, backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 8, alignSelf: "flex-start", maxWidth: "100%", gap: 5}}>
      <View style={{flexDirection: "row", gap: 3, alignItems: "center"}}>
        {/** User's Image */}
        { data?.image ? <Image source={data.image} style={{width: 15, height: 15, borderRadius: 100}} /> : 
                    <View style={{width: 15, height: 15, borderRadius: 100, backgroundColor: "#fff", alignItems: "center", justifyContent: "center"}}>
                      <Text style={{fontFamily: "Outfit-Regular"}}>{data?.firstname[0]}</Text>
                    </View> }
        <Text style={{color: "#fff", fontFamily: "Outfit-Regular", fontSize: 11}}>{data?.firstname}</Text>
        </View>
          <Text style={{color: "#CDDDDD"}}>{userMessage}</Text>
      </View>
        {
          loading ?
          <Animated.Image source={logoIcon} style={[animatedStyle ,{width: 20, height: 20, marginLeft: 10, marginTop: 10}]}/>
          :
      <View style={{flexDirection: "row", gap: 3, alignItems: "baseline"}}>
            <Image source={logoIcon} style={{width: 12, height: 12}}/>
            <Text style={{color: "#fff", flex: 1}}>{modelMessage}</Text>
      </View>
        }
    </View>
  )
}

export default ChatContainer

const styles = StyleSheet.create({})