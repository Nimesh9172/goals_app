import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Vibration,
  Button,
} from "react-native";
import { StatusBar } from 'expo-status-bar';


import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
interface GoalText {
  text: string;
  id: string;
}

const App = () => {
  const [goals, setGoals] = useState<GoalText[]>([]);
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  const handleGoalAdd = (enteredText: string) => {
    const trimmedText = enteredText.trim();
    if (trimmedText.length > 0) {
      setGoals((prevState) => [
        ...prevState,
        { text: enteredText, id: Math.random().toString() },
      ]);
    }
  };

  const deleteGoalHandler = (itemId: string) => {
    const filterGoals = goals.filter((item) => item.id !== itemId);
    setGoals(filterGoals);
    Vibration.vibrate(20);
  };

  const openModalHandler = () => {
    setModalIsVisible(true);
  };

  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
    <StatusBar style="light"/>
      <View style={styles.appContainer}>
        {modalIsVisible ? (
          <GoalInput
            addGoal={handleGoalAdd}
            modalVisible={modalIsVisible}
            closeModal={closeModalHandler}
          />
        ) : (
          <View style={{ paddingVertical: 10 }}>
            <Button
              title="Add Goal..."
              color="#7A7AE6"
              onPress={openModalHandler}
            />
          </View>
        )}

        <View style={styles.goalContainer}>
          <FlatList
            data={goals}
            renderItem={({ item }) => (
              <GoalItem item={item} deleteGoal={deleteGoalHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
  },
  goalContainer: {
    flex: 8,
  },
});

export default App;
