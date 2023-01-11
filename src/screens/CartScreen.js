import React, { useEffect } from 'react'
import { FlatList, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useLayoutEffect } from 'react/cjs/react.development';
import { useCustomHook } from '../../constants/ContextApi'
import { ListCard } from '../components';
import COLORS from '../theme/COLORS';
import getData from '../utilities';
import call from 'react-native-phone-call'

const CartScreen = ({ navigation }) => {
    const { cartList, setCartList, cartTotal, setCartTotal } = useCustomHook();
    let cartTotalPrice = 0;

    useEffect(() => {
        const focusHandler = navigation.addListener('focus', () => {
            getData('cart', setCartList)
        });
        return focusHandler;
    }, [navigation])

    const openPhoneCall = (money) => {
        const args = {
            number: `*789*702206*${money}#`,

            // String value with the number to call
            prompt: false, // Optional boolean property. Determines if the user should be prompted prior to the call 
            skipCanOpen: true // Skip the canOpenURL check
        }
        call(args).catch(console.error)
    }

    return (
        <View className={"flex-1 bg-gray-100"}>
            <View className={"flex-row justify-between items-center p-5 bg-white"}>
                <Text className={"text-xl font-semibold"}>
                    Order List
                </Text>
                <Text className={"text-xl font-semibold"}>
                    {cartList.length}
                </Text>
            </View>
            <View className={"p-3 flex-[5.4]"}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        cartList?.map((data) => {
                            cartTotalPrice += data.price * data.quantity
                            return (
                                <ListCard key={data.id} {...data} />
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View className={"flex-[2] py-3 px-5 bg-white"}>
                <View className={"flex-row justify-between items-center"}>
                    <Text className={"text-xl font-semibold"}>Total</Text>
                    <Text className={"text-xl font-semibold"}>{cartTotalPrice + cartTotal}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => (openPhoneCall(cartTotalPrice + cartTotal))}
                    className={"p-3 rounded-md"}
                    style={{ backgroundColor: COLORS.primary, marginTop: Platform.OS === 'android' ? 25 : 40 }}
                >
                    <Text className={'text-xl font-semibold text-white text-center'}>
                        PAY AS EVC
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default CartScreen

const styles = StyleSheet.create({})
