import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import RegisterHeader from '../components/RegisterHeader';

function PersonalInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState(null);

  const countries = [
    {label: 'INDIA', value: 'india'},
    {label: 'USA', value: 'usa'},
    {label: 'PAK', value: 'pak'},
    {label: 'Poland', value: 'poland'},
  ];

  const states = [
    {label: 'MUMBAI', value: 'Mumbai'},
    {label: 'GOA', value: 'goa'},
    {label: 'KARNATAKA', value: 'karnataka'},
    {label: 'NEW DELHI', value: 'newDelhi'},
  ];

  return (
    <View>
      <RegisterHeader header={'Registration'} isForgot={false} />

      <View>
        <Text style={styles.header}>Enter your Personal Info</Text>
        <Text style={styles.description}>
          Please enter the below details. We will send OTP to Email to verify.
        </Text>
      </View>

      <View style={styles.inputView}>
        <Text>First Name</Text>
        <TextInput
          placeholder="Enter Your First Name"
          placeholderTextColor="black"
          value={firstName}
          style={styles.inputField}
          onChangeText={setFirstName}
        />
        <View style={styles.horizontalLine}></View>

        <Text>Last Name</Text>
        <TextInput
          placeholder="Enter Your Last Name"
          placeholderTextColor="black"
          value={lastName}
          style={styles.inputField}
          onChangeText={setLastName}
        />
        <View style={styles.horizontalLine}></View>

        <Text>Email ID</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter Your Email ID"
          placeholderTextColor="black"
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.horizontalLine}></View>

        <Text>Country</Text>
        <Picker
          style={styles.inputField}
          selectedValue={country}
          onValueChange={(countryItem) => setCountry(countryItem)}>
          {countries.map((country, idx) => (
            <Picker.Item
              key={idx}
              label={country.label}
              value={country.value}
            />
          ))}
        </Picker>
        <View style={styles.horizontalLine}></View>

        <Text>State</Text>
        <Picker
          style={styles.inputField}
          selectedValue={state}
          onValueChange={(stateItem, index) => setState(stateItem)}>
          {states.map((state, idx) => (
            <Picker.Item label={state.label} value={state.value} key={idx} />
          ))}
        </Picker>
        <View style={styles.horizontalLine}></View>

        <Text>Zip Code</Text>
        <TextInput
          style={styles.inputField}
          placeholder="Enter your Zip Code"
          placeholderTextColor="black"
          value={zip}
          onChangeText={setZip}
        />
        <View style={styles.horizontalLine}></View>
      </View>

      <TouchableOpacity style={styles.continueContainer}>
        <View style={styles.continueView}>
          <Text style={styles.continueText}>Continue</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PersonalInfo;

const styles = StyleSheet.create({
  inputView: {
    paddingHorizontal: 30,
  },
  inputField: {
    fontSize: 17,
    color: 'Black',
    fontWeight: '400',
    marginBottom: 20,
    marginLeft: -3,
    marginTop: -3,
  },
  horizontalLine: {
    marginTop: -20,
    height: 2,
    backgroundColor: 'gray',
    width: '95%',
    marginVertical: 20,
  },
  header: {
    left: 55,
    fontSize: 26,
    marginTop: 22,
    color: 'black',
  },
  description: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 30,
    paddingHorizontal: 23,
    fontSize: 18,
    textAlign: 'center',
  },
  continueContainer: {
    top: '4%',
    left: '8%',
  },
  continueView: {
    width: '85%',
    height: 55,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: 'orange',
  },
  continueText: {
    color: 'white',
    fontSize: 20,
  },
});
