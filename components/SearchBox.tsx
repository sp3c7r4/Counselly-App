import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import search from '@/assets/images/search_icon.png'

const SearchBox = ({onChangeText}:{onChangeText: (value: string) => void}) => {
  return (
    <View style={{height: 34, backgroundColor: "rgba(255,255,255,0.2)", borderRadius: 10, alignItems: 'center', paddingLeft: 10, marginVertical: 3, flexDirection: "row", gap: 7}}>
      <Image source={search} style={{height: 15, width: 15}}/>
      <TextInput placeholder='search' placeholderTextColor="#ccc" style={{height: 30, flex: 1, color:"#fff", borderColor: "#fff"}} onChangeText={onChangeText}/>
    </View>
  )
}

export default SearchBox

const styles = StyleSheet.create({})