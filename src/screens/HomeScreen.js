import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Ionicons from '@expo/vector-icons/Ionicons';
import fontRusso from '../../assets/fonts/RussoOne-Regular.ttf'

const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const [indiaData, setIndiaData] = useState([]);

    const getWorld = async () => {
        try {
            const response = await fetch('https://disease.sh/v3/covid-19/all');
            const data1 = await response.json();

            setData(data1);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getWorld();
    }, []);


    const getIndia = async () => {
        try {
            const response = await fetch('https://disease.sh/v3/covid-19/countries/india');
            const data2 = await response.json();

            setIndiaData(data2);
             console.log(indiaData.countryInfo[0]._id);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getIndia();
    }, []);


    // Affected Data

    const [affectData, setAffectData] = useState([]);

    const getAffected = async () => {
        try {
            const response = await fetch('https://disease.sh/v3/covid-19/countries');
            const data3 = await response.json();
            data3.sort((a, b) => a.cases < b.cases ? 1 : -1);
            console.log('X');
            data3.slice(1, 20);
            //  console.log(data3);

            setAffectData(data3);
            //  console.log(data3);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAffected();
    }, []);

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
                    <View style={{ marginBottom: 50 }}>
                        <View style={styles.title}>
                            <View style={styles.imageTitle}>
                                <Image source={require('../../assets/icon.png')} style={{ width: 60, height: 60 }} />

                            </View>
                            <View style={styles.headTitle}>
                                <Text style={styles.headlineText}>COVID-19</Text>

                            </View>

                        </View>

                        <View></View>
                        <View style={styles.worldCard}>
                            <View style={styles.worldImage}>
                                <Ionicons name="globe" size={20} color='black' style={{ marginLeft: '48%' }} />
                                <Text style={{ fontSize: 10, marginLeft: '10%', marginTop: 5 }}>Last Updated: {data.updated}</Text>

                            </View>
                            <View style={styles.firstRow}>
                                <View style={styles.totalCases}>

                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Total Cases</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{data.cases}</Text>


                                </View>
                                <View style={styles.totalDeaths}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Total Deaths</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{data.deaths}</Text>

                                </View>
                                <View style={styles.totalRecover}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Total Recover</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{data.recovered}</Text>

                                </View>
                            </View>
                            <View style={styles.secondRow}>
                                <View style={styles.totalCases}>

                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>New Cases</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{data.todayCases}</Text>


                                </View>
                                <View style={styles.totalDeaths}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Serious</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{data.critical}</Text>

                                </View>
                                <View style={styles.totalRecover}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Deaths Today</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{data.todayDeaths}</Text>

                                </View>

                            </View>

                        </View>
                        <View style={styles.indiaCard}>
                            <View style={styles.indiaImage}>
                                <Text style={{ fontSize: 15, marginLeft: '48%' }}>🏁</Text>
                                <Text style={{ fontSize: 10, marginLeft: '10%', marginTop: 5 }}>Last Updated: {indiaData.updated}</Text>
                            </View>
                            <View style={styles.firstRow}>
                                <View style={styles.totalCases}>

                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Total Cases</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{indiaData.cases}</Text>


                                </View>
                                <View style={styles.totalDeaths}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Total Deaths</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{indiaData.deaths}</Text>

                                </View>
                                <View style={styles.totalRecover}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Total Recover</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{indiaData.recovered}</Text>

                                </View>
                            </View>
                            <View style={styles.secondRow}>
                                <View style={styles.totalCases}>

                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>New Cases</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{indiaData.todayCases}</Text>


                                </View>
                                <View style={styles.totalDeaths}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Serious</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{indiaData.critical}</Text>

                                </View>
                                <View style={styles.totalRecover}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Montserrat', fontWeight: '500', marginTop: 3 }}>Deaths Today</Text>

                                    <Text style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat',
                                        fontWeight: '600',
                                        marginTop: 10
                                    }}>{indiaData.todayDeaths}</Text>

                                </View>

                            </View>

                        </View>
                        <View style={styles.affectedTitle}>
                            <Text style={styles.affectTextStyle}>Top Affected Countries</Text>
                        </View>
                        <View style={styles.affectedCard}>
                            <View style={styles.upperView}>
                                <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: 15,
                                        fontWeight: '600'
                                    }}>Country</Text>
                                </View>
                                <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: 15,
                                        fontWeight: '600'
                                    }}>Cases</Text>
                                </View>
                                <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: 15,
                                        fontWeight: '600'
                                    }}>Deaths</Text>
                                </View>
                                <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{
                                        fontFamily: 'Montserrat',
                                        fontSize: 15,
                                        fontWeight: '600'
                                    }}>Recovered</Text>
                                </View>


                            </View>

                            <FlatList
                                data={affectData.slice(0, 9)}
                                renderItem={({ item }) => (

                                    <View style={styles.listView}>
                                        <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{
                                                fontFamily: 'Montserrat',
                                                fontSize: 15,
                                                fontWeight: '400',
                                                textAlign:'left'
                                            }}>{item.country}</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{
                                                fontFamily: 'Montserrat',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>{item.cases}</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{
                                                fontFamily: 'Montserrat',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>{item.deaths}</Text>
                                        </View>
                                        <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{
                                                fontFamily: 'Montserrat',
                                                fontSize: 15,
                                                fontWeight: '400'
                                            }}>{item.recovered}</Text>
                                        </View>


                                    </View>

                                )}


                            />

                        </View>

                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen

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
    }, title: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
    ,
    imageTitle: {
        width: 50,
        height: 50,
        marginRight: -10,

        justifyContent: 'center',
        alignItems: 'center',

    }
    ,
    headTitle: {
        width: 117,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',

    },
    headlineText: {
        fontSize: 25,
        color: '#D41D3E',
        textAlign: 'left',
        fontFamily: 'fontRusso',
        fontWeight: '700',
        marginLeft: -10,
    },
    worldCard: {
        width: '90%',
        height: 180,
        backgroundColor: '#B1ECFF',
        marginLeft: '5%',
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        borderRadius: 15,
        marginTop: 5,

    },
    indiaCard: {
        width: '90%',
        height: 180,
        backgroundColor: '#FFC692',
        marginLeft: '5%',
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        borderRadius: 15,
        marginTop: 30,

    },
    affectedTitle: {
        width: '70%',
        height: 28,
        marginLeft: '15%',
        // backgroundColor:'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    affectTextStyle: {
        fontSize: 23,
        fontWeight: '900',
        fontFamily: 'Montserrat',
        color: '#000000',
        textAlign: 'left'

    },
    affectedCard: {
        width: '90%',
        height: 310,
        backgroundColor: '#B1ECFF',
        marginLeft: '5%',
        elevation: 2,
        shadowRadius: 2,
        shadowOpacity: 0.1,
        borderRadius: 15,
        marginTop: 20,
        flexDirection: 'column',
        marginBottom: 10,

    },
    worldImage: {
        flexDirection: 'row',
        // justifyContent:"center"
        marginTop: 5,
    },
    indiaImage: {
        flexDirection: 'row',
        // justifyContent:"center"
        marginTop: 5,
    },
    firstRow: {
        width: '94%',
        height: 55,
        // backgroundColor: 'black',
        marginLeft: '1%',
        marginTop: 13,
        flexDirection: 'row',
        justifyContent: 'center',

    },
    secondRow: {
        width: '94%',
        height: 55,
        // backgroundColor: 'black',
        marginLeft: '1%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    totalCases: {
        width: '30%',
        marginLeft: '2%',
        height: 55,
        // backgroundColor: 'red',
        alignItems: 'center',
    },
    totalDeaths: {
        width: '30%',
        marginLeft: '3%',
        height: 55,
        // backgroundColor: 'red',
        alignItems: 'center',

    },
    totalRecover: {
        width: '30%',
        marginLeft: '3%',
        height: 55,
        // backgroundColor: 'red',
        alignItems: 'center'
    },
    upperView: {
        flexDirection: 'row',
        width: '92%',
        height: 18,
        // backgroundColor:'black',
        marginLeft: '3%',
        marginRight: '4%',
        marginTop: 13,
        marginBottom:13,
    },
    listView: {
        flexDirection: 'row',
        width: '92%',
        height: 18,
        // backgroundColor:'black',
        marginLeft: '3%',
        marginRight: '4%',
        marginTop: 10,
    },



})