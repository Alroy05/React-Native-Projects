import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer'

function generateRandomBetween(min,max,exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return generateRandomBetween(min,max,exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({userNumber}) {
  const initialGuess = generateRandomBetween(1,100,userNumber)
  const [ currentGuess, setCurrentGuess ] = useState(initialGuess);

  return(
      <View style={styles.screen}>
        <Title>Opponents Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <View>
          <Text>Higher or Lower?</Text>
          {/* + - */}
        </View>
        {/* <View>Log Rounds</View> */}
      </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40
  },
})

export default GameScreen;