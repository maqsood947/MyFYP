import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 , backgroundColor: '#004e92'}}>
        <View style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 30 }}>
          {/* Header */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Ionicons name="arrow-back" size={24} color="white" onPress={() => navigation.goBack()} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Settings</Text>
            <View style={{ width: 24 }} />
          </View>

          {/* Settings Options */}
          <View style={{ marginTop: 40 }}>
            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <Ionicons name="notifications" size={24} color="#fff" />
                <Text style={styles.optionText}>Notifications</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <Ionicons name="lock-closed" size={24} color="#fff" />
                <Text style={styles.optionText}>Privacy & Security</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <Ionicons name="help-circle" size={24} color="#fff" />
                <Text style={styles.optionText}>Help & Support</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.optionRow}>
                <MaterialIcons name="language" size={24} color="#fff" />
                <Text style={styles.optionText}>Language</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#ffffff" />
            </TouchableOpacity>
          </View>
        </View>
      
    </SafeAreaView>
  );
};

const styles = {
  optionContainer: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    // borderBottomWidth: 1,
    // borderBottomColor: '#FFD700',
    
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    marginLeft: 10,
    color: '#ffffff',
    fontSize: 16,
  },
};

export default SettingScreen;
