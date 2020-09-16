import React from 'react'
import { View, Text, Image, Alert } from 'react-native'

import { LogoGopay } from "../../../assets/logo";
import { IconGopayPay, IconGopayNearby, IconGopayTopup, IconGopayMore } from "../../../assets/icon";
import PublicStyles from "../../../public/Styles";
import Colors from '../../../public/Colors';

import styles from "./styles";

import GopayButton from '../../base/GopayButton';

function GopayBox() {
    const onPressHandler = () => {
        Alert.alert('clicked')
    }


    return (
        <View style={{ ...PublicStyles.container }}>
            <View style={styles.box}>
                <View style={styles.boxHeader}>
                    <Image style={styles.titleIcon} source={LogoGopay} />
                    <Text style={{ ...styles.text, ...styles.title }}>Rp.50.375</Text>
                </View>
                <View style={styles.boxBody}>
                    <GopayButton icon={IconGopayPay} label="Pay" onPress={() => { onPressHandler() }} />
                    <GopayButton icon={IconGopayNearby} label="Nearby" onPress={() => { onPressHandler() }} />
                    <GopayButton icon={IconGopayTopup} label="Top Up" onPress={() => { onPressHandler() }} />
                    <GopayButton icon={IconGopayMore} label="More" onPress={() => { onPressHandler() }} />
                </View>
            </View>
        </View>
    )
}

export default GopayBox
