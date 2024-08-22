import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import SplashImage from "../assets/SplashImage.png";

function Splash() {
  return (
    <View style={styles.container}>
      <Image source={SplashImage} style={styles.image} />
    </View>
  );
}

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  image: {
    width: 300, 
    height: 300,  
    resizeMode: "contain",  
  },
});
