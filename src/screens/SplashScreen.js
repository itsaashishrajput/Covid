import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
// import font from '../../assets/fonts/RussoOne-Regular.ttf'


const SplashScreen = () => {
    return (
        <View style={styles.splashWrapper}>
            <StatusBar style='dark' backgroundColor="#B5ECFD" />
            <Image style={styles.icon} source={require("../../assets/icon.png")} />
            <Text style={styles.mainHeading}>COVID-19</Text>
            <Text style={styles.subHeading}>Info you need to know</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    splashWrapper: {
        marginTop:-80,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DEF7FF",
      },
      icon: {
        width: 200,
        height: 200,
      },
      mainHeading:{
        width:186,
        height:48,
        fontSize:40,
        color:'red',
        fontWeight: 'bold',
        marginTop: -40,
        // fontFamily: 'RussoOne-Regular',

      },
      subHeading:{
        width: 168,
        height:20,
        color: 'black',
        fontSize: 15,
        fontWeight:'400',
        marginLeft:15,
      }

})