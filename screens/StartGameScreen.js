import { TextInput, View, StyleSheet, Alert, Text } from 'react-native'
import { useState } from 'react'
import { Card, PrimaryButton, Title, InstructionText } from '../components'
import Colors from '../constants/colors'


function StartGameScreen ({ onPickNumber }) {
    const [ enteredNumber, setEnteredNumber ] = useState('')

    function numberInputHandler (enteredText) {
        setEnteredNumber(enteredText)
    }

    function resetInputHandler () {{
        setEnteredNumber('')
    }}

    function confirmInputHandler () {
        const chosenNumber = parseInt(enteredNumber)
        if( isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
            // show alert ...
            Alert.alert(
                'Invalid number!',
                'Number has to be a number between 1 and 99.',
                [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
            )
            return
        }
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess my number</Title>
            <Card>
                <InstructionText>Enter a number</InstructionText>
                <TextInput 
                    style={styles.numberInput} 
                    maxLength={2} 
                    keyboardType={'number-pad'} 
                    autoCapitalize='none'
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer} >
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={resetInputHandler}
                        >Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton
                            onPress={confirmInputHandler}
                        >Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>    
        </View>
        
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },

    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})

export default StartGameScreen