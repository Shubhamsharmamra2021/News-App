import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import DetailNewsScreen from '../screens/DetailNewsScreen';

const AppStack = createStackNavigator();
export default function Navigator() {

    return (
        <NavigationContainer >
            <AppStack.Navigator screenOptions={{ headerShown: true }} >
                <AppStack.Screen name="Home" component={HomeScreen} />
                <AppStack.Screen name="News-Detail" component={DetailNewsScreen} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}