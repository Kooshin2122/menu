import { BlurView } from 'expo-blur';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import * as Icons from "react-native-heroicons/solid";
import COLORS from '../theme/COLORS';

const HomeHeader = () => {
    return (
        <View className={"flex-row justify-between items-center py-1"}>
            <View className={'rounded-lg overflow-hidden p-3 opacity-2'} style={{ backgroundColor: COLORS.secondary }}>
                <Icon name="md-fast-food" size={20} color={COLORS.primary} />
            </View>
            <Text className={"text-xl font-semibold"} style={{ color: COLORS.fontSecondry }}>
                Star Fast Food
            </Text>
            <View className={`rounded-lg overflow-hidden p-3 opacity-2`} style={{ backgroundColor: COLORS.secondary }}>
                <Icons.ClipboardDocumentListIcon size={20} color={COLORS.primary} />
            </View>
        </View>
    )
}

export default HomeHeader;

const styles = StyleSheet.create({});
