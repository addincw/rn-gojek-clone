import { StyleSheet, StatusBar, Platform } from "react-native";

const Styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.superLight,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    container: {
        paddingHorizontal: 15
    }
})

export default Styles