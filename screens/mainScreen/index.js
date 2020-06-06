import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet } from 'react-native'

export class mainScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='dark-content'/>
                <Text> halaman mainScreen </Text>
                <Text> halaman mainScreen </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    }
})

export default mainScreen
