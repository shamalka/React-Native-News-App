import React from 'react';
import * as eva from '@eva-design/eva';
import Carousel from '../components/Carousel';
import { StyleSheet, Text, View } from 'react-native';
import NewsListItem from '../components/NewsListItem';
import NewsList from '../components/NewsList';

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


const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1 }}>
      <Carousel />
      <Text style={styles.latestNewsText}>Top Headlines</Text>
      <NewsList filters={{}} navigation={navigation} newsType={"headlines"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  latestNewsText: {
    color: 'black',
    fontSize: 27,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 10
  },
})

export default HomeScreen;