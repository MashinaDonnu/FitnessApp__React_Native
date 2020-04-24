import React, { useState } from 'react';
import { Video } from 'expo-av';
import { View, Text, StyleSheet, Button, Image, Modal, TouchableOpacity, FlatList } from 'react-native';
import { AsyncStorage } from 'react-native';
import { COLORS } from '../styles/colors';
import { kardio } from '../components/kardio'


export function DayTrainingScreen({ route, navigation }) {

    const [prog, setProg] = useState(0);
    const [modalVisibleE, setModalVisibleE] = useState(false);
    const [modalVisibleT, setModalVisibleT] = useState(false);

    AsyncStorage.getItem('program').then(function (data) {
        setProg(data)
    });

    return (
        <View style={{ height: '100%' }}>
            <View style={styles.modalHeaderWrap}>
                <Text style={styles.modalHeaderText}>День {route.params.index + 1}</Text>
            </View>
            <View style={styles.wrapp}>

                <View style={{ marginTop: 22 }}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisibleE}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <View style={styles.line}></View>
                                <View style={styles.modalHeaderWrap}>
                                    <Text style={{ ...styles.modalHeaderText, textTransform: "uppercase" }}>БЖУ на сьогоднішній день</Text>
                                </View>
                                <View style={styles.kalorWrapp}>
                                    <View style={styles.kalorElement}>
                                        <Text style={{ ...styles.kalorText, ...styles.boldText }}>Білки:</Text>
                                        <Text style={styles.kalorText}>{route.params.kalor.white}г.</Text>
                                    </View>
                                    <View style={styles.kalorElement}>
                                        <Text style={{ ...styles.kalorText, ...styles.boldText }}>Жири:</Text>
                                        <Text style={styles.kalorText}>{route.params.kalor.fats}г.</Text>
                                    </View>
                                    <View style={styles.kalorElement}>
                                        <Text style={{ ...styles.kalorText, ...styles.boldText }}>Вуглеводи:</Text>
                                        <Text style={styles.kalorText}>{route.params.kalor.carbohydrates}г.</Text>
                                    </View>
                                    <View style={styles.kalorElement}>
                                        <Text style={{ ...styles.kalorText, ...styles.boldText }}>Всього калорій:</Text>
                                        <Text style={styles.kalorText}>{route.params.kalor.all}</Text>
                                    </View>
                                </View>

                            </View>


                            <View style={styles.backWrapp}>
                                <TouchableOpacity
                                    style={styles.btnModalBack}
                                    onPress={() => {
                                        setModalVisibleE(!modalVisibleE);
                                    }}>
                                    <Text style={styles.btnModalBackText}>Назад</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>



                    <TouchableOpacity
                        onPress={() => {
                            setModalVisibleE(true);
                        }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Харчування</Text>
                        </View>
                    </TouchableOpacity>

                    {/* ==================================================== */}




                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={modalVisibleT}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                        }}>
                        <View style={{ marginTop: 22 }}>
                            <View>
                                <View style={styles.line}></View>
                                {route.params.type === 'circular' ? <View>
                                
                                </View>
                                    // =============================== На повтори ==============================================================
                                    :
                                    <View>
                                        <View>
                                            <View style={styles.modalHeaderWrap}>
                                                {
                                                    route.params.program.type === "relax" ?
                                                        <View>
                                                            <View>
                                                            </View>
                                                            <Text style={{
                                                                textAlign: "center",
                                                                marginTop: 70,
                                                                fontSize: 22,

                                                            }}>Сьогодні можна відпочити :)</Text>
                                                            <View style={{ alignItems: "center", marginTop: 30 }}>
                                                                <Image source={require('../images/relax.png')} style={{
                                                                    width: 200,

                                                                }} />
                                                                <View style={styles.backWrapp}>
                                                                    <TouchableOpacity
                                                                        style={styles.btnModalBack}
                                                                        onPress={() => {
                                                                            setModalVisibleT(!modalVisibleT);
                                                                        }}>
                                                                        <Text style={styles.btnModalBackText}>Назад</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        :
                                                        <Text style={styles.modalHeaderText}>Тип тренування: {route.params.program.type === "approaches" ? '"По підходам"' : '"Круговий"'} </Text>
                                                }
                                            </View>


                                        </View>
                                        <View style={styles.flatWrapp}>

                                            <FlatList
                                                data={JSON.parse(prog).exscesWeight ? [...kardio, ...route.params.program.program] : route.params.program.program}
                                                keyExtractor={(item, index) => item.name}
                                                renderItem={({ item, index }) => {
                                                    return (
                                                        <View key={item}>
                                                            <View style={styles.exWrap} key={item}>
                                                                <Text style={styles.exText}>{index + 1}. {item.name}</Text>
                                                                <Text style={styles.exTren}>    {item.time ? "Час: " + item.time + "сек" : "Кількість: " + item.reps} {route.params.program.type === 'circular' ? ' ' : "  |   Підходів:"}  {item.approaches} Відпочинок: {item.rest} {route.params.program.type === 'circular' ? 'сек' : 'хв'}</Text>
                                                                <View style={styles.imgWrapp}>
                                                                    {
                                                                        item.img === 'planka.jpg' ?
                                                                            <Image
                                                                                style={{ width: 300, height: 170 }}
                                                                                source={
                                                                                    require("../images/planka.jpg")
                                                                                }
                                                                            />
                                                                            :
                                                                            <Video
                                                                                source={item.img}
                                                                                rate={1.0}
                                                                                volume={1.0}
                                                                                isMuted={true}
                                                                                resizeMode="cover"
                                                                                shouldPlay
                                                                                isLooping
                                                                                style={{ width: 300, height: 170, borderRadius: 8 }}
                                                                            />
                                                                    }
                                                                </View>
                                                            </View>
                                                            <View>

                                                            </View>
                                                        </View>
                                                    )
                                                }}
                                            />
                                        </View>
                                    </View>
                                }
                                <View style={styles.backWrapp}>
                                    <TouchableOpacity
                                        style={styles.btnModalBack}
                                        onPress={() => {
                                            setModalVisibleT(!modalVisibleT);
                                        }}>
                                        <Text style={styles.btnModalBackText}>Назад</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>



                    <TouchableOpacity
                        onPress={() => {
                            setModalVisibleT(true);
                        }}>
                        <View style={styles.btn}>
                            <Text style={styles.btnText}>Тренування</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate({ name: 'Моя сторінка' })}>
                    <View style={{marginTop:50,padding:10,   borderBottomColor: COLORS.REGULAR_RED,borderBottomWidth: 1.5,}}>
                        <Text style={{ color: '#000',fontSize:22,fontWeight:"500" }} >Назад</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    wrapp: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    btn: {
        width: 200,
        height: 70,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.REGULAR_RED,
        marginTop: 50
    },
    btnText: {
        fontSize: 24,
        color: COLORS.REGULAR_WHITE
    },
    modalHeaderWrap: {
        padding: 15,
        borderBottomColor: COLORS.REGULAR_RED,
        borderBottomWidth: 1.5,
        backgroundColor: COLORS.REGULAR_WHITE
    },
    modalHeaderText: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "600"
    },
    flatWrapp: {
        width: '95%',
        height: 400,
        marginTop: 15,
        paddingStart: 20,
        paddingEnd: 10,
        justifyContent: 'center',
        marginBottom: 15
    },
    exText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "800"
    },
    exTren: {
        textAlign: "center",
        fontSize: 16,
        fontWeight: "600"
    },
    exWrap: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.REGULAR_SILVER,
        width:'95%'
    },
    imgWrapp: {
        alignItems: "center",
        marginTop: 10
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
    line: {
        height: "10%",
        backgroundColor: COLORS.REGULAR_RED,
        marginBottom: 10
    },
    kalorWrapp: {

        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 400
    },
    kalorElement: {
        flexDirection: "row",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.REGULAR_SILVER,
        marginTop: 10,
        width: '100%',
        justifyContent: "space-between",
        width: "90%"
    },
    kalorText: {
        textAlign: 'center',
        fontSize: 26,
        color: '#000'
    },
    boldText: {
        textAlign: "left",
        fontWeight: "600"
    }

})