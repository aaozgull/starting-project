import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function cancelModalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredText) {
    console.log(enteredText);
    /*  setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredText,
    ]); */
    // if we store value as objet with key value so that flatList usse its keys
    /*     setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, key: Math.random.toString() },
    ]);
 */
    // If object does not have key probs but instead of ids
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    cancelModalHandler();
  }
  function deleteGoalHandler(id) {
    console.log("onDeleteHandler " + id);
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal) => goal.id !== id);
    });
  }
  return (
    <>
    <StatusBar style='light' />
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#a065ec"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={modalIsVisible}
        onCancel={cancelModalHandler}
      />
      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="your course goal"
          style={styles.inputText}
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="Add Goal" onPress={addGoalHandler}></Button>
      </View> */}
      <View style={styles.goalContainer}>
        <Text>List of Goals...</Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}
              />
            );
          }}
          alwaysBounceVertical={false}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
        {/*   <ScrollView alwaysBounceVertical={false}>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },

  goalContainer: {
    flex: 5,
  },
});
