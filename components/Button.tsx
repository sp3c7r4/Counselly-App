import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import FontSize from '@/constants/FontSize';

const Button = ({ title, onPress, outline, opacity, color=Colors.app.primary_color }: { title: string, color?: string, onPress: () => void, outline?: boolean, opacity?: number }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flex: 1 }}>
      <View style={[outline ? styles.outline : styles.container, {opacity: opacity, backgroundColor: color}]}>
        <Text style={styles.button}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    height: 45,
    marginVertical: 10
  }, button: {
    fontSize: FontSize.button_bold,
    fontFamily: "Outfit-Regular",
    color: Colors.app.white
  }, outline: {
    padding: 10,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 60,
    marginVertical: 10
  }
})