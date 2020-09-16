import React from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'

import Colors from '../../../public/Colors';

import styles from "./styles";

function ServiceButton({ label, icon, onPress }) {
    return (
        <TouchableOpacity style={styles.iconGroup} onPress={onPress}>
            <View style={{ alignItems: "center" }}>
                <View style={styles.icon}>
                    <Image source={icon} />
                </View>
                <Text style={{ ...styles.text, ...styles.iconLabel }}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ServiceButton
