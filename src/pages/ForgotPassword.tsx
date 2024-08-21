import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import RegisterHeader from '../components/RegisterHeader';

function ForgotPassword() {

  const [email, setEmail] = useState("");

  return (
    <View>
      <RegisterHeader header={"Forgot Password"} isForgot={true}/>

      <View>
        <Text style={styles.header}>Enter your Registered Email</Text>
        <Text style={styles.description}>We will send link to Reset this on your Email address.</Text>
      </View>

      <View style={styles.inputView}>

        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Email ID"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.horizontalLine}></View>

      </View>

      <TouchableOpacity style={styles.sendLinkContainer}>
        <View style={styles.sendLinkView}>
            <Text style={styles.sendLinkText}>
                Send Link
            </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

export default ForgotPassword;

const styles = StyleSheet.create({
  inputView: {
    paddingHorizontal: 30,
  },
  inputField: {
    fontSize: 17,
    color: "Black",
    fontWeight: "400",
    marginBottom: 20,
    marginLeft: -3,
    marginTop: -3,
  },
  horizontalLine: {
    marginTop: -20,
    height: 2,
    backgroundColor: "gray",
    width: "95%",
    marginVertical: 20,
  },
  header: {
    left: 55,
    fontSize: 25,
    marginTop: 35,
    color: 'black',

  },
  description: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 45,
    paddingHorizontal: 40,
    fontSize: 17,
    textAlign: "center",
  },
  sendLinkContainer: {
    top: "125%",
    left: '8%',
  },
  sendLinkView: {
    width: '85%',
    height: 55,
    display: 'flex',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "orange",    
  },
  sendLinkText: {
    color: "white",
    fontSize: 20,
  },
  text: {
    fontSize: 12,
  }
});
