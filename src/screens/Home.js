import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Appbar, Avatar, Modal, TextInput, Button } from "react-native-paper";
import SummaryContent from "../components/SummaryContent";
import AddItemsModal from "../components/AddItemsModal";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { onValue, ref } from "firebase/database";
import { auth } from "../firebase"

const HomeScreen = ({ navigation }) => {
  // const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [records, setRecords] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    const dbRef = ref(db, "items");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      let records = [];

      snapshot.forEach((childSnapshot) => {
        let keyname = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ key: keyname, data: data });
      });

      setRecords(records);
    });
    

    // Cleanup the listener on component unmount
    return () => unsubscribe();
  }, [db]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
       
        setImage(user.photoURL); 
      } else {
        setUser(null); 
      }
    });

    return unsubscribe; 
  }, []);

  console.log("records", records);
  console.log("image", image);

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Action
          icon="menu"
          onPress={() => navigation.getParent("LeftDrawer").openDrawer()}
          color="white"
        />
        <Appbar.Content
          title="BudgetBuddy"
          titleStyle={{ color: "white", fontWeight: "bold" }}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Avatar.Image
            size={40}
            source={{
              uri: "https://devlopr.netlify.app/assets/img/profile.png",
            }}
          />
        </TouchableOpacity>
      </Appbar.Header>
     


      <SummaryContent />
      {records.map((vale) => (
  <View key={vale.key} style={styles.summary}>
    <View style={styles.summarycontent}>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryText}>date</Text>
        <Text style={styles.summaryAmount}>{vale.data.account}</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryText}>Expenses</Text>
        <Text style={styles.summaryAmount}>0.00</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.summaryText}>Total</Text>
        <Text style={styles.summaryAmount}>0.00</Text>
      </View>
    </View>
  </View>
))}

      <View style={styles.addItemContainer}>
        <Text style={styles.addItemText}>Add Items</Text>
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <AddItemsModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004e92",
    padding: 0,
    margin: 0,
  },
  itemscont: {
    borderColor: "red",
    borderWidth: 10,
  },
  itmes: {
    color: "red",
  },
  appBar: {
    backgroundColor: "#004e92",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    elevation: 20,
  },
  summarycontent: {
    backgroundColor: "#004e92",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    flex: 2,
    flexDirection: "row",
    elevation: 10,
    width: 75,
    height: 75,
    borderWidth: 0.5, // Thickness of the border
    borderColor: "white", // Color of the border (e.g., Tomato color)
    borderRadius: 10,
  },

  summary: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  summaryItem: {
    alignItems: "center",
  },
  summaryText: {
    color: "white",
    fontSize: 18,
  },
  summaryAmount: {
    color: "white",
    fontSize: 16,
    fontWeight: "300",
  },
  addItemContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addItemText: {
    color: "white",
    fontSize: 15,
    fontWeight: "200",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 35,
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "white",
    borderWidth: 1.5,
    backgroundColor: "#004e92",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: 36,
  },
  bottom: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "white",
    justifyContent: "space-around",
  },
});

export default HomeScreen;
