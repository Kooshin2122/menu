// libriries
// import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// modules
import { FavouriteScreen, DetailScreen } from '../screens'
//
const Stack = createNativeStackNavigator();

const FavouriteStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Favourite" component={FavouriteScreen} />
            <Stack.Screen name="Details" component={DetailScreen} />
        </Stack.Navigator>
    )
}

export default FavouriteStack;

