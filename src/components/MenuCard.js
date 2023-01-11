import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, Platform } from 'react-native'
import COLORS from '../theme/COLORS'
import { BlurView } from 'expo-blur';
import * as Icons from "react-native-heroicons/solid";

const MenuCard = ({
    navigation,
    id,
    imageUrl = "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating = 4.5,
    name = "Humburger",
    include = 'Maanka',
    price = 20,
    description,
    isOnCart,
    isOnFavourite
}) => {
    const { width, height } = Dimensions.get('screen');
    return (
        <TouchableOpacity
            onPress={() => { navigation.navigate('Details', { id, navigation }) }}
            className={"bg-white mb-8 rounded-xl p-2 shadow-md"}
            style={{ width: width / 2.4, height: height / 3.8 }}
        >
            <View>
                <Image
                    className={"w-[100%] h-[130px] rounded-lg "}
                    source={{ uri: imageUrl }}
                    // source={require(`../../assets/images/f1.jpeg`)}
                    resizeMode='cover'
                />
                <BlurView
                    tint="dark"
                    intensity={70}
                    className={'w-fit items-center absolute right-0 rounded-tr-lg rounded-bl-lg overflow-hidden p-2'}
                >
                    <Text className={'text-yellow-500 font-bold'}>
                        {rating}
                    </Text>
                </BlurView>
            </View>
            <View className={'px-1'} style={{ marginTop: Platform.OS === 'android' ? 3 : 4 }}>
                <Text className={'text-base font-semibold'} style={{ color: COLORS.fontPrimary }}>
                    {name}
                </Text>
                <Text className={'text-xs'} style={{ color: COLORS.fontSecondry }}>
                    {include}
                </Text>
            </View>
            <View className={'flex-row justify-between items-center px-1'} style={{ marginTop: Platform.OS === 'android' ? 3 : 10 }}>
                <Text className={'text-base font-semibold'} style={{ color: COLORS.fontPrimary }}>
                    $ {price}
                </Text>
                <TouchableOpacity
                    onPress={() => { }}
                    className={'py-1 px-1 rounded-md'} style={{ backgroundColor: COLORS.primary }}
                >
                    <Icons.PlusIcon size={25} color={COLORS.secondary} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default MenuCard;

const styles = StyleSheet.create({})
