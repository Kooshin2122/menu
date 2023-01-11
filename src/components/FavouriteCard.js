
import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Icons from "react-native-heroicons/solid";
import COLORS from '../theme/COLORS'
import { BlurView } from 'expo-blur';
import { useCustomHook } from '../../constants/ContextApi';
import { useEffect } from 'react';

const FavouriteCard = ({
    id,
    imageUrl = "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating = 4.5,
    name = "Humburger",
    include = "with chips and salad",
    price = 20,
    quantity,
    description,
    isOnCart,
    navigation
}) => {
    const [counter, setCounter] = useState(quantity);
    const { cartTotal, setCartTotal } = useCustomHook();
    // console.log('------------ cart total', cartTotal);
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('Details', { id, imageUrl, rating, name, include, price, description, isOnCart, navigation }) }}
            className={"flex-row items-center bg-white p-2 shadow-2xl rounded-lg mb-4"}
        >
            <Image
                source={{ uri: imageUrl }}
                resizeMode="cover"
                className={"w-[40%] h-[100px] rounded-lg mr-3 "}
            />
            <View className={'w-[53%]'}>
                <Text className={"text-xl font-semibold"}>
                    {name}
                </Text>
                <Text className={"text-sm text-gray-400"}>
                    {include}
                </Text>
                <View className={"flex-row justify-between items-center mt-3"}>
                    <Text className={"text-xl font-semibold"}>
                        ${price * counter}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default FavouriteCard;

const styles = StyleSheet.create({})



