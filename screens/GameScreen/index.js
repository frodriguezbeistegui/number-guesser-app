import { useEffect, useMemo, useState } from "react"
import { View, StyleSheet, Alert} from "react-native"
import { Card, PrimaryButton, Title, InstructionText} from "../../components"
import { generateRandomBetween } from "./utils"
import NumberContainer from "../../components/game/NumberContainer"
import { Ionicons } from '@expo/vector-icons';

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = useMemo(() => generateRandomBetween({
        min: minBoundary,
        max: maxBoundary,
        exclude: userNumber,
    }), [userNumber]);

    const [ currentGuess, setCurrentGuess ] = useState(initialGuess)

    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHanlder (direction) {
        console.log(direction)
        if(( direction === 'lower' && currentGuess < userNumber)
         ||( direction === 'higher' && currentGuess > userNumber)){
            Alert.alert("Don't Lie!", 'You know that is wrong...', [
                {text: 'Sorry!', style: 'cancel'}
            ])
            return;
         }


        if (direction === 'lower' ) {
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
            <Card>
                <InstructionText style={styles.instructionText} >Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={() => nextGuessHanlder('higher')}>
                            <Ionicons name="md-add" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer} >
                        <PrimaryButton onPress={() => nextGuessHanlder('lower')}>
                            <Ionicons name="md-remove" size={24} color='white'/>
                        </PrimaryButton>
                    </View>
                </View>
               
            </Card>
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
    instructionText: {
        marginBottom: 12,
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
})

export default GameScreen