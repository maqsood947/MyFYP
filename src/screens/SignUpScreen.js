import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { addUser } from './db'; // Import your addUser function
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);  // Handle image upload if needed
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Store image for use in db
    }
  };

  const handleSignup = () => {
    if (username && password) {
      addUser(username, password, profileImage);
      navigation.navigate('LoginScreen');  // Navigate to login after signup
    } else {
      setErrorMessage('Please fill in all fields');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="#ffffff" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Username"
        placeholderTextColor="#E7EAE5"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#E7EAE5"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>Pick Profile Image</Text>
      </TouchableOpacity>

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.signupText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#004e92',
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#004e92',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    color: '#ffffff',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imagePicker: {
    backgroundColor: '#007ACC',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#007ACC',
    borderRadius: 5,
    paddingVertical: 10,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignupScreen;
