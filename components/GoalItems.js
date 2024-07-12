import { View , StyleSheet, TouchableOpacity} from "react-native"


const GoalItem = props => {

    return (
   <TouchableOpacity onPress={props.onDelete.bind(this, props.key)}>
         <View style={styles.listStyles}>
        {" "}
        <Text>{itemData.item.value}</Text>
      </View>
   </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listStyles: {
        padding: 10,
        margin: 10,
        borderColor: "black",
        backgroundColor: "#ccc",
        borderWidth: 1,
      },
});

export default GoalItem