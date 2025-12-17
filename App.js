import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function closeAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(current => [
      ...current,
      { text: enteredGoalText, id: Math.random().toString() }
    ]);
    setModalIsVisible(false);
  }

  function deleteGoalHandler(id) {
    setCourseGoals(current => current.filter(item => item.id !== id));
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler} />
        <GoalInput isVisible={modalIsVisible} onAddGoal={addGoalHandler} onCloseGoal={closeAddGoalHandler} />
        <View style={styles.goalContainer}>
          <FlatList data={courseGoals} keyboardDismissMode='on-drag' renderItem={(itemData) => {
            return (
              <GoalItem onDeleteGoal={deleteGoalHandler} text={itemData.item.text} id={itemData.item.id} />
            )
          }}
            keyExtractor={(item) => {
              return item.id;
            }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },
});
