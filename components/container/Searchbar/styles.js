import { StyleSheet } from 'react-native'

import Colors from '../../../public/Colors';

const styles = StyleSheet.create({
    search: {
        backgroundColor: Colors.superLight,
        flexDirection: "row",
        paddingVertical: 5
    },
    searchIcon: {
        position: "absolute",
        top: 8,
        left: 10,
    },
    searchInputGroup: {
        position: "relative",
        flex: 1,
        marginRight: 5
    },
    searchInput: {
        borderWidth: 1,
        borderColor: Colors.light,
        borderRadius: 20,
        paddingVertical: 5,
        paddingLeft: 39,
        paddingRight: 15,
    },
    searchPromo: {
        width: 35,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default styles
