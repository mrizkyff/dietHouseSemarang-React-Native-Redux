import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Text, Form, Input, Item, Label, Icon } from 'native-base'
const LoginScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent:'center', position: 'relative'}}>
            {/* <Image source={{ uri: 'http://192.168.8.104/restApi-dietHouseSemarang/asset/img/topLogin.png' }}
                style={{ width: 390, height: 300, marginLeft: -10, marginTop: -30 }} /> */}
            <View style={{ top: -400, marginLeft: 10 }}>
                <Image source={require('./topLogin.png')} style={{ width: 390, height: 250, marginLeft: -10, marginTop: 0, resizeMode: 'stretch' }} />
                <View style={{marginTop:-170}}>
                    <Text style={{ color: 'white', fontSize: 50, fontFamily: 'droid-sans' }}>Selamat siang!</Text>
                    <Text style={{ color: 'white', fontFamily: 'montserrat', fontSize: 20 }}>Sudah siap untuk menjadi sehat?</Text>
                    <Text style={{ color: 'white', fontFamily: 'nunito-sans', fontSize: 20, marginTop: -3 }}>Banyak menu sehat menanti.</Text>
                </View>
            </View>

            <View style={{ marginLeft: 125, marginBottom: -850 }}>
                <Image source={require('./loginBottom.png')} style={{ width: 250, height: 150, resizeMode: 'stretch' }} />
            </View>
            
            <View style={{alignItems: 'center', top: 340}}>
                <Card style={{ width: 350, height: 450 }}>
                    <CardItem>
                        <Body>
                            <Form style={{ width: 300 }}>
                                <Text style={{ fontSize: 30, fontFamily: 'droid-sans', textAlign: 'center', marginTop: 5 }}>LOGIN</Text>
                                <Item floatingLabel last>
                                    <Label style={{ marginTop: -10 }}><Icon type="FontAwesome" name="user" />   Username</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label style={{ marginTop: -10 }}><Icon type="FontAwesome" name="key" />  Password</Label>
                                    <Input />
                                </Item>
                                <TouchableOpacity style={{ backgroundColor: '#ffbf57', padding: 15, marginTop: 30, borderRadius: 3 }}>
                                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'montserrat', textAlign: 'center' }}>Masuk  <Icon type="FontAwesome" name="sign-in" style={{ color: 'white' }} /></Text>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 18, textAlign: 'center', fontFamily: 'nunito-sans', marginTop: 10, textDecorationLine: 'underline' }}> Lupa Password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#696969', padding: 15, marginTop: 60, borderRadius: 3 }}>
                                    <Text style={{ color: 'white', fontSize: 20, fontFamily: 'montserrat', textAlign: 'center' }}>Daftar Sekarang</Text>
                                </TouchableOpacity>
                            </Form>
                        </Body>
                    </CardItem>
                </Card>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})
