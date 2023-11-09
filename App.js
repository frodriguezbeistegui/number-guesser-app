import { useState } from 'react'
import { ImageBackground, StyleSheet } from 'react-native';
import { GameScreen, StartGameScreen } from './screens';
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [ userNumber, setUserNumber ] = useState(null)

  const startGameHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
  }

  const screen = userNumber ? <GameScreen /> : <StartGameScreen onPickNumber={startGameHandler} /> ;

  return (
      <>
        <StatusBar style={'light'} />
          <LinearGradient 
            style={ styles.rootScreen }  
            colors={[ '#3b021f', '#cca938']}
          >
            <ImageBackground 
              source={require('./assets/images/background.png')} 
              style={styles.rootScreen}
              resizeMode='cover'
              imageStyle={styles.backgroundImage}
            >
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
