import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ modalIsVisible,setModalIsVisible ] = useState(false);
  const [courseGoals,setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }
  function addGoalHandler(enteredGoalText) {
    setCourseGoals( (currentCourseGoals) => 
      [...currentCourseGoals,
        { 
          text: enteredGoalText,
          // key: Math.random().toString()
          //If key is used then no need to write key extractor function 
          id: Math.random().toString()
        },
      ]);
    endAddGoalHandler();
  };

  function deleteGoalHandler(id){
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal)=> goal.id !== id);     
    })
  }

  return (
    <>
      <StatusBar style='auto'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='black' onPress={startAddGoalHandler} />
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} />
        <View style={styles.goalContainer}>
          {/* Loads all the items at once(Performance Issues) */}
          {/* <ScrollView>
            {courseGoals.map((goal,index) =>
              <View key={index} style={styles.goalItem}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>)}
          </ScrollView> */}
          {/* Only load visible items others are lazy loaded */}
          <FlatList data={courseGoals} renderItem={(iteamData) => {
            return <GoalItem text={iteamData.item.text} id={iteamData.item.id} onDeleteItem={deleteGoalHandler} /> 
            }} 
            keyExtractor={(item,index)=>{
              return item.id;
            }}
          />
        </View>
      </View>
    </>
    // <View style={styles.container}>
    //   <Text style={styles.dummyText}>Hello World!!</Text>
    //   <Text style={styles.dummyText}>Another piece of text</Text>
    //   <Button title='tap Me'/>
    // </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalContainer : {
    flex: 5,
  },

  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // dummyText: {
  //   'margin':16,
  //   'borderWidth':2, 
  //   'borderColor':'blue', 
  //   'padding':16
  // }
});
