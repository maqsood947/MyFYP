import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { addUser } from "../firebase"; 
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const [email, setEmail] = useState(""); // Using email for Firebase Auth
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // Full Name
  const [profileImage, setProfileImage] = useState(null); // Handle image upload
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();

  // Image picker for profile picture
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Store image URI
    }
  };

  const handleSignup = async () => {
    try {
      if (email && password && displayName) {
        // Pass the displayName and profileImage to addUser
        await addUser(email, password, profileImage, displayName);
        navigation.navigate("LoginScreen"); // Navigate to login after successful signup
      } else {
        setErrorMessage("Please fill in all fields");
      }
    } catch (error) {
      setErrorMessage(error.message); // Display Firebase error messages
    }
  };

  console.log("displayName",displayName)
  console.log("profileImage",profileImage)
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="#ffffff" onPress={() => navigation.goBack()} />
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        placeholder="Full Name"
        placeholderTextColor="#E7EAE5"
        value={displayName}
        onChangeText={setDisplayName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        placeholderTextColor="#E7EAE5"
        value={email}
        onChangeText={setEmail}
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

      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.signupText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
  container: {
    flex: 1,
    backgroundColor: '#004e92',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#E7EAE5',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  imagePicker: {
    marginBottom: 15,
  },
  imagePickerText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#007ACC',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  signupText: {
    color: '#ffffff',
    marginTop: 20,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default SignupScreen;
