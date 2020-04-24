import React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavHeader } from '../components/NavHeader';
import { AsyncStorage } from 'react-native';
import {createProgram} from '../algoritm/algoritm_prog';
import {kaloriesCalc} from '../algoritm/kalories';
import QuizItem from '../components/quizItem';


class CreateTrainingPlan extends React.Component {
    super(props) {

    }
    getResultsTest = (results) => {

       const prog = createProgram(results);

       const kalor = kaloriesCalc(results);
       async function set(key,val) {
        try {
            await AsyncStorage.setItem(key, val)
        } catch (e) {
            throw err;
        }
    }
    set('program',JSON.stringify(prog));
    set('kalories',JSON.stringify(kalor));
    
    }
    render() {
       
        return (
            <View>
                <NavHeader title="Створити програму" navigation={this.props.navigation} />
                <View style={styles.quizWrapp}>
                    <QuizItem  getResults={this.getResultsTest}/>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({

    quizWrapp: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'space-between'
    }
})

export default CreateTrainingPlan;