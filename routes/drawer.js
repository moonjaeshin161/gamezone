import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './stacks/homeStack';
import AboutStack from './stacks/aboutStack';

export default function DrawerNav() {
    const Drawer = createDrawerNavigator();
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='HomeStack' component={HomeStack} />
                <Drawer.Screen name="AboutStack" component={AboutStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}