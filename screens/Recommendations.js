import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, FlatList } from 'react-native';
import { NavHeader } from '../components/NavHeader';
import { COLORS } from '../styles/colors';
import { RecItem } from '../components/RecItem'

export function Recommendations(props) {
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const reg = {
        text: 'Зігнати зайвий жир та розвинути м`язи пресу одними тренуваннями не вдасться. Раз є зайві кілограми, живіт як висів, так і висітиме — навіть якщо ви будете мучити себе багатогодинними вправами. Спорт — це лише 30% успіху, решта — правильне харчування (бжу яке вирахує вам програма) та здоровий сон 7-8 годин.',
        title: 'Режим',
    }
    const ageTren = {
        text: 'Реомендований вік для тренувань від 7 до 50 років',
        title: 'Вік і тренування'
    }
    const noTren = {
        text: 'Якщо не можете продовжувати пыдхыд чи круг - зупиніться,трошки відпочиньте але продовжуйте виконувати,обов`язково потрібно закінчити підхід чи круг до кінця.',
        title: 'Не має сил закінчити вправу'
    }
    const food = {
        text: 'Щоб підтягти все тіло, і живіт в тому числі, основу вашого раціону мають складати зелень, не крохмалисті сирі овочі, нежирний білок і корисні рослинні жири. Останній прийом білкової їжі, незалежно від того, коли ви лягаєте спати, має бути не пізніше 19:00. Якщо хочеться їсти після сьомої вечора — тільки сирі зелень, овочі, зелений чай, трав`яні відвари. За три години до тренування і після тренування жир не їмо.',
        title: 'Яку їжу споживати?'
    }

    const badFood = {
        text: 'Відразу торкнемося овочі і фрукти. Не варто зловживати бананами, виноградом, родзинками, інжиром і фініками, а також картоплею (!), маринованими або консервованими продуктами. Не варто зловживати сіллю. Сіль сприяє затримці рідини в організмі, тому обмінні процеси сповільнюються, а нещасливі сантиметри будуть залишати вас дуже неохоче. Якщо ви вже зовсім не можете вживати прісну їжу, спробуйте сіль замінити лимоном. Хлібобулочні вироби потрапляють під табу! Це не тільки зайвий жир на талії, але і на наших сідницях.На диво — білий рис також варто їсти в помірній кількості, оскільки він лідер за вмістом крохмалю. Чого категорично не варто їсти, при спробах зменшити свою талію – це солодощі. Прості вуглеводи і цукор дуже шкідливі для тонкої талії і відразу з`являються у вигляді непотрібних відкладень на ній. Жирні сорти риби за типом лососевих видів, скумбрії. Серед м`яса – це табу на баранину і свинину. Особливо в смаженому вигляді.Також варто уникати різних солодких газованих напоїв, підсолоджувачів, барвників, підсилювачів смаку, транс-жирів і алкоголю. Всі ці продукти сповільнюють обмін речовин і будуть заважати в схудненні.',
        title:'Що не слід їсти при схуднені?'
    }


    const items = [reg, ageTren, noTren];
    const items2 = [food,badFood];

    return (
        <View>
            <NavHeader title="Рекомендації" navigation={props.navigation} />
            <View style={styles.wrapp}>
                <View style={styles.flatWrapp}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible1}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <View>
                                    <FlatList
                                        style={{ height: '90%' }}
                                        data={items}
                                        renderItem={({ item, index }) => <RecItem key={'key' + index} index={index + 1} title={item.title} text={item.text} />}
                                        keyExtractor={item => item.title}
                                    />
                                </View>

                                <View style={styles.backWrapp}>
                                    <TouchableOpacity
                                        style={styles.btnModalBack}
                                        onPress={() => {
                                            setModalVisible1(!modalVisible1);
                                        }}>
                                        <Text style={styles.btnModalBackText}>Назад</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </Modal>

                    <View style={styles.recWrapp}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible1(true);
                            }}>
                            <Text style={styles.recWrappText}>Рекомендації по тренуваннях</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.flatWrapp}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisible2}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <View>
                                    <FlatList
                                        style={{ height: '90%' }}
                                        data={items2}
                                        renderItem={({ item, index }) => <RecItem key={'key' + index} index={index + 1} title={item.title} text={item.text} />}
                                        keyExtractor={item => item.title}
                                    />
                                </View>

                                <View style={styles.backWrapp}>
                                    <TouchableOpacity
                                        style={styles.btnModalBack}
                                        onPress={() => {
                                            setModalVisible2(!modalVisible2);
                                        }}>
                                        <Text style={styles.btnModalBackText}>Назад</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>
                    </Modal>

                    <View style={styles.recWrapp}>
                        <TouchableOpacity
                            onPress={() => {
                                setModalVisible2(true);
                            }}>
                            <Text style={styles.recWrappText}>Рекомендації по харчуванню</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    wrapp: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.REGULAR_WHITE,
        height: '100%',
        paddingBottom:'40%'
    },
    flatWrapp: {
        marginBottom: 50
    },
    recWrapp: {
        padding: 15,
        backgroundColor: COLORS.SILVER_LITE,
        borderBottomColor: COLORS.REGULAR_RED,
        borderBottomWidth: 2
    },
    recWrappText: {
        fontSize: 18,
        fontWeight: "500"
    },

    btnModalBack: {
        width: 150,
        padding: 15,
        backgroundColor: COLORS.REGULAR_RED,
        borderRadius: 10
    },
    btnModalBackText: {
        textAlign: "center",
        fontSize: 22,
        color: COLORS.REGULAR_WHITE
    },
    backWrapp: {
        alignItems: "center",
    },

})