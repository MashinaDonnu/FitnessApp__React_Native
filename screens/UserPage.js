import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Day } from './Day';
import { programs } from '../components/programs';
import { AsyncStorage } from 'react-native';
import { COLORS } from '../styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export function UserPage({ navigation }) {
    const [prog, setProg] = useState(0);
    const [kalories, setKalories] = useState(0);
    const [reload, setReload] = useState(1);
   
    AsyncStorage.getItem('program').then(function (data) {
        setProg(data)
    })

    AsyncStorage.getItem('kalories').then(function (data) {
        setKalories(data)
    })


    function dayTraining(day, kalor, index) {
        navigation.navigate({
            name: 'День тренувань',
            params: {
                program: day,
                kalor: kalor,
                index: index
            }
        })
    }


    return (

        <View>

            <View style={styles.wrapp}>
                <Text style={{ color: COLORS.REGULAR_WHITE }}>{reload}</Text>
                <View style={{ paddingBottom: 20, paddingTop: 20, borderBottomWidth: 2, borderBottomColor: COLORS.REGULAR_RED, width: '100%', alignItems: "center", justifyContent: "center" }}>
                    <TouchableOpacity onPress={() => {
                        setReload(reload + 1);
                        console.log(reload + 1);
                    }}>
                        <View style={{ padding: 15, width: 250, borderWidth: 1, borderColor: COLORS.REGULAR_SILVER, backgroundColor: COLORS.REGULAR_RED, borderRadius: 8 }}>
                            <Text style={{ fontSize: 20, textAlign: "center", color: COLORS.REGULAR_WHITE }}>Оновити програму</Text>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.flatWrapp}>
                    <FlatList
                        data={programs[JSON.parse(prog).programId]}
                        keyExtractor={(item, index) => 'key' + index}
                        renderItem={({ item, index }) => <Day key={'key'+index} index={index} kalor={JSON.parse(kalories)[index]} tren={item} dayTraining={dayTraining} />}
                    />
                </View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapp: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    flatWrapp: {
        width: '90%',
        height: '80%',
        marginTop: 15,
        paddingStart: 20,
        paddingEnd: 10,
        justifyContent: 'center',
        marginBottom: 15,
        paddingBottom: 30
    }
})
