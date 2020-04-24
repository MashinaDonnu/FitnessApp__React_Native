import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { COLORS } from '../styles/colors';
import { UserPage } from './UserPage';
import { DayTrainingScreen } from './DayTrainingScreen';

export function Main({ navigation }) {
    const Stack = createStackNavigator();

    function toggle() {
        navigation.toggleDrawer();
    }
    return (

        <Stack.Navigator
            initialRouteName="Test"
            screenOptions={{
                headerTintColor: 'white',

                headerLeft: () => (
                    <AppHeaderIcon toggle={toggle} />
                ),
                headerStyle: { backgroundColor: COLORS.REGULAR_RED, height: 70 },
                headerLeftContainerStyle: {
                    marginLeft: '5%'
                }
            }}
        >
            <Stack.Screen name="Моя сторінка" component={UserPage} />
            <Stack.Screen name="День тренувань" component={DayTrainingScreen} />
        </Stack.Navigator>
    )
}

