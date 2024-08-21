import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import BackArrow from "../assets/BackArrow.png";

function RegisterHeader({header, isForgot}) {
  return (
    <View>
        <View > 
            <TouchableOpacity>
                <Image source={BackArrow} style={styles.arrowImage}/>
            </TouchableOpacity>
                <Text style={[styles.heading, (isForgot ? styles.forgot : "")]}>{header}</Text>
        </View>
    </View>
  )
}

export default RegisterHeader;

const styles = StyleSheet.create({
    view: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    heading: {
        color: "orange",
        fontSize: 21,
        top: "-30%",
        left: "34%",
    },
    arrowImage: {
        left: 10,
        top: 10,
        width: 25 ,
        height: 25 ,
    },
    forgot: {
        left: "30%",
    }
})