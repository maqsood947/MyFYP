import { StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';
import { View, Text } from 'react-native';
import { Appbar, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import CategoryTab from '../components/CategoryTab';
import { Directions, ScrollView } from 'react-native-gesture-handler';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { expensecategoryData, incomecategoryData } from '../../categoryData';
import { useState } from 'react';







export default function CategoriesScreen() {
    const navigation = useNavigation();
    const [catagory, setCatagory] = useState(0);



    return (

        //    <ScrollView>
        <>
            <View style={styles.container}>
                <Appbar.Header style={styles.appBar}>
                    <Appbar.BackAction
                        onPress={() => {
                            navigation.navigate('Home'); // Make sure 'Home' is correctly defined


                        }}
                        color='white'
                    />
                    <Appbar.Content title="Categories" titleStyle={{ color: "white", fontWeight: "500" }} />


                </Appbar.Header>
                <View style={styles.categoryType}>
                    <TouchableOpacity onPress={() => setCatagory(1)}
                     style={[
                        styles.typebtn, 
                        catagory === 1 && styles.activeTypebtn // Apply additional style if selected
                      ]}><Text style={{color: "#fff", fontSize: 16, fontWeight:'600'}}>Income</Text>
                    </TouchableOpacity>





                    <TouchableOpacity onPress={() => setCatagory(0)}  style={[
                        styles.typebtn, 
                        catagory === 0 && styles.activeTypebtn // Apply additional style if selected
                      ]}><Text  style={{color: "#fff", fontSize: 16, fontWeight:'600'}}>Expense</Text>
                    </TouchableOpacity>
                </View>

                {
                    catagory == 0 && (
                        <FlatList data={expensecategoryData}

                            renderItem={({ item }) => {
                                return (
                                    <CategoryTab item={item} />
                                )
                            }}

                        />

                    )

                }
                {
                    catagory == 1 && (
                        <FlatList data={incomecategoryData}

                            renderItem={({ item }) => {
                                return (
                                    <CategoryTab item={item} />
                                )
                            }}

                        />

                    )
                }



            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#004e92',
        padding: 0,
        margin: 0
    },




    appBar: {

        backgroundColor: '#004e92',
        paddingHorizontal: 10,
        elevation: 10,

    },
    categoryType: {
        marginTop: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        backgroundColor: '#004e92',
        paddingBottom: 10,
        borderBottomColor: '#fff',





    },
    typebtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 80,
        borderColor: 'transparent', // Default no border
        borderWidth: 1,
        borderRadius: 10,
      },
    

    activeTypebtn: {
        borderColor: '#fff', // Highlight the selected button with a white border
    },


    summarycontent: {
        backgroundColor: '#004e92',
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 10,
        flex: 2,
        flexDirection: "row",
        elevation: 10,
        width: 75,
        height: 75,
        borderWidth: 0.5,             // Thickness of the border
        borderColor: 'white',     // Color of the border (e.g., Tomato color)
        borderRadius: 10,

    },


    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    summaryItem: {
        alignItems: 'center',
    },
    summaryText: {
        color: 'white',
        fontSize: 18,
    },
    summaryAmount: {
        color: 'white',
        fontSize: 16,
        fontWeight: "300",
    },
    addItemContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addItemText: {
        color: 'white',
        fontSize: 15,
        fontWeight: "200"
    },
    addButton: {
        position: 'absolute',
        right: 20,
        bottom: 35,
        width: 60,
        height: 60,
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 1.5,
        backgroundColor: '#004e92',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: 'white',
        fontSize: 36,
    },
    bottom: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
});
