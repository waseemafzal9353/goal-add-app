import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setGoalsList((currentGoal) => [
      ...currentGoal,
      { key: Math.random().toString(), value: goalTitle },
    ]);
  };

  const removeItem = (goalId) => {
    setGoalsList((currentGoal) => {
      return currentGoal.filter((goal) => goal.key !== goalId);
    });
    setIsAddMode(false);
  };
  const cancelAddModeHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View style={styles.screen}>
      <Button title="Add Goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelAddModeHandler}/>
      <FlatList
        data={goalsList}
        renderItem={(itemData) => (
          <GoalItem
            key={itemData.item.key}
            onDelete={removeItem}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
