import { Text, View, StyleSheet} from "react-native"
import { Title } from "../components"

function GameScreen() {
    
    return (
        <View style={styles.screen}>
            <Title>Opponennt's Gess</Title>
            <View>
                <Text>Higher or Lower?</Text>
                {/*
                 +
                - 
                */}
            </View>
            <View>
                {/* Log Rounds */}
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