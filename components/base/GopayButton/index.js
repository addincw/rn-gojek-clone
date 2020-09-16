import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import Colors from '../../../public/Colors';

import styles from "./styles";

function GopayButton({ label, icon, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.iconGroup}>
                <Image style={styles.icon} source={icon} />
                <Text style={{ ...styles.text, ...styles.iconLabel }}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default GopayButton
