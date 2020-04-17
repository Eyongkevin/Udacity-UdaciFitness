import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Hello = () => (
    <View>
        <Text>Hello!</Text>
    </View>
);

const Goodbye = () => (
    <View>
        <Text>Goodbye!</Text>
    </View>
);


const Tab = Platform.OS === 'ios'? createBottomTabNavigator() : createMaterialTopTabNavigator()

export default class Nav extends Component {
    render() {
        return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Hello" component={Hello} />
                <Tab.Screen name="Goodbye" component={Goodbye} />
            </Tab.Navigator>
        </NavigationContainer>
        );
    }
}
