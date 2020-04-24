import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../styles/colors';

export function AppHeaderIcon({ toggle }) {
    return (
        <TouchableOpacity onPress={() => toggle() }>
            <Ionicons name="ios-menu" size={32} color={COLORS.REGULAR_WHITE} />
        </TouchableOpacity>
    );

}