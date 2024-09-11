import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { loginUser } from './db'; // Import your login function
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const user = await loginUser(username, password);  // Fetch user
      console.log('Login successful:', user);
      navigation.navigate('HomeScreen');  // Navigate to home on successful login
    } catch (error) {
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="#ffffff" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Login</Text>

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

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.signupText}>Don't have an account? Sign up</Text>
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
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#007ACC',
    borderRadius: 5,
    paddingVertical: 10,
    marginBottom: 10,
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

export default LoginScreen;
