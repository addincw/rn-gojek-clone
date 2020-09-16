import { StyleSheet } from 'react-native'

import Colors from '../../../public/Colors';

const styles = StyleSheet.create({
    box: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingVertical: 5,
    },
    text: {
        color: Colors.light
    }
})

export default styles
