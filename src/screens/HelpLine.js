import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import fontRusso from '../../assets/fonts/RussoOne-Regular.ttf'

const HelpLine = () => {
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
            </View>
        </View>
    )
}

export default HelpLine

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
})