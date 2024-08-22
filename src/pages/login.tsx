import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import RegisterHeader from '../components/RegisterHeader';
import SplashImage from '../assets/SplashImage.png';
import Eye from "../assets/Eye.png";
import GoogleLogo from "../assets/GoogleLogo.png";
import FaceBookLogo from "../assets/FacebookLogo.png";
import AppleLogo from "../assets/AppleLogo.png";
import BottomCurve from "../assets/BottomCurve.png";
import SignUp from "../assets/SignUp.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style = {styles.container}>
      
      <RegisterHeader header={''} isForgot={false} />

      <View style={styles.imageContainer}>
        <Image source={SplashImage} style={styles.logoImage} />
      </View>

      <View style={styles.inputView}>
        <Text>Email</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Mobile Number or Email ID"
          placeholderTextColor="black"
          value={email}
          onChangeText={(emailItem) => setEmail(emailItem)}
        />
        <View style={styles.horizontalLine}></View>

        <Text>Password</Text>
        <TextInput
          placeholder="Enter Password"
          placeholderTextColor="black"
          value={password}
          style={styles.inputField}
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.horizontalLine}></View>

      </View>
      
      <TouchableOpacity style={styles.eyeContainer}>
            <Image source={Eye} style={styles.eyeImage}/>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>Forgot Password?</Text>

      <TouchableOpacity style={styles.continueContainer}>
            <View style={styles.continueView}>
                <Text style={styles.continueText}>
                    Login
                </Text>
            </View>
        </TouchableOpacity>

        <Text style={styles.loginWith}>Or Login with</Text>

        <View style={styles.logoContainer}>
          <TouchableOpacity style={styles.logoImagesContainer}>
              <Image source={GoogleLogo}  style={styles.logoImages}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoImagesContainer}>
              <Image source={FaceBookLogo}  style={styles.logoImages} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoImagesContainer}>
              <Image source={AppleLogo} style={styles.logoImages} />
          </TouchableOpacity>

        </View>

        <Image source={BottomCurve} style={styles.bottomSlide}/>
        <Image source={SignUp} style={styles.signUp}/>

    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    top: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 220,
    height: 55,
  },
  inputView: {
    top: '15%',
    paddingHorizontal: 30,
  },
  inputField: {
    fontSize: 18,
    color: 'Black',
    fontWeight: '400',
    marginBottom: 20,
    marginLeft: -3,
    marginTop: 3,
  },
  horizontalLine: {
    marginTop: -23,
    height: 1,
    backgroundColor: 'gray',
    width: '95%',
    marginVertical: 20,
  },
  eyeContainer: {
    position: "absolute",
    top: "42%",
    left: "78%",
  },
  eyeImage: {
    width: 30,
    height: 20,
  },
  forgotPassword: {
    position: 'absolute',
    top: "50%",
    left: "8%",
    color: "orange",
    fontSize: 16,
  },
  continueContainer: {
    top: "24%",
    left: '8%',
  },
  continueView: {
    width: '82%',
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
  },
  loginWith: {
    position: 'absolute',
    top: "67%",
    left: "38%",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: "31%",
  },
  logoImages: {
    width: 55,
    height: 55,
  },
  logoImagesContainer: {
    paddingHorizontal: 8,
    top: 10,
  },
  bottomSlide: {
    right: 188,
    bottom: -170,
    width: 600,
    height: 300,
  },
  signUp: {
    position: "absolute",
    width: 120,
    height: 30,
    top: "93%",
    left: "65%",
  }
});
