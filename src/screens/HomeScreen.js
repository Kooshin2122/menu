import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Button, FlatList, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import getData, { getMenuListByCategory } from '../utilities';
import { useCustomHook } from '../../constants/ContextApi';
import { HomeHeader, SearchBar, CategoriesCard, MenuCard } from '../components';

const HomeScreen = ({ navigation }) => {
    const { menuList, setMenuList, categories, setCategories } = useCustomHook();

    useEffect(() => {
        getData('menu', setMenuList)
        getData('categories', setCategories)
    }, [])

    return (
        <View className={'flex-1'}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View className={'flex-[0.25] px-4 bg-white space-y-5'}>
                <HomeHeader />
                <SearchBar />
                <FlatList
                    data={categories}
                    renderItem={({ item }) => {
                        return (<CategoriesCard label={item.catName} />)
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View className={'flex-[0.7]'}>
                <ScrollView>
                    <View className={'w-[100%] flex-row flex-wrap justify-between bg-gray-100 p-4 '}>
                        {
                            menuList?.map((food) => {
                                return (
                                    <MenuCard key={food.id} {...food} navigation={navigation} />
                                )
                            }) ?? <MenuCard navigation={navigation} />
                        }
                    </View>
                </ScrollView>
            </View>

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})


// className={'w-[100%] flex-row flex-wrap justify-between bg-gray-50 p-4 '}