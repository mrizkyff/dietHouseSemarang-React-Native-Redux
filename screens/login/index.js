import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

// KOMPONEN
// logo
const Logo = () => {
    return (
        <View style={styles.viewLogo}>
            <Image source={require('./logo_dhs.png')} style={styles.pictLogo} />
            <View style={{flexDirection: 'column'}}>
                <Text style={{ marginLeft: 10, fontSize: 25, color: 'white' }}>Diet House Semarang</Text>
                <Text style={{ marginLeft: 10, fontSize: 15, color: 'white' }}>Artisan Food</Text>
            </View>
        </View>
    )
}

const Login = () => {
    return (
        <View style={styles.container}>
            <Logo />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#696969',
        flex: 1,

    },
    pictLogo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    viewLogo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: 'red',
        alignItems: 'center'
    }
})
export default Login
