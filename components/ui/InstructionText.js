import { Text, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

function IntructionText ({ children }) {
    return <Text style={styles.intructionText} >{ children }</Text>
}

const styles = StyleSheet.create({
    intructionText: {
        color: Colors.accent500,
        fontSize: 24
    },
})

export default IntructionText