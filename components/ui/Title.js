import { StyleSheet, Text } from "react-native"
import Colors from '../../constants/colors'

export default function Title({ children, style }) {
    return <Text style={{ ...styles.title, ...style }} >{ children }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})