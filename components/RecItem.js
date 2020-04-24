import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {COLORS} from '../styles/colors'

export function RecItem(props) {

    return (
        <View style={styles.infoWrapp}>
            <View style={styles.infoItem}>
                <View style={styles.infoHeadWrapp}>
                    <Text style={styles.infoHead}>{props.index}. {props.title}</Text>
                </View>
                <View style={styles.infoTextWrapp}>
                    <Text style={styles.infoText}>{props.text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    infoWrapp: {
        padding: 10,
        alignItems: "center"
    },
    infoItem: {
        padding: 15,
    },
    infoHeadWrapp: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.REGULAR_SILVER,
        width: 300,
        alignItems: "center"

    },
    infoHead: {
        fontSize: 22,
        fontWeight: "700"
    },
    infoTextWrapp: {
        paddingStart: 10,
        paddingEnd: 10,
        paddingTop: 15
    },
    infoText: {
        fontSize:15
    }
})