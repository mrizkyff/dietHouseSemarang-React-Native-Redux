import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3 } from "native-base";
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";


const SearchBar = () => {
    return (
        <View style={styles.searchBar}>
            <Card>
                <CardItem>
                    <Body>
                        <Item regular style={{ height: 25, borderColor: 'white' }}>
                            <Input placeholder='Cari menu kesukaan anda ...' placeholderTextColor='#696969' style={{ color: '#696969', fontSize: 17 }} />
                            <TouchableOpacity>
                                <Icon type="FontAwesome" name="search" style={{ color: '#696969', fontSize: 20 }} />
                            </TouchableOpacity>
                        </Item>
                    </Body>
                </CardItem>
            </Card>
        </View>
    )
}


const mainScreen = () => {


    const [banner, setbanner] = useState([]);

    useEffect(() => {
        getDataUsingSimpleGetCall();
    }, [])

    const getDataUsingSimpleGetCall = () => {
        axios
            .get('http://192.168.8.104/restApi-dietHouseSemarang/api/banner/banner')
            .then(function (response) {
                // handle success
                // alert(JSON.stringify(response.data));
                setbanner(response.data.data)
                // console.log(JSON.stringify(response.data))
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                alert('Finally called');
                // alert(data);
                console.log(banner);

            });
    };

    return (
        <View style={styles.container}>

            <StatusBar barStyle='dark-content' />

            <SearchBar />

            {/* awal komponen banner */}
            <View style={styles.bannerTop}>
                <Card>
                    <CardItem>
                        <Body>
                            <Text style={{ color: '#696969', fontSize: 17, fontFamily: 'droid-sans' }}>Apa yang baru?</Text>
                            <FlatList
                                horizontal
                                data={banner}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) => (
                                    <View>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Image
                                                        style={{ width: 230, height: 100, resizeMode: 'cover' }}
                                                        source={{
                                                            uri: `http://192.168.8.104/restApi-dietHouseSemarang/asset/img/banner/${item.picture}`,
                                                        }}
                                                    />
                                                    <Text style={{ color: '#696969', fontFamily: 'droid-sans' }}>{item.captions}</Text>
                                                </Body>
                                            </CardItem>
                                        </Card>
                                    </View>
                                )}
                            />
                        </Body>
                    </CardItem>
                </Card>
            </View>
            {/* akhir komponen banner */}

            {/* bagian bottom navigator */}

            {/* akhir bagian bottom navigator */}

            <Text> halaman mainScreen </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    searchBar: {
        width: '95%',
        top: 20,
        height: 50,
    },
    bannerTop: {
        width: '95%',
        top: -195,
    }
})

export default mainScreen
