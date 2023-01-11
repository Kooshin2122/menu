import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import * as Icons from "react-native-heroicons/solid";
import COLORS from '../theme/COLORS'
import { BlurView } from 'expo-blur';
import { useCustomHook } from '../../constants/ContextApi';
import { useEffect } from 'react';

const ListCard = ({
    id,
    imageUrl = "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating = 4.5,
    name = "Humburger",
    include = "with chips and salad",
    price = 20,
    quantity,
    description,
}) => {
    const [counter, setCounter] = useState(quantity);
    const { cartTotal, setCartTotal } = useCustomHook();
    // console.log('------------ cart total', cartTotal);
    return (
        <View className={"flex-row items-center bg-white p-2 shadow-2xl rounded-lg mb-4"}>
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
                    <View className={"flex-row w-24 justify-between items-center"}>
                        <TouchableOpacity
                            onPress={() => {
                                setCounter(counter <= 1 ? 1 : counter - 1)
                                setCartTotal(counter >= 1 ? cartTotal - price : 0)
                            }}
                            className={'py-1 px-1 rounded-md'} style={{ backgroundColor: COLORS.primary }}
                        >
                            <Icons.MinusIcon size={25} color={COLORS.secondary} />
                        </TouchableOpacity>
                        <Text className={'text-xl font-semibold text-slate-700'}>
                            {counter}
                        </Text>
                        <TouchableOpacity
                            onPress={() => {
                                setCounter(counter + 1)
                                setCartTotal(cartTotal + price)
                            }}
                            className={'py-1 px-1 rounded-md'} style={{ backgroundColor: COLORS.primary }}
                        >
                            <Icons.PlusIcon size={25} color={COLORS.secondary} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ListCard;

const styles = StyleSheet.create({})


