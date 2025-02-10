import { GoogleGenerativeAI } from "@google/generative-ai";
import AsyncStorage from '@react-native-async-storage/async-storage';

const counscellingPrompt = `
Role:
You are a professional, ethical, and experienced student counselor dedicated to guiding, supporting, and advising students with empathy, accuracy, and professionalism.

Behavior & Response Guidelines:
✅ Conversational & Natural: Treat every input like a real conversation. Keep responses short, clear, and engaging (Max 30 words).
✅ Empathetic & Supportive: Show genuine care without being overly talkative.
✅ Actionable Guidance: Provide specific, practical, and helpful advice.
✅ Ethical & Professional: Follow strict confidentiality, non-discrimination, and informed consent policies.
✅ Student Empowerment: Encourage independent decision-making and self-improvement rather than dictating choices.
✅ Crisis Sensitivity: If a student expresses self-harm or severe distress, escalate the case to a human counselor or emergency services immediately.

Response Style:

Keep it conversational and human-like (avoid robotic answers).
Avoid long explanations—respond naturally as if you were in a real conversation.
Example of a good response:
Student: "I'm thinking of dropping out."
AI: "That sounds tough. What's making you feel this way? Maybe we can explore some options together."
Key Focus Areas:

Time Management & Productivity
Stress & Emotional Well-being
Academic & Career Guidance
Conflict Resolution & Communication
Personal Growth & Self-Confidence
📌 Example Scenarios & Expected Response Style:

1️⃣ Student: "I think I'll drop out of school."

AI: "I hear you. What's making you feel this way? Let's explore your options together."
2️⃣ Student: "I can't manage school and work. It's too much."

AI: "Balancing both is tough. Want some time management tips?"
3️⃣ Student: "I'm anxious about my future."

AI: "That's understandable. What specific concerns do you have? Let's figure it out."
Final Reminder:

Always respond concisely, naturally, and empathetically.
Never provide generic or robotic answers—make each response feel personalized.
Keep responses engaging, warm, and professional.
`

export default class AiClass {
  constructor(chatId, userMessage) {
    this.chatId = chatId
    this.userMessage = userMessage
  }

  async initializeAiChat() {
    if (this?.chatId) {
      return await this.storeAiChat()
    }
    // console.log(this.userId, this.chatId, this.userMessage)
    return await this.createAiChat()
  }
  
  async storeAiChat() {
    const genAI = new GoogleGenerativeAI("AIzaSyAFPlnjcnauUFYzS7vaSqP6uA-R1mh7kos");
    // Set the system instruction during model initialization
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: counscellingPrompt,
    });
    
    // Fetch chat history from the database
    const chatHistory = await this.getChatHistory();
    console.log(await AsyncStorage.getItem(`chatId-${this.chatId}`))
    // Initialize the chat with the fetched history
    const chat = model.startChat({
      history: chatHistory.map((entry) => ({
        role: entry.user ? 'user' : 'model',
        parts: [{ text: entry.user || entry.model }],
      })),
    });
    console.log(this.chatId, "@@@@@@", chatHistory)
    
    const result = await chat.sendMessage(this.userMessage);
    // const createChats = await Chat.findOneAndUpdate(
    //   { user_id: this.userId, _id: this.chatId },
    //   { $push: { history: { user: this.userMessage, model: result.response.text() } } },
    //   { upsert: true, new: true }
    // );
    chatMessage.history.push({ user: this.userMessage, model: result.response.text() })
    console.log(chatMessage)
    // const newMessage = 
    // const chatMessage = { 
    //   chat_name: this.userMessage,
    //   history: [{ user: this.userMessage, model: result.response.text() }]
    //   }
    // AsyncStorage.mergeItem
    const messageArray = JSON.stringify(chatMessage)
    const createChats = await AsyncStorage.setItem(`chatId-${this.chatId}`, messageArray)
    console.log(createChats)
    return createChats;
  }

  async createAiChat() {
    const genAI = new GoogleGenerativeAI("AIzaSyAFPlnjcnauUFYzS7vaSqP6uA-R1mh7kos");
    // Set the system instruction during model initialization
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      systemInstruction: counscellingPrompt,
    });
    // Initialize the chat with the fetched history
    const chat = model.startChat({});
    
    const result = await chat.sendMessage(this.userMessage);
    console.log("Me", this.userMessage, result);
    const chatMessage = { 
      chat_name: this.userMessage,
      history: [{ user: this.userMessage, model: result.response.text() }]
    }
    const messageArray = JSON.stringify(chatMessage)
    // console.log("Create Ai Chat:", this.userMessage, result.response.text())
    const createChats = await AsyncStorage.setItem(`chatId-${this.chatId}`, messageArray)
    console.log(createChats)
    return createChats;
  }

  async getChatHistory () {
    const chat = JSON.parse(await AsyncStorage.getItem(`chatId-${this.chatId}`));
    console.log(chat)
    if (!chat) {
      return [];
    }
    return chat;
  };
}