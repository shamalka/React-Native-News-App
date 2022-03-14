import React from 'react';
import * as eva from '@eva-design/eva';
import Carousel from '../components/Carousel';
import { ActivityIndicator, Dimensions, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import NewsListItem from '../components/NewsListItem';
import NewsList from '../components/NewsList';
import LinearGradient from 'react-native-linear-gradient';
import WebView from 'react-native-webview';
import { styled } from '@ui-kitten/components';
import Icon, { Icons } from '../components/Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../configs/colors';
const { width, height } = Dimensions.get('window');

const carouselData: any = [
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

const avatarColors = ['#EC7063', '#C39BD3', '#5DADE2', '#48C9B0', '#F4D03F ']


const SingleNewsScreen = ({ route, navigation }: any) => {

    const colorStyles = {
        backgroundColor: avatarColors[Math.floor(Math.random() * (3 + 1))],
    };

    console.log('rrrrr', navigation)

    const { item } = route.params;

    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    };
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <ImageBackground
                style={styles.image}
                source={{ uri: item.urlToImage }}>
                <LinearGradient colors={['#00000000', '#000000']} style={{ height: '100%', width: '100%', flex: 1 }}>
                    <View style={styles.itemTitleView}>
                        <View style={styles.sourceChip}>
                            <Text style={styles.sourceChipText}>{item.source.name}</Text>
                        </View>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                    </View>
                    <View style={styles.singleNewsView}>
                        <View style={styles.author}>
                            <View style={styles.authorAvatarContainer}>
                                <View style={[styles.authorAvatar, colorStyles]}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.authorAvatarText}>{item.author && item.author[0].toUpperCase()}</Text>
                                </View>
                                <View style={styles.authorNameTextView}>
                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.authorNameText}>{item.author ? item.author : "N/A"}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.actionButtons}>
                            <View style={styles.favioriteButton}>
                                <Icon type={Icons.MaterialCommunityIcons} name={'cards-heart-outline'} color={colors.white} />
                            </View>
                            <View style={styles.shareButton}>
                                <Icon type={Icons.MaterialCommunityIcons} name={'share-variant-outline'} color={colors.white} />
                            </View>
                        </View>
                        {/* <Text style={styles.itemTitle}>{route.params.title}</Text> */}
                    </View>
                </LinearGradient>
            </ImageBackground>
            <View style={styles.newsDescriptitonView}>
                <Text style={styles.itemDescription}>{item.content}</Text>
                <View style={styles.fullStoryButtonView}>
                    <Pressable onPress={() => { navigation.navigate("FullStoryWebView", item) }}>
                        <View style={styles.fullStoryButton}>
                            <Text style={styles.fullStoryText}>Read full story</Text>
                        </View>
                    </Pressable>
                </View>
                {/* <View>
                <WebView
                    source={{
                    uri: route.params.url
                    }}
                    style={{ marginTop: 20 }}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator size="large" color="#aaa"/>}
                />
            </View> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 2,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        overflow: 'hidden'
    },
    singleNewsView: {
        flex: 1,
        // marginTop: height/3.5,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    newsDescriptitonView: {
        flex: 1.5,
        margin: 10,
    },
    itemTitle: {
        // flex:4,
        color: 'white',
        fontSize: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0.8, height: 0.8 },
        shadowOpacity: 1,
        shadowRadius: 3,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        fontWeight: "bold",
        elevation: 5
    },
    itemTitleView: {
        flex: 4,
        justifyContent: 'flex-end',
        marginBottom: 10
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
        // marginBottom: 5,
        fontWeight: "bold",
        elevation: 5,
        marginLeft: 15
    },
    sourceChipText: {
        color: 'white',
        fontSize: 12,
        margin: 6
    },
    itemDescription: {
        color: 'black',
        fontSize: 15,
        flex: 2
    },
    author: {
        flex: 2,
        alignContent: 'stretch',
    },
    authorAvatarContainer: {
        // width: 150,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 50,
        // marginTop: 8,
        marginRight: 10,
        marginLeft: 10,
        elevation: 5,
        flexDirection: 'row'
    },
    authorAvatar: {
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    actionButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    favioriteButton: {
        width: 50,
        height: 50,
        backgroundColor: colors.red,
        borderRadius: 50,
        // marginTop: 5,
        marginRight: 5,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareButton: {
        width: 50,
        height: 50,
        backgroundColor: colors.green,
        borderRadius: 50,
        // marginTop: 5,
        marginRight: 10,
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    authorNameTextView: {
        // width: width / 2,
        justifyContent: 'center',
        marginLeft: 5,
    },
    authorNameText: {
        marginRight: 10,
    },
    authorAvatarText: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    fullStoryButton: {
        backgroundColor: colors.dark,
        width: 150,
        height: 50,
        borderRadius: 30,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    fullStoryButtonView: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fullStoryText: {
        color: colors.white,
        fontWeight: 'bold'
    },
})

export default SingleNewsScreen;