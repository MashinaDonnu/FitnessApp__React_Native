import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {NavHeader} from '../components/NavHeader';

export function Articles(props){
    console.log(props)
    return(
        <View >
            <NavHeader title="Articles" navigation ={props.navigation} />
            <View style={styles.wrapp}>
                 <Text>Articles</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapp:{
        alignItems: 'center',
        justifyContent: 'center',
    }
});