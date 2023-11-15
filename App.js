import { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native';
import { GameOverScreen, GameScreen, StartGameScreen } from './screens';
import { LinearGradient } from 'expo-linear-gradient'
import { SafeAreaView } from "react-native-safe-area-context"
import { StatusBar } from 'expo-status-bar';
import Colors from './constants/colors';

export default function App() {
  const [ userNumber, setUserNumber ] = useState(null)
  const [ gameIsOver, setGameIsOver ] = useState(true)

  const startGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false)
  }

  function gameOverHandler () {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={startGameHandler} /> ;
  
  if(userNumber) {
    screen =  <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  

  return (
      <>
        <StatusBar style={'light'} />
          <LinearGradient 
            style={ styles.rootScreen }  
            colors={[ Colors.primary700, Colors.accent500]}
          >
            <ImageBackground 
              source={require('./assets/images/background.png')} 
              style={styles.rootScreen}
              resizeMode='cover'
              imageStyle={styles.backgroundImage}
            >
           <SafeAreaView />
           {screen}
          </ImageBackground>
        </LinearGradient>
      </>
  );
}

const styles = StyleSheet.create({
 rootScreen: {
  flex: 1,
 },
 backgroundImage: {
  opacity: 0.15
 }

});
