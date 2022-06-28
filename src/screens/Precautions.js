import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import fontRusso from '../../assets/fonts/RussoOne-Regular.ttf'

const Precautions = () => {
    return (
        <View style={styles.conatiner}>
            <StatusBar style='dark' backgroundColor="#B5ECFD" hidden />
            <View style={styles.mainConatianer}>
                <View style={styles.headBar}>
                    <View style={styles.drawable}>
                        <TouchableOpacity>
                            <Ionicons name='apps' size={28} color='black' />
                        </TouchableOpacity>

                    </View>
                    <View style={styles.imageView}>
                        <Image source={require('../../assets/icon.png')} style={{ width: 80, height: 80 }} />

                    </View>


                </View>
                <ScrollView>
                    <View style={{ marginTop: 30, width: '100%', height: 34, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 28, fontWeight: '700', fontFamily: 'Montserrat', color: 'black' }}>Precautions</Text>
                    </View>
                    <View style={{ marginTop: 10, width: '100%', height: 34, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', fontFamily: 'Montserrat', color: 'black' }}>“Prevention is better than cure”</Text>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.headView}>
                            <Text style={{ fontSize: 22, fontFamily: 'Montserrat', fontWeight: '500', color: '#ffffff', textAlign: 'right' }}>Wash Hands</Text>
                        </View>
                        <View style={styles.secondView}>
                            <View style={styles.imageCardView}>
                                <Image source={require('../../assets/1.png')} />
                            </View>
                            <View style={styles.description}>
                                <Text style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: 12, textAlign: 'left', color: '#FFFFFF' }}>Most of the viruses and diseases
                                    spread because people don’t
                                    wash there hands often.
                                    Wash your hands regularly for
                                    20 sec with soap and water or
                                    alcohol-based hand rub.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.headView}>
                            <Text style={{ fontSize: 22, fontFamily: 'Montserrat', fontWeight: '500', color: '#ffffff', textAlign: 'right' }}>Cough or Sneeze</Text>
                        </View>
                        <View style={styles.secondView}>
                            <View style={styles.imageCardView}>
                                <Image source={require('../../assets/2.png')} />
                            </View>
                            <View style={styles.description}>
                                <Text style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: 12, textAlign: 'left', color: '#FFFFFF' }}>When we cough or sneez, we
                                    put a lot of virus out, therefore
                                    cover your nose and moth with
                                    a disposable tissue or flexed
                                    elbow when you cough or
                                    sneeze.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.headView}>
                            <Text style={{ fontSize: 22, fontFamily: 'Montserrat', fontWeight: '500', color: '#ffffff', textAlign: 'right' }}>Take Care of Unwell</Text>
                        </View>
                        <View style={styles.secondView}>
                            <View style={styles.imageCardView}>
                                <Image source={require('../../assets/3.png')} />
                            </View>
                            <View style={styles.description}>
                                <Text style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: 12, textAlign: 'left', color: '#FFFFFF' }}>It is necessary to take care of
                                    those who are unwell but make
                                    sure you do so by avoiding  close
                                    contact (1 meter or 3 feet) with
                                    people who are unwell.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.headView}>
                            <Text style={{ fontSize: 22, fontFamily: 'Montserrat', fontWeight: '500', color: '#ffffff', textAlign: 'right' }}>Stay Home</Text>
                        </View>
                        <View style={styles.secondView}>
                            <View style={styles.imageCardView}>
                                <Image source={require('../../assets/4.png')} />
                            </View>
                            <View style={styles.description}>
                                <Text style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: 12, textAlign: 'left', color: '#FFFFFF' }}>Key component from stopping
                                    this virus is to stay home and
                                    self-isolate from others in the
                                    household if you feel unwell.</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.headView}>
                            <Text style={{ fontSize: 22, fontFamily: 'Montserrat', fontWeight: '500', color: '#ffffff', textAlign: 'right' }}>Don’t Touch</Text>
                        </View>
                        <View style={styles.secondView}>
                            <View style={styles.imageCardView}>
                                <Image source={require('../../assets/5.png')} />
                            </View>
                            <View style={styles.description}>
                                <Text style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: 12, textAlign: 'left', color: '#FFFFFF' }}>Don’t touch your eyes, nose, or
                                    mouth if your hands are not
                                    clean and wash your face atleast
                                    thrice a day.</Text>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{marginTop:20}}></View>
                </ScrollView>

            </View>

        </View>
    )
}

export default Precautions

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: "#DEF7FF",

    },
    mainConatianer: {

        flex: 1,

    },
    headBar: {
        width: '100%',
        height: 60,
        backgroundColor: '#B5ECFD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop:20,
    },
    drawable: {
        width: 50,
        height: 30,
        marginTop: 15,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageView: {
        width: 50,
        height: 30,

        marginTop: 15,
        marginLeft: 20,
        marginRight: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainView: {
        width: '90%',
        height: 165,
        backgroundColor: '#1593BB',
        marginLeft: '5%',
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        borderRadius: 15,
        marginTop: 20,
        flexDirection: 'column'

    },
    headView: {
        width: "90%",
        height: 24,
        // backgroundColor:'red',
        marginLeft: '7%',
        marginTop: 8,

    },
    secondView: {

        flexDirection: 'row',
        width: '90%',
        height: 120,
        marginTop: 2,
        marginLeft: '4%',

        alignItems: 'center'


    },
    imageCardView: {
        width: '40%',
        height: 120,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center'


    },
    description: {
        width: '60%',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red'

    },
})