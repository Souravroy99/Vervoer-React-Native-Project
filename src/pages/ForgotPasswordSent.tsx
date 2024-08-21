import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import RegisterHeader from "../components/RegisterHeader.tsx"
import otpImage from '../assets/OtpImage.png';


function ForgotPassword() {
  return (
    <>
        <RegisterHeader header={"Forgot Password"} isForgot={true}/>
        
        <View>

            <View style={styles.imageSection}>
                <Image source={otpImage} style={styles.image} />
                <Text style={styles.text}>Sent</Text>
                <Text style={styles.para}>
                    Reset Password link is sent to Your Email ID.
                </Text>
            </View>

            <TouchableOpacity style={styles.continueContainer}>
                <View style={styles.continueView}>
                    <Text style={styles.continueText}>
                        Back to Login
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    </>
  )
}

export default ForgotPassword;

const styles = StyleSheet.create({
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
        fontSize: 18,
        top: '34%',
        textAlign: 'center',
        paddingHorizontal: 70,
    },
    continueContainer: {
        top: "45%",
        left: '7%',
      },
    continueView: {
      width: '85%',
      height: 55,
      display: 'flex',
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      borderRadius: 30,
      backgroundColor: "orange",    
    },
    continueText: {
      color: "white",
      fontSize: 19,
    }
})