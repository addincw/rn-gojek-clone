import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeTab from "./HomeTab";

import GopayPayScreen from "../screens/gopay/PayScreen";
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function AppRouter() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeTab}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="GopayPay"
                    component={GopayPayScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppRouter;