import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(probs) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={probs.onDeleteItem.bind(this, probs.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalItemText}>{probs.text}</Text>
      </Pressable>
    </View>
  );
}
export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {    
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalItemText: {
    padding: 8,
    color: "white",
  },
  pressedItem:{
    opacity:0.5
  }
});
