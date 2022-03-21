import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Dimensions, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon, { Icons } from './Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Animatable from 'react-native-animatable';
import { Card } from '@ui-kitten/components';
import moment from 'moment';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window');
EStyleSheet.build({$rem: width / 380});

const NewsListItem = ({ item, navigation }: any) => {
    return (
        <Pressable onPress={() => { navigation.navigate("SingleNewsScreen", { item }) }}>
            <View style={styles.newsListItem}>
                <Image source={{ uri: item.urlToImage }} style={styles.image} />
                <View style={{ flex: 1 }}>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.newsItemTitle}>{item.title}</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 10 }}>
                        <View style={styles.sourceChip}>
                            <Text style={styles.sourceChipText}>{item.source.name}</Text>
                        </View>
                        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.newsItemDescription}>{moment(item.publishedAt).fromNow()}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const styles = EStyleSheet.create({
    newsListItem: {
        height: "110rem",
        borderRadius: 10,
        margin: 10,
        backgroundColor: 'white',
        elevation: 5,
        flexDirection: 'row'
    },
    image: {
        width: "110rem",
        height: "110rem",
        // borderTopLeftRadius: 10,
        // borderBottomLeftRadius: 10
        borderRadius: 10,
    },
    newsItemTitle: {
        color: 'black',
        fontSize: "17rem",
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    newsItemDescription: {
        color: 'gray',
        fontSize: "12rem",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    sourceChip: {
        backgroundColor: '#000',
        opacity: 0.2,
        borderRadius: 11,
    },
    sourceChipText: {
        color: 'black',
        fontSize: "11rem",
        margin: 6
    },
})

export default NewsListItem;