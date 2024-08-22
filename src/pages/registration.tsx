import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import RegisterHeader from '../components/RegisterHeader';
import {Picker} from '@react-native-picker/picker';

function Registration() {
  const numberCode = [
    {label: '+1', value: 'usa'},
    {label: '+91', value: 'india'},
    {label: '+82', value: 'South Korea'},
    {label: '+98', value: 'Iran'},
    {label: '+852', value: 'Hong Kong'},

  ];
  const [countryCode, setCountryCode] = useState('');

  return (
    <View style={styles.container}>
      <RegisterHeader header={'Registration'} isForgot={false} />

      <View style={styles.headerSection}>
        <Text style={styles.header}>Enter Your Phone No.</Text>
        <Text style={styles.text}>
          Please enter your Phone number.We will send OTP to verify.
        </Text>

        <Text style={styles.inputText}>Phone Number</Text>
        <TextInput />

        <Picker
        style={styles.inputField}
          selectedValue={countryCode}
          onValueChange={countryItem => setCountryCode(countryItem)}>
          {numberCode.map((countryCodeItem, index) => (
              <Picker.Item
                label={countryCodeItem.label}
                value={countryCodeItem.value}
                key={index}
              />
          ))}
        </Picker>
      </View>
    </View>
  );
}

export default Registration;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  headerSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 23,
  },

  header: {
    top: '25%',
    fontSize: 28,
    color: 'black',
  },

  text: {
    top: '40%',
    fontSize: 17,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  inputText: {
    top: '60%',
    left: '-30%',
  },
});
