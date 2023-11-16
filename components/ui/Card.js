import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/colors'

function Card({children}) {

    return (
        <View style={styles.card} >{children}</View>
    )
}

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 36,
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
})

export default Card