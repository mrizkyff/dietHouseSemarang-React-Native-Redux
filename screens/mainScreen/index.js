import React, { Component, useState, useEffect } from 'react'
import { Text, View, StatusBar, StyleSheet, FlatList, Image } from 'react-native'
import { Card, CardItem, Body, Item, Input, Icon, H3} from "native-base";
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
                <Text style={{color: '#696969', fontSize: 17}}>Apa yang baru?</Text>
                <Card>
                    <CardItem>
                        <Body>
                            <FlatList
                                horizontal
                                data={banner}
                                keyExtractor={({ id }, index) => id}
                                renderItem={({ item }) => (
                                    <View>
                                        {/* <Text>{item.picture},{item.id}</Text> */}
                                        <Image
                                            style={{ width: 230, height: 100, resizeMode: 'cover', marginLeft: 5, marginRight: 5}}
                                            source={{
                                                uri: `http://192.168.8.104/restApi-dietHouseSemarang/asset/img/banner/${item.picture}`,
                                            }}
                                        />
                                    </View>
                                )}
                            />
                        </Body>
                    </CardItem>
                </Card>
            </View>
            {/* akhir komponen banner */}

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
        top: -200,
    }
})

export default mainScreen
