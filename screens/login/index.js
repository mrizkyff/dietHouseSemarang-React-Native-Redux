import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Input, Item, Icon, Button } from "native-base"
import { TouchableOpacity } from 'react-native-gesture-handler'
import axios from 'axios'

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
const FormLogin = () => {

    // initial state
    const initialState = {
        username: '',
        password: '',
    }

    // membuat state dengan usestate
    const [user, setuser] = useState(initialState)

    // fungsi untuk login
    const loginUser = (user) => {
        axios
            .post('http://192.168.8.104/restApi-dietHouseSemarang/api/login', {
                username: user.username,
                password: user.password,
            })
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                alert('login berhasil!');
                // setdata(response.data.data)
                // console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                // alert('Finally called');
                // alert(data);
                // console.log(data);
                setuser(initialState);

                // getDataUsingSimpleGetCall();
            });
        // alert('halo'+user.username)
    };

    return (
        <View style={styles.FormLogin}>
            {/* <Text>Form Login</Text> */}
            <Item regular style={{ borderColor: '#696969', backgroundColor: '#808080', height: 50 }}>
                <Input placeholder='Username' placeholderTextColor='#EEEEEE' style={{ color: '#EEEEEE', fontSize: 20 }} onChangeText={(text) => setuser({ ...user, username: text })} />
                <Icon type="FontAwesome" name="envelope" style={{ color: '#EEEEEE', fontSize: 20 }} />
            </Item>
            <Item regular style={{ borderColor: '#696969', backgroundColor: '#808080', height: 50, marginTop: 20 }}>
                <Input placeholder='Password' secureTextEntry={true} placeholderTextColor='#EEEEEE' style={{ color: '#EEEEEE', fontSize: 20 }} onChangeText={(text) => setuser({ ...user, password: text })} />
                <Icon type="FontAwesome" name="lock" style={{ color: '#EEEEEE', fontSize: 20 }} />
            </Item>
            <TouchableOpacity style={{ marginTop: 9 }}>
                <Text style={{ fontSize: 19, textAlign: 'right', color: '#EEEEEE' }}>Lupa Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 40, backgroundColor: '#FFBF57', padding: 15, borderRadius: 5 }} onPress={() => loginUser(user)}>
                <Text style={{ color: '#EEEEEE', fontSize: 20, fontWeight: '600', alignSelf: 'center', textAlign: 'center' }}>MASUK</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#696969', padding: 15, borderRadius: 5, borderColor: '#FFBF57', borderWidth: 1 }}>
                <Text style={{ color: '#EEEEEE', fontSize: 20, fontWeight: '600', alignSelf: 'center', textAlign: 'center' }}>Belum punya akun? DAFTAR</Text>
            </TouchableOpacity>
            <Text>{'inputan user: ' + user.username + user.password}</Text>
        </View >
    )
}

const Login = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <FormLogin />
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
        marginTop: 130,
    },
    FormLogin: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 90,
    }
})
export default Login
