import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { COLORS } from '../styles/colors';
import { AppHeaderIcon } from './AppHeaderIcon';

export function NavHeader(props){
    function toggle(){
        props.navigation.toggleDrawer();
    }
    return(
        <View style={styles.wrapp}>
            <View style={{position:'absolute',left:'5%',paddingTop:20}}>
                <AppHeaderIcon toggle={toggle}/>
            </View>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapp:{
        position:'relative',
        flexDirection:'row',
        flex:0,
        height:70,
        backgroundColor: COLORS.REGULAR_RED,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:18,
        fontWeight:'600',
        color:COLORS.REGULAR_WHITE,
        paddingTop:20
    }
});