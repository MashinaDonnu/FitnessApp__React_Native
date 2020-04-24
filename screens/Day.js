import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../styles/colors';


export function Day(props) {
    
    return (
        
        <View>
            <TouchableOpacity onPress={() => props.dayTraining(props.tren,props.kalor,props.index)}>
                <View style={styles.wrapp}>
                    <Text style={{fontWeight:'500',fontSize:18}}>День {props.index + 1}</Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    wrapp: {
        borderBottomColor:COLORS.REGULAR_RED,
        borderBottomWidth:5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderWidth: 1.2,
        borderColor: COLORS.REGULAR_SILVER,
        borderRadius: 7,
        width: '97%',
        marginBottom: 15
        
    }
})