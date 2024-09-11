import { View, Text } from "react-native"
import { StyleSheet } from "react-native";


 const SummaryContent=()=>{
    return(

<View style={styles.summary}>
<View style={styles.summarycontent}>
    <View style={styles.summaryItem}>
        <Text style={styles.summaryText}>Income</Text>
        <Text style={styles.summaryAmount}>0.00</Text>
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
    )
};



const styles = StyleSheet.create({
   
    
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


});
export default SummaryContent;

