import { View, StyleSheet, Image, Text } from "react-native"
import Colors from "../constants/colors"
import { PrimaryButton, Title } from "../components"


function GameOverScreen () {
    console.log('game over screen')
    
    return (
        <View style={styles.rootContainer} >
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require(`../assets/images/success.png`)} style={styles.image} />
            </View>
            <Text style={ styles.summaryText }>
                Your pohone needed <Text style={styles.highlight}>X</Text> rounds to 
                guess the number <Text style={styles.highlight}>Y</Text>.
            </Text>
            <PrimaryButton>Start New Game</PrimaryButton>
        </View>
    )
};

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: "center",

    },
    imageContainer: {
        borderRadius: 200,
        height: 400,
        width: 400,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})

export default GameOverScreen