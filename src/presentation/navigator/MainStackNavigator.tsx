import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../screens";

export type RootStackParamList = {
    LoginScreen: undefined;
    RegisterScreen: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
        >
            <Stack.Screen
                // * Estas opciones deben estar activas para que el background entre pantallas no sea blanco
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                    animation: 'fade',
                    animationDuration: 300,
                    presentation: 'transparentModal',
                }}
                name="LoginScreen"
                component={LoginScreen}
            />

            <Stack.Screen
                // * Estas opciones deben estar activas para que el background entre pantallas no sea blanco
                options={{
                    headerShown: false,
                    gestureEnabled: false,
                    animation: 'fade',
                    animationDuration: 300,
                    presentation: 'transparentModal',
                }}
                name="RegisterScreen"
                component={RegisterScreen}
            />
        </Stack.Navigator>
    )
};