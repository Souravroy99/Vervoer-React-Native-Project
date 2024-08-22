import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import VLogo from '../assets/VLogo.png';
import CarImage from '../assets/CarImage.png';
import BottomCurve from "../assets/BottomCurve.png";
import GetStarted from "../assets/GetStarted.png";
import Slide from "../assets/Slide.png";

function OnBoarding() {
  return (
    <View style={styles.container}>

      <Image source={VLogo} style={styles.logoImage} />
      <Text style={styles.text}>Rides, Parking, & Dry Cleaning in an Instant!</Text>
      <Image source={Slide} style={styles.slide}/>
      <Image source={CarImage} style={styles.carImage}/>
      <Image source={BottomCurve} style={styles.bottomCurve}/>

      <TouchableOpacity style={styles.touchToGetStarted}>
        <Image source={GetStarted} style={styles.getStarted}/>
      </TouchableOpacity>

    </View>
  );
}

export default OnBoarding;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  logoImage: {
    width: 160,
    height: 160,
    top: 45,
    left: 8,
  },
  text: {
    fontSize: 34,
    color: "black",
    fontWeight: "400",
    paddingHorizontal: 80,
    marginLeft: 15,
    top: 30,
    right: 50,
  },
  carImage: {
    width: 430,
    height: 330,
    top: 60,
  },
  bottomCurve: {
    right: 35,
    bottom: 13,
    width: "109%",
    height: "30%",
    position: 'relative',
  },
  touchToGetStarted: {
    position: "absolute",
    top: "93%",
    left: "60%",
  },
  getStarted: {
    width: 130,
    height: 26,
  },
  slide: {
    position: 'absolute',
    width: 70,
    height: 10,
    top: "41%",
    left: '8%',
  }
});
