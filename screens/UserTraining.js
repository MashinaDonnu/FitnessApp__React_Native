import React from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';

export function UserTraining({navigation}){
    return(
        <View style={styles.wrapp}>
            <Text>Training</Text>
            <Button title="Back" onPress={() => console.log(navigation.navigate({name:'Моя сторінка'}))} />
        </View>
    )
}


const styles = StyleSheet.create({
    wrapp:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})