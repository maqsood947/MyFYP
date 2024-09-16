import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { auth } from "../firebase"; // Import Firebase auth

const ProfileScreen = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [user, setUser] = useState(null); // State to hold user details
  const [email, setemail] = useState(null); // State to hold user details

  // Fetch the current user from Firebase on component mount
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        setImage(user.photoURL); // Set profile image if available
        setemail(user.email); // Set profile image if available
      } else {
        setUser(null); // No user logged in
      }
    });

    return unsubscribe; // Cleanup the listener when the component unmounts
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  console.log("user", auth);
  console.log("email", email);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerview}>
        <View style={styles.myprofile}>
          <Ionicons
            name="arrow-back"
            size={24}
            color="#ffffff"
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.profiletext}>My Profile</Text>

          <View style={{ width: 24 }} />
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          {image ? (
            <View style={{ position: "relative", alignItems: "center" }}>
              <Image
                source={{ uri: image }}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
              <TouchableOpacity onPress={pickImage} style={styles.imgpicker}>
                <MaterialIcons name="edit" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ position: "relative", alignItems: "center" }}>
              <Image
                source={require("../../assets/MyOwn.jpg")}
                style={{ width: 120, height: 120, borderRadius: 60 }}
              />
              <TouchableOpacity onPress={pickImage} style={styles.imgpicker}>
                <MaterialIcons name="edit" size={20} color="white" />
              </TouchableOpacity>
            </View>
          )}

          {user ? (
            <>
              <Text style={styles.username}>
                {user.displayName || "Kayna Alisa"}
              </Text>
              <Text style={styles.email}>
                {user.email || "kaynaalisaa@gmail.com"}
              </Text>
            </>
          ) : (
            <Text style={styles.loading}>Loading user details...</Text>
          )}
        </View>

        {/* Menu Options */}
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity style={styles.profileMenu}>
            <View style={styles.ProfileView}>
              <MaterialIcons name="edit" size={24} color="#fff" />
              <Text style={styles.menuText}>Edit Profile</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.profileMenu}>
            <View style={styles.ProfileView}>
              <Ionicons name="lock-closed" size={24} color="#fff" />
              <Text style={styles.menuText}>Change Password</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          <View style={styles.middleLine} />

          <TouchableOpacity
            style={styles.profileMenu}
            onPress={() => navigation.navigate("Settings")}>
            <View style={styles.ProfileView}>
              <Ionicons name="settings" size={24} color="#fff" />
              <Text style={styles.menuText}>Settings</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ffffff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.profileMenu}
            onPress={() => auth.signOut()}>
            <View style={styles.ProfileView}>
              <MaterialIcons name="logout" size={24} color="#FF3B30" />
              <Text style={styles.logoutText}>Logout</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#FF3B30" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004e92",
  },
  containerview: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 50,
  },
  myprofile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profiletext: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  imgpicker: {
    position: "absolute",
    bottom: -10,
    right: -10,
    backgroundColor: "#007ACC",
    borderRadius: 50,
    padding: 5,
  },
  username: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  email: {
    color: "#ffffff",
    marginTop: 5,
  },
  profileMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
  },
  ProfileView: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuText: {
    color: "#ffffff",
    marginLeft: 10,
  },
  logoutText: {
    color: "#FF3B30",
    marginLeft: 10,
  },
  middleLine: {
    height: 1,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  loading: {
    color: "#ffffff",
    marginTop: 10,
  },
});

export default ProfileScreen;
