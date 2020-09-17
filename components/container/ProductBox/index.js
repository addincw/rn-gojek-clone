import React from 'react'
import { View, Text, Image, Alert, ScrollView, TouchableOpacity } from 'react-native'

import { LogoGofood } from '../../../assets/logo';
import PublicStyles from "../../../public/Styles";

import styles from "./styles";

import GopayButton from '../../base/GopayButton';
import ImageOverlay from '../../base/ImageOverlay';

function ProductBox({ watermark, title }) {
    const DummyImage1 = require("../../../assets/dummy/go-food-banka.jpg");
    const DummyImage2 = require("../../../assets/dummy/go-food-gm.jpg");
    const DummyImage3 = require("../../../assets/dummy/go-food-kfc.jpg");
    const DummyImage4 = require("../../../assets/dummy/go-food-orins.jpg");
    const DummyImage5 = require("../../../assets/dummy/go-food-pak-boss.jpg");

    const onPressHandler = () => {
        Alert.alert('clicked')
    }


    return (
        <View style={styles.box}>
            <View style={PublicStyles.container}>
                <View style={styles.watermark} >
                    <Image source={LogoGofood} />
                </View>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Nearby Restaurants</Text>
                    <TouchableOpacity>
                        <Text style={styles.headerLink}>See All</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView
                contentContainerStyle={styles.swiper}
                showsHorizontalScrollIndicator={false}
                horizontal>
                <TouchableOpacity>
                    <View style={styles.product}>
                        <ImageOverlay style={styles.productImage} source={DummyImage1} height={120} />
                        <Text style={styles.productName}>Roti Bangka</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.product}>
                        <ImageOverlay style={styles.productImage} source={DummyImage2} height={120} />
                        <Text style={styles.productName}>Mie Gajah Mada</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.product}>
                        <ImageOverlay style={styles.productImage} source={DummyImage3} height={120} />
                        <Text style={styles.productName}>KFC</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.product}>
                        <ImageOverlay style={styles.productImage} source={DummyImage4} height={120} />
                        <Text style={styles.productName}>Martabak Telor</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.product}>
                        <ImageOverlay style={styles.productImage} source={DummyImage5} height={120} />
                        <Text style={styles.productName}>Ayam Geprek Pak Boss</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ProductBox
