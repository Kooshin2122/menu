import React, { useEffect, useState } from 'react'
import { Image, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Icons from "react-native-heroicons/solid";
import COLORS from '../theme/COLORS';
import { BlurView } from 'expo-blur';
import { useCustomHook } from '../../constants/ContextApi';
import { deleteData, getDataById, postData, putData } from '../utilities';
import { useLayoutEffect } from 'react/cjs/react.development';

const FavouriteDetail = ({ route, navigation }) => {
    const { id } = route.params;
    const [counter, setCounter] = useState(1);

    const [detail, setDetail] = useState();

    useEffect(() => {
        getDataById('menu', id, setDetail)
    }, [])

    const addOnCart = () => {
        postData('cart', { ...detail, quantity: counter })
    }

    const addOnFavourite = () => {
        postData('favourite', { ...detail, quantity: counter })
        putData('menu', id, { id: detail.id, imageUrl: detail.imageUrl, rating: detail.rating, name: detail.name, include: detail.include, price: detail.price, description: detail.description, isOnCart: true })
    }

    const removeOnFavourite = () => {
        deleteData('favourite', id)
        putData('menu', id, { id: detail.id, imageUrl: detail.imageUrl, rating: detail.rating, name: detail.name, include: detail.include, price: detail.price, description: detail.description, isOnCart: false })
    }

    return (
        <View className={'flex-1 bg-white'}>
            <View className={'flex-[0.6] bg-slate-500 rounded-b-3xl'} >
                <Image source={{ uri: detail?.imageUrl ?? 0 }} resizeMode="cover" className={"rounded-b-3xl"} style={{ width: '100%', height: "100%" }} />
                <View className={"flex-row justify-between items-center py-1 absolute top-1 w-[100%] p-3"}>
                    <TouchableOpacity onPress={() => { navigation.pop() }}>
                        <BlurView tint='dark' intensity={60} className={'rounded-lg overflow-hidden p-2'}>
                            <Icons.ChevronLeftIcon size={25} color={"white"} />
                        </BlurView>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={!detail?.isOnCart ? addOnFavourite : removeOnFavourite ?? addOnFavourite}>
                        <BlurView tint='dark' intensity={60} className={'rounded-lg overflow-hidden p-2'}>
                            <Icons.HeartIcon size={25} color={detail?.isOnCart ? 'red' : 'white' ?? 'white'} />
                        </BlurView>
                    </TouchableOpacity>
                </View>
                <BlurView tint='dark' intensity={60} className={'rounded-xl overflow-hidden p-2 absolute bottom-7 left-3 right-3 py-5 px-10'}>
                    <View className={"flex-row justify-between items-center"}>
                        <View className={'px-1'} style={{ marginTop: Platform.OS === 'android' ? 3 : 4 }}>
                            <Text className={'text-xl font-semibold text-white'}>
                                {detail?.name ?? 'name'}
                            </Text>
                            <Text className={'text-xs text-gray-200'}>
                                {detail?.include ?? 'include'}
                            </Text>
                        </View>
                        <Text className={'text-xl font-semibold text-yellow-500'}>
                            rating {detail?.rating ?? 'rating'}
                        </Text>
                    </View>
                    <View className={"flex-row justify-between items-center mt-5"}>
                        <Text className={'text-2xl font-semibold text-white'}>
                            $ {detail?.price ?? 1 * counter}
                        </Text>
                        <View className={"flex-row w-28 justify-between items-center"}>
                            <TouchableOpacity
                                onPress={() => { setCounter(counter <= 1 ? 1 : counter - 1) }}
                                className={'py-1 px-1 rounded-md'} style={{ backgroundColor: COLORS.primary }}
                            >
                                <Icons.MinusIcon size={25} color={COLORS.secondary} />
                            </TouchableOpacity>
                            <Text className={'text-xl font-semibold text-white'}>
                                {counter}
                            </Text>
                            <TouchableOpacity
                                onPress={() => { setCounter(counter + 1) }}
                                className={'py-1 px-1 rounded-md'} style={{ backgroundColor: COLORS.primary }}
                            >
                                <Icons.PlusIcon size={25} color={COLORS.secondary} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </BlurView>
            </View>
            <View className={"flex-[0.4] mt-5 px-4"}>
                <Text className={'text-xl font-semibold mb-2'}>
                    Details
                </Text>
                <Text className={'h-18 overflow-scroll'}>
                    {detail?.description ?? 'description'}
                </Text>
                <TouchableOpacity
                    onPress={addOnCart}
                    className={"p-3 rounded-md"}
                    style={{ backgroundColor: COLORS.primary, marginTop: Platform.OS === 'android' ? 25 : 40 }}
                >
                    <Text className={'text-xl font-semibold text-white text-center'}>
                        Add to order list
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FavouriteDetail;

const styles = StyleSheet.create({})
