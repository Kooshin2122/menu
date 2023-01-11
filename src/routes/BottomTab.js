// ------------------------------- Bottom Tab Navigator -----------------------------;
import react from 'react';
// Libriries
import { BlurView } from 'expo-blur';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, StyleSheet, Text, View } from 'react-native'
import * as Icons from "react-native-heroicons/solid";
// Screens
import HomeStack from './HomeStack'
import FavouriteStack from './FavouriteStack'
import { CartScreen, AccountScreen } from '../screens';
import COLORS from '../theme/COLORS';
import { useCustomHook } from '../../constants/ContextApi';

// Global Modules
const Tab = createBottomTabNavigator();


const BottomTabNav = () => {
    const { cartList, setCartList } = useCustomHook();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarInactiveTintColor: 'grey',
                    tabBarActiveTintColor: COLORS.primary,
                    tabBarStyle: {
                        position: 'absolute',
                        borderTopColor: 'rgba(0, 0, 0, .2)',
                        paddingTop: Platform.OS === 'android' ? 15 : 10,
                        paddingBottom: Platform.OS === 'android' ? 15 : 30,
                        height: Platform.OS === 'android' ? 70 : 90,
                        borderBottomEndRadius: Platform.OS === 'android' ? 10 : 7,
                        borderBottomStartRadius: Platform.OS === 'android' ? 10 : 7,
                        // backgroundColor: 'blue'
                    },
                }}
            >

                <Tab.Screen name='HomeStack' component={HomeStack}
                    options={
                        {
                            tabBarIcon: ({ size, color }) => (
                                <Icons.HomeIcon color={color} size={size} />
                            ),
                            title: 'Home',
                        }
                    }
                />
                <Tab.Screen name='CartScreen' component={CartScreen}
                    options={
                        {
                            tabBarIcon: ({ size, color }) => (
                                <Icons.ClipboardDocumentListIcon color={color} size={size} />
                            ),
                            title: 'Order List',
                            tabBarBadge: cartList.length
                        }
                    }
                />
                <Tab.Screen name='FavouriteStack' component={FavouriteStack}
                    options={
                        {
                            tabBarIcon: ({ size, color }) => (
                                <Icons.HeartIcon color={color} size={size} />
                            ),
                            title: 'Favourite',
                        }
                    }
                />
                <Tab.Screen name='AccountScreen' component={AccountScreen}
                    options={
                        {
                            tabBarIcon: ({ size, color }) => (
                                <Icons.UserIcon color={color} size={size} />
                            ),
                            title: 'Account',
                        }
                    }
                />


            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTabNav;

