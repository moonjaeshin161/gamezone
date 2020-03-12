import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../../screens/home';
import ReviewDetails from '../../screens/reviewDetails';
import Header from '../../shared/header';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerTitle: () => <Header title='Home' /> }} />
            <Stack.Screen
                name="ReviewDetails"
                component={ReviewDetails}
                options={{ headerTitle: () => <Header title='Review Details' /> }} />
        </Stack.Navigator>
    )
}
