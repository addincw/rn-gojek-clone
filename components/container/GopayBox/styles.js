import { StyleSheet } from 'react-native'

import Colors from '../../../public/Colors';

const styles = StyleSheet.create({
    box: {
        paddingVertical: 5,
    },
    boxHeader: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: Colors.darkBlue,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    boxBody: {
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: Colors.blue,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    title: {
        fontWeight: "bold"
    },
    iconGroup: {
        alignItems: "center"
    },
    iconLabel: {
        marginTop: 5
    },
    text: {
        color: Colors.superLight
    }
})

export default styles
