import { View, StyleSheet, Image, Text } from "react-native"
import Colors from "../constants/colors"
import { Title } from "../components"


function GameOverScreen () {
    console.log('game over screen')
    
    return (
        <View style={styles.rootContainer} >
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image source={require(`../assets/images/success.png`)} style={styles.image} />
            </View>
            <Text>Your pohone needed X rounds to guess the number Y.</Text>
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
    }
})

export default GameOverScreen