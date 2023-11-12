import { useState } from "react"
import { Text, View, StyleSheet} from "react-native"
import { PrimaryButton, Title } from "../../components"
import { generateRandomBetween } from "./utils"
import NumberContainer from "../../components/game/NumberContainer"

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber }) {

    const initialGuess = generateRandomBetween({
        min: minBoundary,
        max: maxBoundary,
        exclude: userNumber,
    })
    
    const [ currentGuess, setCurrentGuess ] = useState(initialGuess)

    function nextGuessHanlder (direction) {
        console.log(direction)
        if (direction === 'lower') {
            maxBoundary = currentGuess
            
        } else {
            minBoundary = currentGuess
        }

        const newRandomNumber = generateRandomBetween({
            min: minBoundary,
            max: maxBoundary,
            exclude: currentGuess,
        })

        setCurrentGuess(newRandomNumber)
    }
    
    return (
        <View style={styles.screen}>
            <Title>Opponennt's Gess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View style={styles.butttonsContainer}>
                    <PrimaryButton onPress={() => nextGuessHanlder('higher')}>+</PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHanlder('lower')}>-</PrimaryButton>
                </View>
               
            </View>
            <View>
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
        marginTop: 50
    },
})

export default GameScreen