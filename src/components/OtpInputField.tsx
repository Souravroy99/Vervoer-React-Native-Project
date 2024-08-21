import {StyleSheet, TextInput} from "react-native";
import React from 'react'

function OtpInputField() {
  return (
    <TextInput
        style={styles.input}
        placeholder="1"
        value={0}
        keyboardType="numeric" 
    />
  )
}

export default OtpInputField;

const styles = StyleSheet.create({

input: {
    width: 50,
    height: 50,
    borderRadius: 25 ,
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 8,
    textAlign: "center"
},


})