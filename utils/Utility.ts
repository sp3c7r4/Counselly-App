import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Utility {
  userId: string;
  chatId: string | null;
  constructor(userId: string, chatId: string | null) {
    this.userId = userId;
    this.chatId = chatId;
  }

  async initializeChat(message: string) {
    try {
      const response = await axios.post('http://172.20.10.3:3000/chat/start', {
        userId: this.userId,
        chatId : this.chatId || undefined,
        userMessage: message
      })
      const serverErrorCheckPassed = response.data.statusCode === 200 && response.data.message === "Chat message!!!"
      if (serverErrorCheckPassed) {
        return response.data.data.history
      } else {
        return "Server error!!!"
      }
    } catch (error: any) {
      if (error?.code === 'ERR_NETWORK') {
        return 'Network error! Please check your internet connection.';
      } else if (error?.code === 'ECONNABORTED') {
        return 'Request timeout! Server may be down.'
      } else {
        return `Internal Server Error [${error.status}]` + error?.message
      }
    }
  }

  async fetchChats() {
    try {
      const response = await axios.get(`http://172.20.10.3:3000/chat/all/${this.userId}`)
      console.log(response)
      const serverErrorCheckPassed = response.data.statusCode === 200 && response.data.message === "Message Fetched!!!"
      if (serverErrorCheckPassed) {
        return response.data.data
      } else {
        throw new Error("Server Error!!!")
      }
    } catch (error: any) {
      if (error?.code === 'ERR_NETWORK') {
        return 'Network error! Please check your internet connection.';
      } else if (error?.code === 'ECONNABORTED') {
        return 'Request timeout! Server may be down.'
      } else {
        return `Internal Server Error [${error.status}]` + error?.message
      }
    }
  }
  
  static async fetchChatsByID(chatId: string) {
    try {
      const response = await axios.get(`http://172.20.10.3:3000/chat/fetch/${chatId}`)
      const serverErrorCheckPassed = response.data.statusCode === 200 && response.data.message === "Message Fetched!!!"
      if (serverErrorCheckPassed) {
        return response.data.data
      } else {
        return "Server error!!!"
      }
    } catch (error: any) {
      if (error?.code === 'ERR_NETWORK') {
        return 'Network error! Please check your internet connection.';
      } else if (error?.code === 'ECONNABORTED') {
        return 'Request timeout! Server may be down.'
      } else {
        return `Internal Server Error [${error.status}]` + error?.message
      }
    }
  }
}