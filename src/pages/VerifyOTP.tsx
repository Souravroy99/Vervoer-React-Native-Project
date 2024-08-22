import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import otpImage from '../assets/OtpImage.png';
import OtpInputField from "../components/OtpInputField.tsx";
import RegisterHeader from "../components/RegisterHeader.tsx";


function VerifyOTP() {
  return (
  <View style={styles.container}>
    <RegisterHeader header={"Registration"} isForgot={false}/>


    <View>

      <View style={styles.imageSection}>
        
        <Image source={otpImage} style={styles.image} />
        <Text style={styles.text}> Verify OTP</Text>
        <Text style={styles.para}>
          Enter the Verification Code sent to your Phone number
        </Text>

      </View>

      <View style={styles.otpInput}>
        <OtpInputField />
        <OtpInputField />
        <OtpInputField />
        <OtpInputField />
      </View>

      <View style={styles.notReceived}>
            <Text style={styles.notReceivedMessage}>Didn't received OTP?</Text>
      </View>

      <TouchableOpacity style={styles.resendView}>
        <Text  style={styles.resendText}>
            Resend OTP
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.verifyContainer}>
            <View style={styles.verifyView}>
                <Text style={styles.verifyText}>
                    Verify OTP
                </Text>
            </View>
      </TouchableOpacity>

    </View>
  </View>
  );
}

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  imageSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    top: '10%',
    width: 170,
    height: 170,
  },
  text: {
    top: '25%',
    fontSize: 25,
    color: 'black',
  },
  para: {
    fontSize: 17,
    top: '34%',
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  otpInput: {
    top: "30%",
    paddingHorizontal: "20%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  notReceived: {
    top: "40%",
    left: "31%",
 },
 notReceivedMessage: {
      fontSize: 18,
      color: "gray",
  },
  resendView: {
    top: "45%",
    left: "40%",
  },
  resendText: {
    color: "orange",
    fontSize: 17,
  },
  verifyContainer: {
      top: "96%",
      left: '10%',
    },
  verifyView: {
    width: '80%',
    height: 55,
    display: 'flex',
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "orange",    
  },
  verifyText: {
    color: "white",
    fontSize: 20,
  }
  
});
