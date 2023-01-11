import React from 'react'
import { Dimensions, Platform, StyleSheet, Text, TextInput, View } from 'react-native'
import * as Icons from "react-native-heroicons/solid";
import COLORS from '../theme/COLORS';

const SearchBar = () => {
    let windowWidth = Dimensions.get('window').width
    return (
        <View className={"flex-row items-center px-3 rounded-lg mt-5"} style={{ backgroundColor: COLORS.secondary }}>
            <Icons.MagnifyingGlassIcon size={20} color={COLORS.primary} />
            <TextInput
                // className={"p-4"}
                style={{ padding: Platform.OS === 'android' ? 7 : 15 }}
                placeholder="search your sneakers..."
            />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({})
