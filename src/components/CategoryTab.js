import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const CategoryTab = ({item}) => {
    // console.log(item);
    return(
    <View style={styles.TabContainer}>
<TouchableOpacity style={styles.TabContent}>
    <Text>{item.icon}</Text>
    <Text style={{color:"#fff", fontSize:16, fontWeight:'bold'}}>{item.title}</Text>
</TouchableOpacity>
</View>

);
};

const styles = StyleSheet.create({
TabContainer: {
   
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
},
TabContent: {
    gap:20 ,
    backgroundColor: '#004e92',
    alignItems: "center",
    paddingHorizontal: 30,
    flex: 2,
    flexDirection: "row",
    elevation: 10,
    width: 75,
    height: 75,
    borderWidth: 0.5,             // Thickness of the border
    borderColor: 'white',     // Color of the border (e.g., Tomato color)
    borderRadius: 10,

},
});
export default CategoryTab;
