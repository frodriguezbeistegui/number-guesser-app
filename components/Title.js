import { StyleSheet, Text } from "react-native"

export default function Title({ children, style }) {
    return <Text style={{ ...styles.title, ...style }} >{ children }</Text>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12
    }
})