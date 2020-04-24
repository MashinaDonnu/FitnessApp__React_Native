import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { COLORS } from '../styles/colors';
import { connect } from 'react-redux';

class QuizItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputVal: this.props.quiz.answerInput
        }
    }

    myAlert = (mess = 'не коректні данні') => {
        return Alert.alert(
            'Помилка вводу!',
            mess,
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );

    }

    render() {
        return (
            <View style={styles.quiz}>
                {this.props.quiz.id == 6 ?

                    <View style={styles.completeWrapp}>
                        <View style={styles.completeMessWrapp}>
                            <Text style={styles.completeMess}>{this.props.quiz.message}</Text>
                        </View>
                        <View style={styles.btnWrappComplete}>
                            <TouchableOpacity onPress={() => this.props.complete()}>
                                <View style={styles.btnComplete}>
                                    <Text style={styles.btnTextComplete}>{this.props.quiz.btn}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View> :

                    <View>
                        <View style={styles.questionWrapp}>
                            <Text style={styles.question}>{this.props.quiz.id}. {this.props.quiz.question}</Text>
                        </View>
                        <View style={styles.inputWrapp}>
                            <Text style={styles.answer}>Відповідь:</Text>
                            <TextInput style={styles.input}
                                onChangeText={(text) => {
                                        if(this.props.quiz.id == 5){
                                            this.state.inputVal = text;
                                            this.setState({
                                                inputVal: text
                                            })
                                            this.props.onInputInfo({
                                                text: this.state.inputVal
                                            })
                                        }
                                        else{
                                            if (isNaN(text)) {
                                                return false;
                                            }
                                            this.state.inputVal = text;
                                            this.setState({
                                                inputVal: text
                                            })
                                            this.props.onInputInfo({
                                                text: this.state.inputVal
                                            })
                                        }
                                       
                                        
                                    }
                                 
                                }
                                
                                value={this.state.inputVal} />
                        </View>

                        <View style={styles.btnWrapp}>
                            <TouchableOpacity onPress={() => {
                                if (this.props.quiz.id == 1 && (parseInt(this.state.inputVal) > 50 || parseInt(this.state.inputVal) < 7 || this.state.inputVal === '')) {
                                    this.myAlert('Некоректно введений вік');
                                    return false;
                                }
                                if (this.props.quiz.id == 2 && (parseInt(this.state.inputVal) > 220 || parseInt(this.state.inputVal) < 120 || this.state.inputVal === '')) {
                                    this.myAlert('Некоректно введений зріст');
                                    return false;
                                }
                                if (this.props.quiz.id == 3 && (parseInt(this.state.inputVal) > 130 || parseInt(this.state.inputVal) < 30 || this.state.inputVal === '')) {
                                    this.myAlert('Некоректно введена вага');
                                    return false;
                                }
                                if (this.props.quiz.id == 4 && (parseInt(this.state.inputVal) < 0 || parseInt(this.state.inputVal).length > 5 || this.state.inputVal === '')) {
                                    this.myAlert('Некоректно введена кількість');
                                    return false;
                                }
                                if (this.props.quiz.id == 5) {
                                    if( this.state.inputVal != 'Так' && this.state.inputVal != 'Ні'){
                                        this.myAlert('Некоректно введена відповідь');
                                        return false;
                                    }
                                    
                                    if(this.props.quiz.id == 5){
                                        this.props.getResults(this.props.results);
                                    }
                                    
                                }
                                this.setState({ inputVal: '' });
                                this.props.nextQuiz();
                            }}>
                                <View style={styles.btn}>
                                    <Text style={styles.btnText}>Відповісти</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>


                }


            </View>
        )
    }
}


function mapStateToProps(state) {
    return {
        quiz: state.quizes.quiz[state.quizes.active],
        results:state.quizes.quiz
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onInputInfo: (val) => dispatch({ type: 'answer', value: val }),
        nextQuiz: () => dispatch({ type: 'next' }),
        complete: () => dispatch({ type: 'complete' }),
    }
}


const styles = StyleSheet.create({
    btnWrapp: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25
    },
    btn: {
        borderRadius: 3,
        backgroundColor: COLORS.REGULAR_RED,
        padding: 15,
        width: 120
    },
    btnText: {
        fontSize: 16,
        color: COLORS.REGULAR_WHITE,
        textAlign: 'center'
    },
    inputWrapp: {
        marginTop: 70,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.REGULAR_SILVER,
        width: '70%',
        fontSize: 18,
        paddingBottom: 1,

    },
    questionWrapp: {
        padding: 10,
        borderBottomColor: COLORS.REGULAR_RED,
        borderBottomWidth: 1,
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.TEXT_SILVER,
    }
    ,
    answer: {
        color: COLORS.TEXT_SILVER,
        fontSize: 16,
    }
    ,
    quiz: {
        marginTop: '20%',
        width: '85%',
        paddingBottom: 12,
        // borderWidth: 1,
        // borderColor: COLORS.REGULAR_RED,
        borderRadius: 3
    },
    completeWrapp: {
        padding: 10,
    },
    completeMessWrapp: {
        padding: 10,
        borderBottomColor: COLORS.REGULAR_RED,
        borderBottomWidth: 1,
    },
    completeMess: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.TEXT_SILVER,
        textAlign: 'center'
    },
    btnWrappComplete: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    },
    btnComplete: {
        borderRadius: 3,
        backgroundColor: COLORS.REGULAR_RED,
        padding: 15,
        width: 180
    },
    btnTextComplete: {
        fontSize: 22,
        color: COLORS.REGULAR_WHITE,
        textAlign: 'center'
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(QuizItem);