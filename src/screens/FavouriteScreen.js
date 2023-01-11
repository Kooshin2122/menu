import React, { useEffect } from 'react'
import { FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useLayoutEffect } from 'react/cjs/react.development';
import { useCustomHook } from '../../constants/ContextApi'
import { FavouriteCard } from '../components';
import COLORS from '../theme/COLORS';
import getData from '../utilities';

const FavouriteScreen = ({ navigation, route, state }) => {
    const { favouriteList, setFavouriteList } = useCustomHook();

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getData('favourite', setFavouriteList)
        });
        return focusHandler;
    }, [navigation])

    return (
        <View className={"flex-1 bg-gray-100"}>
            <View className={"flex-row justify-between items-center p-5 bg-white"}>
                <Text className={"text-xl font-semibold"}>
                    Favourite List
                </Text>
                <Text className={"text-xl font-semibold"}>
                    {favouriteList.length}
                </Text>
            </View>
            <View className={"p-3 flex-[0.9]"}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        favouriteList?.map((data) => {
                            return (
                                <FavouriteCard key={data.id} {...data} navigation={navigation} />
                            )
                        })
                    }
                </ScrollView>
            </View>
        </View>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})
