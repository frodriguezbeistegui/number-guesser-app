import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function IntructionText ({ children, style }) {
    return <Text style={[styles.intructionText, style]} >{ children }</Text>
}

const styles = StyleSheet.create({
    intructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
})

export default IntructionText