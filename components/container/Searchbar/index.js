import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Alert } from 'react-native'

import PublicStyles from "../../../public/Styles";
import Colors from '../../../public/Colors';

import styles from "./styles";

function Searchbar() {
    const [search, setSearch] = useState('')

    return (
        <View style={{ ...PublicStyles.container, ...styles.search }}>
            <View style={styles.searchInputGroup}>
                <MaterialIcons style={styles.searchIcon} name="search" color={Colors.light} size={24} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="What do you want to eat?"
                    onChangeText={(val) => setSearch(val)}
                    value={search} />
            </View>
            <View style={styles.searchPromo}>
                <TouchableOpacity onPress={() => { Alert.alert('clicked') }}>
                    <MaterialCommunityIcons name="ticket-percent" size={24} color={Colors.warning} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Searchbar
