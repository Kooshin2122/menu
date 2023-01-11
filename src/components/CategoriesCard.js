import axios from 'axios';
import React, { useMemo, useState } from 'react'
import { Platform, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { useCustomHook } from '../../constants/ContextApi';
import COLORS from '../theme/COLORS'
import { getMenuListByCategory } from '../utilities';

const CategoriesCard = ({ label = 'All' }) => {
    const { menuList, setMenuList, selectTab, setSelectTab } = useCustomHook();

    const clickHandler = () => {
        setSelectTab(label)
        getMenuListByCategory('menu', setMenuList, label, label)
    }

    const isActive = useMemo(() => {
        return selectTab == label
    }, [selectTab])

    return (
        <View className={"mr-5"}>
            <TouchableOpacity
                onPress={clickHandler}
                className={"shadow-2xl"}
                style={{ backgroundColor: isActive ? COLORS.primary : 'white', paddingVertical: Platform.OS === 'android' ? 7 : 10, paddingHorizontal: Platform.OS === 'android' ? 10 : 15, borderColor: COLORS.primary, borderWidth: 1, borderRadius: 50 }}
            >
                <Text style={{ color: isActive ? "white" : COLORS.primary }}>
                    {label}
                </Text>
            </TouchableOpacity>
        </View >
    )
}

export default CategoriesCard

const styles = StyleSheet.create({})
