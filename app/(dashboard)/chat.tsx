import { Pressable, StyleSheet, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import ChatHeader from '@/components/ChatHeader'
import ChatContainer from '@/components/ChatContainer'
import Utility from '@/utils/Utility'
import { useLocalSearchParams } from 'expo-router'

async function startChat(userId: string, chatId: string | null, message: string) {
  const newUtilityInstance = new Utility(userId, chatId)
  const chat = await newUtilityInstance.initializeChat(message)
  console.log(JSON.stringify(chat[chat.length-1], null, 2))
}

async function getChatsByID(chatId: any, callback: any) {
  const chat = await Utility.fetchChatsByID(chatId)
  callback(chat.history)
  console.log("Spectra was here",JSON.stringify(chat.history, null, 2))
} 

const chat = () => {
  const { id } = useLocalSearchParams()
  const [chatMessages, setChatMessages] = useState([])
  useEffect( () => {
    async function mera() {
      await getChatsByID(id, setChatMessages)
    }
    mera()
    console.log("Saved messages: ", chatMessages)
  }, [])
  return (
    <SafeAreaView style={{backgroundColor: "#2E2F2F", flex: 1, paddingHorizontal: 16, paddingTop: 10}}>
      <ChatHeader/>
      {/* {
        id ?

        : ""
      } */}
       <ChatContainer loading={!true} userMessage='Hello good morning mam' modelMessage='Hello good morning you came to the right placeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'/>
       <ChatContainer loading={true} userMessage='Hello good morning mam i need help balancing school and work' modelMessage='Hello good morning you came to the right placeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'/>
       <Pressable style={{height: 30, width: 80, backgroundColor: "#fff", borderRadius: 8, alignItems: "center", justifyContent: "center"}} onPress={() => startChat("67a63a8fe4994121f7fb7be6", "67a96a6da7c945bc11ce98ce", "What's up")}>
          <Text>CLick ME</Text>
       </Pressable>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

export default chat

const styles = StyleSheet.create({})