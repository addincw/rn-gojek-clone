import { StyleSheet } from 'react-native'

import Colors from '../../../public/Colors';

const styles = StyleSheet.create({
    iconGroup: {
        width: "25%",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 7
    },
    icon: {
        borderWidth: 1,
        borderColor: Colors.lighten,
        borderRadius: 15,
        padding: 5
    },
    iconLabel: {
        marginTop: 5
    },
    text: {
        textTransform: "uppercase",
        color: Colors.dark,
        fontWeight: "bold",
        fontSize: 12
    }
})

export default styles
