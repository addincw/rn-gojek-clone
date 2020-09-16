import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react'
import { View, Text, SafeAreaView, TextInput, TouchableWithoutFeedback, StyleSheet, Keyboard, ScrollView } from 'react-native'

import PublicStyles from "../public/Styles";
import Colors from '../public/Colors';

import Searchbar from '../components/container/Searchbar';
import GopayBox from '../components/container/GopayBox';
import ServiceBox from '../components/container/ServiceBox';
import Card from '../components/container/Card';
import Divider from '../components/base/Divider';


function HomeScreen() {
    const DummyImage1 = require("../assets/dummy/amien-rais.jpg");
    const DummyImage2 = require("../assets/dummy/sepak-bola.jpg");

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ backgroundColor: "red" }}>
                <SafeAreaView style={PublicStyles.safeArea}>
                    <Searchbar />

                    <GopayBox />

                    <ServiceBox />

                    <Divider />

                    <Card image={DummyImage1} />

                    <Card image={DummyImage2} />
                </SafeAreaView>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({})

export default HomeScreen
