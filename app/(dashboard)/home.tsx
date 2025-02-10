import { Button, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import FontSize from '@/constants/FontSize'
import profileImage from '@/assets/images/demo.png'
import chatIcon from '@/assets/images/chat_icon.png'
import { Colors } from '@/constants/Colors'
import SearchBox from '@/components/SearchBox'
import { router } from 'expo-router'
import ChatContainerDash from '@/components/ChatContainerDash'
import Utility from '@/utils/Utility'

const data = {
  firstname: "Spectra",
  lastname: "Gee",
  id: 1,
  image: profileImage
}

const home = () => {
  const [messagesCollections, setMessagesCollections] = useState<any[]>([])
  useEffect(() => {
    async function getAllChats() {
      const newUtilityInstance = new Utility("67a63a8fe4994121f7fb7be6", "67a63a8fe4994121f7fb7b36")
      const fetchAllMessage = await newUtilityInstance.fetchChats()
      setMessagesCollections(fetchAllMessage)
      console.log(JSON.stringify(fetchAllMessage))
      // console.log("SETMESSAGED", JSON.stringify(messagesCollections))
    }
    getAllChats()
  }, [])
  return (
    <SafeAreaView style={{backgroundColor: "#2E2F2F", flex: 1, paddingHorizontal: 16, paddingTop: 10}}>
      <View style={{ zIndex: 2, flex: 1 }}>
        <View style={{alignSelf: "flex-end"}}>
          { data?.image ? <Image source={data.image} style={{width: 25, height: 25, borderRadius: 100}} /> : 
            <View style={{width: 25, height: 25, borderRadius: 100, backgroundColor: "#fff", alignItems: "center", justifyContent: "center"}}>
              <Text style={{fontFamily: "Outfit-Regular"}}>{data?.firstname[0]}</Text>
            </View> }
        </View>
        <View style={{marginTop: 5}}>
          <Text style={{fontSize: FontSize.onboarding_text_bold, fontFamily: "Outfit-SemiBold", color: "#fff", letterSpacing: 2}}>Chats</Text>
        </View>
        <SearchBox onChangeText={(value) => console.log(value)}/>
          <FlatList data={messagesCollections} renderItem={({item, index}) => {
            return (
              <ChatContainerDash key={index} title={item?.chat_name} timestamp={item?.createdAt} onPress={() => router.push({ pathname: "/(dashboard)/chat", params: { id: item?._id} })}/>
            )
          }}/>
          {/* <Button title='Click' onPress={() => console.log(messagesCollections)}/> */}
      </View>

      {/** New chat */}
      <View style={{ marginBottom: 20, zIndex: 3, position: "absolute", right: 16, bottom: 0}}>
        <Pressable onPress={() => router.navigate("/(dashboard)/chat")}>
          <View style={{ height: 45, alignSelf: "flex-start", backgroundColor: Colors.app.primary_color, borderRadius: 100, paddingHorizontal: 10, flexDirection: "row", gap: 5, alignItems: "center", borderWidth: 0.2, borderColor: Colors.app.light_green }}>
            <Image source={chatIcon} style={{width: 25, height: 25}}/>
            <Text style={{ color: "white", fontFamily: "Rosemary" }}> New Chat </Text>
          </View>
        </Pressable>
      </View>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({})