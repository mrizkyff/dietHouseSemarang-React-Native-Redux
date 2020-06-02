import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Input, Item, Icon, Button, Label } from "native-base"
import { TouchableOpacity } from 'react-native-gesture-handler'

// KOMPONEN
// logo
const Logo = () => {
    return (
        <View style={styles.viewLogo}>
            <Image source={require('./logo_dhs.png')} style={styles.pictLogo} />
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginLeft: 10, fontSize: 25, color: 'white' }}>Diet House Semarang</Text>
                <Text style={{ marginLeft: 10, fontSize: 20, color: 'white' }}>Artisan Food</Text>
            </View>
        </View>
    )
}

// form
const FormRegister = () => {
    return (
        <View style={styles.FormRegister}>
            {/* <Text>Form Login</Text> */}
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Nama Depan</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Nama Belakang</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Username</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Password</Label>
                <Input secureTextEntry={true} style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Email</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Telp.</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <Item floatingLabel style={{ marginTop: 10 }}>
                <Label style={{ color: '#EEEEEE', fontSize: 18, }}>Alamat</Label>
                <Input style={{ color: '#eeeeee', fontSize: 20 }} />
            </Item>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#FFBF57', padding: 15, borderRadius: 5 }}>
                <Text style={{ color: '#EEEEEE', fontSize: 20, fontWeight: '600', alignSelf: 'center', textAlign: 'center' }}>MASUK</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignSelf:'center', marginTop: 15}}>
                <Text style={{fontSize: 20, color: '#EEEEEE'}}>Sudah punya akun?</Text>
                <TouchableOpacity>
                    <Text style={{fontSize: 20, color: '#FFBF57'}}> Login</Text>
                </TouchableOpacity>
            </View>

        </View >
    )
}

const RegisterScreen = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <FormRegister />
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
        alignItems: 'center',
        marginTop: 20,
    },
    FormRegister: {
        width: '90%',
        alignSelf: 'center',
    }
})
export default RegisterScreen
