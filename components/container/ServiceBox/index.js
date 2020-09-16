import React from 'react'
import { View, Text, Image, Alert } from 'react-native'

import {
    IconGomore,
    IconGoride,
    IconGocar,
    IconGobluebird,
    IconGosend,
    IconGodeals,
    IconGopulsa,
    IconGofood
} from "../../../assets/icon";

import styles from "./styles";

import ServiceButton from '../../base/ServiceButton';

function ServiceBox() {
    const onPressHandler = () => {
        Alert.alert('clicked')
    }


    return (
        <View style={{ ...styles.box }}>
            <ServiceButton icon={IconGoride} label="Go Ride" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGocar} label="Go Car" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGobluebird} label="Go Bluebird" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGosend} label="Go Send" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGodeals} label="Go Deals" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGopulsa} label="Go Pulsa" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGofood} label="Go Food" onPress={() => { onPressHandler() }} />
            <ServiceButton icon={IconGomore} label="Go more" onPress={() => { onPressHandler() }} />
        </View>
    )
}

export default ServiceBox
