import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'


const CustomDrawer = (props) => {
    return (
        <View style={{width:'100%',height:400,backgroundColor:'#DEF7FF', paddingTop:40,paddingHorizontal:20,}}>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />

            </DrawerContentScrollView>
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})