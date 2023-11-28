import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(probs) {
  const [enteredText, setEnterText] = useState("");

  function goalInputHandler(enteredText) {
    setEnterText(enteredText);
  }

  function addGoalHandler() {
    probs.onAddGoal(enteredText);
    setEnterText("");
  }

  return (
    <Modal visible={probs.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/imges/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="your course goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
          value={enteredText}
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color={'#5e0acc'}></Button>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={probs.onCancel} color={'#f31282'}></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  image:{
    width:100,
    height:100,
    margin:20
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    borderRadius:6,
    color:'#120438',
    width: "100%",
    padding: 8,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
    marginTop: 10,
  },
});
