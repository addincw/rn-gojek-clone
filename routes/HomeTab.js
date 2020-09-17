import { MaterialIcons } from '@expo/vector-icons';

import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Colors from '../public/Colors'

import HomeScreen from "../screens/HomeScreen"
import OrderScreen from "../screens/OrderScreen"
import HelpScreen from "../screens/HelpScreen"
import InboxScreen from "../screens/InboxScreen"
import AccountScreen from "../screens/AccountScreen"

const Tab = createBottomTabNavigator()

function HomeTab() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: Colors.primary,
                inactiveTintColor: Colors.light
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Order"
                component={OrderScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="receipt" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Help"
                component={HelpScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="live-help" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Inbox"
                component={InboxScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="mail" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="person" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default HomeTab

