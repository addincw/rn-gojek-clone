import { StyleSheet } from 'react-native'

import Colors from '../../../public/Colors';

const styles = StyleSheet.create({
    box: {
        paddingVertical: 5,
    },
    watermark: {
        marginBottom: 5,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 15
    },
    headerTitle: {
        fontWeight: "bold",
        color: Colors.dark
    },
    headerLink: {
        fontWeight: "bold",
        color: Colors.primary
    },
    swiper: {
        paddingLeft: 15,
        paddingVertical: 5
    },
    product: {
        width: 120,
        marginRight: 10
    },
    productImage: {
        marginBottom: 5
    },
    productName: {
        fontWeight: "bold",
        color: Colors.dark,
        marginBottom: 5
    }
})

export default styles
