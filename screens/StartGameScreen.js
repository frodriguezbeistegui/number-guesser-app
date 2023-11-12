import { TextInput, View, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import { PrimaryButton } from '../components'
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
        <View style={styles.inputContainer} >
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
        </View>    
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        padding: 16,
        backgroundColor: Colors.primary800,
        marginHorizontal: 24,
        borderRadius: 8,
        // android
        elevation: 4,
        // ios
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
         },
        shadowRadius: 6, 
        shadowOpacity: 0.25
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