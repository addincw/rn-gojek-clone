import { MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';

import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    StyleSheet, Alert
} from 'react-native'

import publicStyles from "../../public/Styles";
import Colors from "../../public/Colors";
import { useNavigation } from '@react-navigation/native';

function PayScreen() {
    const navigation = useNavigation()
    const [cameraPermission, setCameraPermission] = useState(null);
    const [cameratype, setCameraType] = useState(Camera.Constants.Type.back);
    const [cameraResult, setCameraResult] = useState(null)

    const askCameraPermission = async () => {
        const { status } = await Camera.requestPermissionsAsync()
        setCameraPermission(status === 'granted')
    }

    const setCameraPreview = () => {
        if (cameraPermission === null) {
            return <View style={{ flex: 1, backgroundColor: Colors.dark }}></View>
        }

        if (cameraPermission === false) {
            return <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: Colors.dark
            }}>
                <Text style={{ color: Colors.superLight }}>Access camera not allowed</Text>
            </View>
        }

        return (<View style={styles.cameraWrapper}>
            <Camera
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}
                onBarCodeScanned={(result) => {
                    if (cameraResult === null) setCameraResult(result.data)
                }}></Camera>
            <View style={{ ...publicStyles.container, ...styles.actions }}>
                <View style={styles.actionLeft}>
                    <TouchableOpacity style={styles.button} onPress={() => { navigation.goBack() }}>
                        <MaterialIcons name="arrow-back" color={Colors.dark} size={24}></MaterialIcons>
                    </TouchableOpacity>
                </View>
                <View style={styles.actionRight}>
                    <TouchableOpacity style={styles.button}>
                        <MaterialIcons name="image" color={Colors.dark} size={24}></MaterialIcons>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <MaterialIcons name="flash-on" color={Colors.dark} size={24}></MaterialIcons>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={styles.label}>Use camera to scan QR code and pay</Text>
        </View>)
    }


    useEffect(() => {
        askCameraPermission()
    }, [])

    useEffect(() => {
        if (cameraResult) {
            Alert.alert('result:', cameraResult, [
                {
                    text: "ok",
                    onPress: () => setCameraResult(null)
                }
            ])
        }
    }, [cameraResult])

    return (
        <SafeAreaView style={publicStyles.safeArea}>
            {setCameraPreview()}
            <View style={styles.cameraOptions}>
                <View style={{ alignItems: "center", paddingVertical: 5, marginBottom: 20 }}>
                    <MaterialIcons name="menu" size={28} color={Colors.light} />
                </View>
                <View style={{ ...publicStyles.container, ...styles.header }}>
                    <Text style={styles.headerTitle}>More options</Text>
                    <TouchableOpacity>
                        <View style={styles.shortcut}>
                            <MaterialIcons
                                style={{ paddingRight: 10 }}
                                name="add-circle"
                                color={Colors.primary}
                                size={24}
                            />
                            <Text style={{
                                fontSize: 16,
                                fontWeight: "bold",
                                color: Colors.primary,
                                textTransform: "uppercase"
                            }}>Shortcut</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ ...publicStyles.container, ...styles.body }}>
                    <View style={styles.options}>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={{
                                height: 58,
                                width: 58,
                                borderRadius: 55,
                                alignItems: "center",
                                justifyContent: "center", backgroundColor: Colors.primary
                            }}>
                                <MaterialIcons name="phone" color={Colors.superLight} size={28}></MaterialIcons>
                            </TouchableOpacity>
                            <Text style={{ width: 58, color: Colors.dark, textAlign: "center", marginTop: 10 }}>Phone Number</Text>
                        </View>
                        <View style={{ alignItems: "center" }}>
                            <TouchableOpacity style={{
                                height: 58,
                                width: 58,
                                borderRadius: 55,
                                alignItems: "center",
                                justifyContent: "center", backgroundColor: Colors.primary
                            }}>
                                <MaterialIcons name="apps" color={Colors.superLight} size={28}></MaterialIcons>
                            </TouchableOpacity>
                            <Text style={{ width: 58, color: Colors.dark, textAlign: "center", marginTop: 10 }}>Gopay Code</Text>
                        </View>
                    </View>
                    <View style={{ ...publicStyles.container, ...styles.information }}>
                        <Text style={{
                            paddingLeft: 12,
                            borderLeftWidth: 1,
                            borderLeftColor: Colors.light,
                            fontSize: 16, color: Colors.dark
                        }}>Your recent GoPay receivers will show here. No admin fees!</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        elevation: 3,
        borderRadius: 55,
        backgroundColor: Colors.superLight,
        alignItems: "center",
        justifyContent: "center"
    },
    cameraWrapper: {
        position: "relative",
        flex: 1,
        backgroundColor: Colors.dark,
    },
    label: {
        position: "absolute",
        bottom: 10,
        left: 0,
        width: "100%",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 16,
        color: Colors.superLight,
    },
    actions: {
        position: "absolute",
        top: 15,
        left: 0,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    actionRight: {
        width: "28%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
        color: Colors.dark
    },
    shortcut: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    body: {
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15
    },
    options: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    information: {
        width: "65%"
    }

})

export default PayScreen
