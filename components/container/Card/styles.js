import { StyleSheet } from 'react-native'

import Colors from '../../../public/Colors';

const styles = StyleSheet.create({
    card: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: Colors.lighten,
    },
    thumbnail: {
        position: "relative",
        height: 200
    },
    thumbnailBackground: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: 5,
    },
    thumbnailOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: 5,
        backgroundColor: Colors.dark,
        opacity: 0.6
    },
    thumbnailWatermark: {
        height: 15,
        width: 60,
        resizeMode: "contain"
    },
    content: {
        paddingVertical: 10
    },
    title: {
        fontSize: 18,
        color: Colors.dark,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
        color: Colors.light
    },
    actions: {
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    action: {
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 15,
        backgroundColor: Colors.primary
    },
    actionText: {
        color: Colors.superLight,
        fontWeight: "bold",
        fontSize: 12,
        textTransform: "uppercase",
        alignSelf: "center"
    },
})

export default styles
