import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import fontRusso from '../../assets/fonts/RussoOne-Regular.ttf'

const About = () => {
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
                        <Text style={{ fontSize: 30, fontWeight: '700', fontFamily: 'Montserrat', color: 'black' }}>About</Text>
                    </View>
                    <View style={styles.mainView}>
                        <View style={styles.headView}>
                            <Image source={require('../../assets/6.png')} />
                        </View>
                        <View style={styles.secondView}>


                            <Text style={{ fontWeight: '500', fontFamily: 'Montserrat', fontSize: 16, textAlign: 'left', color: 'black' }}>
                                Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV).
                                {"\n"} {"\n"}
                                Coronavirus disease (COVID-19) is a new strain that was discovered in 2019 and has not been previously identified in humans.
                                {"\n"} {"\n"}
                                Coronaviruses are zoonotic, meaning they are transmitted between animals and people.  Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans.
                            </Text>

                        </View>
                    </View>
                    <View style={{ marginTop: 30, width: 190, height: 34, justifyContent: 'center', alignItems: 'center', backgroundColor: '#00A0D3', borderRadius: 20, marginLeft: '28%' }}>
                        <Text style={{ fontSize: 16, fontWeight: '500', fontFamily: 'Montserrat', color: 'black' }}>Click here to know more</Text>
                    </View>

                    <View style={styles.bottomView}>
                        <Text style={{fontSize: 20, fontWeight: '500', fontFamily: 'Montserrat', color: 'black', marginTop:4}}>Support Project</Text>
                        <Ionicons name='logo-github' size={35} />
                        <Text style={{fontSize: 12, fontWeight: '400', fontFamily: 'Montserrat', color: 'black', marginBottom:10, textAlign:'center', marginTop:2}}>Made With 💗</Text>
                    </View>
                    <View style={{marginTop:30}}></View>
                </ScrollView>

            </View>


        </View>
    )
}

export default About

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
        height: 570,
        backgroundColor: '#B1E0FB',
        marginLeft: '5%',
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: 'column'

    },
    headView: {
        width: "90%",
        height: 70,
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: '5%'

    },
    secondView: {


        width: '90%',
        height: 450,
        marginTop: 40,
        marginLeft: '8%',
        // backgroundColor:'black',
        alignItems: 'center',
        marginRight:'3%'


    },
    bottomView:{
        width: '90%',
        height: 90,
        backgroundColor: '#5FCFF2',
        marginLeft: '5%',
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        borderRadius: 15,
        marginTop: 25,
        flexDirection: 'column',
   
        alignItems:'center'

    }
})