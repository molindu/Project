import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import app screen here 
import Home from '../screens/Home';
import Details from '../screens/Details';
import Settings from '../screens/Settings';
import { MainStackParamList } from '../types/navigation';

// Stack will recieves a MainStackParamList - type
const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => { 
    return (
        <Stack.Navigator>
            {/* screens here  */}
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={Details} />
            <Stack.Screen name='Settings' component={Settings} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({});
export default MainStack;

