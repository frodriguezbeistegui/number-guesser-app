import { View, Text, StyleSheet, Pressable } from 'react-native'
import Colors from '../constants/colors'

function PrimaryButton ({ children, onPress = ()=>{} }) {
    function handlePress () {
       onPress()
    }

    return (
        <View style={ styles.buttonOuterContainer } >
            <Pressable 
                onPress={ handlePress } 
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
                android_ripple={{ color: Colors.primary600 }}
            >
                <Text style={ styles.buttonText } >{ children }</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,

    }
})

export default PrimaryButton