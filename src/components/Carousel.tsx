import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon, { Icons } from './Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Animatable from 'react-native-animatable';
import { View } from 'react-native';
import { Text } from 'react-native';
import { Image } from 'react-native';
const {width,height} = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { ImageBackground } from 'react-native';

const carouselData:any = [
    {
        title: "Panasonic Has New Battery That Will Make Tesla Cheaper, EVs Could Cost As Low As Rs 20 Lakh",
        description: "In the Electric Vehicle (EV) race, Tesla seems to have pulled ahead of its rivals. The Elon Musk-owned manufacturer has taken a lead in the US and European markets, making Tesla cars the most coveted EVs. But as the race to be numero uno heats up, Musk knows …",
        url: "https://www.channelnewsasia.com/business/tavares-confident-stellantis-can-catch-tesla-2558466",
        urlToImage: "https://www.stockvault.net/data/2011/02/06/117456/preview16.jpg",
        source: {
            id: null,
            name: "Yahoo Entertainment"
        },
    },
    {
        title: "Tavares confident that Stellantis can catch up with Tesla",
        description: "Stellantis <a href=\"https://www.reuters.com/companies/STLA.MI\" target=\"_blank\">(STLA.MI)</a> should be able to catch up with electric vehicle pioneer Tesla <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> in the coming years, it…",
        url: "https://finance.yahoo.com/news/tavares-confident-stellantis-catch-tesla-121131179.html",
        urlToImage: "https://www.reuters.com/resizer/qD3-hFivLaXhbD0GV89zoyOX6vE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/23JTGJQQKZJYPD37QO5R5GGDHE.jpg",
        source: {
            id: "newsweek",
            name: "Newsweek"
        },
    },
    {
        title: "Biden's Energy Policy is Helping Dictators and Harming Americans | Opinion",
        description: "As you watch the Biden administration fail, ask yourself: \"why Venezuela and not Texas? Why Iran and not Canada? Just how unwilling are they to help America?\"",
        url: "https://www.newsweek.com/bidens-energy-policy-helping-dictators-harming-americans-opinion-1686869",
        urlToImage: "https://d.newsweek.com/en/full/1999359/gas-prices.jpg",
        source: {
            id: null,
            name: "MarketWatch"
        },
    }
]

const carouselItem = ({ item }:any) => {
    console.log(item)
    return (
        // <TouchableOpacity>
        //     <Image source={{uri:item.urlToImage}} style={styles.image}/>
        //     <View style={styles.carouselFooter}>
        //         <Text style={styles.carouselTitle}>{item.title}</Text>
        //     </View>

        
            
        // </TouchableOpacity>
        <View style={styles.cardView}>
            <ImageBackground
                style={styles.image}
                source={{uri: item.urlToImage }}>
                <LinearGradient 
                    colors={['#00000000', '#000000']} 
                    style={{height : '100%', width : '100%'}}/>
            </ImageBackground>
            
            <View style={styles.textView}>
                <View style={styles.sourceChip}>
                    <Text style={styles.sourceChipText}>{item.source.name}</Text>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {/* <Text style={styles.itemDescription}>{item.description}</Text> */}
            </View>
            
        </View>
    );
}

const Carousel = () => {
  return (
      <View style={styles.carouselView}>
          <FlatList data={carouselData} renderItem={carouselItem} keyExtractor={(item, index) => index.toString()} horizontal showsHorizontalScrollIndicator={false} pagingEnabled/>
      </View>
  );
}

const styles = StyleSheet.create({
    // image: {
    //     width:width,
    //     height: 250,
    //     // marginVertical: 20,
    //     resizeMode: 'cover',
    //     // borderBottomLeftRadius: 30,
    //     // borderBottomRightRadius: 30
    // },
    carouselView: {
        // flex: 1,
        // height: '40%',
        backgroundColor: '#ffff'
    },
    carouselFooter: {
        width,
        flex: 2,
        backgroundColor: '#000',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    carouselTitle: {
        flex: 1,
        // width: width,
        color: '#fff',
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 5,
        marginTop: 5
    },

    cardView: {
        width,
        height: height / 3,
        backgroundColor: 'white',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },

    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        width: width,
        height: height / 3,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        overflow: 'hidden'
    },
    itemTitle: {
        color: 'white',
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemDescription: {
        color: 'white',
        fontSize: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5
    },
    sourceChip: {
        backgroundColor: '#000',
        alignSelf: 'flex-start',
        opacity: 0.6,
        borderRadius: 10,
        color: 'white',
        fontSize: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginBottom: 5,
        fontWeight: "bold",
        elevation: 5
    },
    sourceChipText: {
        color: 'white',
        fontSize: 12,
        margin: 6
    },
})

export default Carousel;