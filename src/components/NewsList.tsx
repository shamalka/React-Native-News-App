import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon, { Icons } from './Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Animatable from 'react-native-animatable';
import { Card } from '@ui-kitten/components';
import axios from 'axios';
import NewsListItem from './NewsListItem';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';
// import { setNewsData } from '../redux/actions';

const NewsList = ({ filters, navigation, newsType }: any) => {

  // const newsData = useSelector((state: RootStateOrAny) => state.newsReducer);
  const dispatch = useDispatch();

  const [newsData, setNewsData]: any = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    if (newsType === "headlines") {
      getNewsTopHeadlines();
    } else {
      getFilteredNews(false)
    }

  }, [currentPage])

  useEffect(() => {
    setNewsData([])
    getFilteredNews(true)
  }, [filters])

  const getNewsTopHeadlines = () => {
    setIsLoading(true)
    let encodedFilters = Object.keys(filters)
      .map(key => key + '=' + filters[key])
      .join('&');

    const baseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=abea547610574087a1e427a8be1cbc27&page=" + currentPage + "&pageSize=10&" + encodedFilters;
    // const baseUrl = "https://run.mocky.io/v3/32ac4c3e-960e-453c-8997-06b2df3e227f";

    axios.get(baseUrl).then((response) => {
      if (response.data.articles.length > 0) {
        // dispatch(setNewsData([...newsData.newsData, ...response.data.articles]))
        setNewsData([...newsData, ...response.data.articles]);
      } else {
        setIsEmpty(true)
      }
      setIsLoading(false)
    }).catch(error => {
      setIsLoading(false)
    });
  }

  const getFilteredNews = (isSearch:boolean) => {
    setIsLoading(true)
    let encodedFilters = Object.keys(filters)
      .map(key => key + '=' + filters[key])
      .join('&');

    const baseUrl = "https://newsapi.org/v2/everything?apiKey=abea547610574087a1e427a8be1cbc27&page=" + currentPage + "&pageSize=10&" + encodedFilters;
    // const baseUrl = "https://run.mocky.io/v3/32ac4c3e-960e-453c-8997-06b2df3e227f";

    axios.get(baseUrl).then((response) => {
      if (response.data.articles.length > 0) {
        // dispatch(setNewsData([...newsData.newsData, ...response.data.articles]))
        if(isSearch){
          setNewsData(response.data.articles);
        }else{
          setNewsData([...newsData, ...response.data.articles]);
        }
        
      } else {
        setIsEmpty(true)
      }
      setIsLoading(false)
    }).catch(error => {
      setIsLoading(false)
    });
  }

  const footerLoader = () => {
    return (
      !isEmpty ?
        <View style={styles.footerLoader}>
          <ActivityIndicator size="large" color="#aaa" />
        </View> :
        <View style={styles.footerLoader}>
          <Text>No more data</Text>
        </View>
    )
  }

  const onEndReached = () => {
    if (!isLoading && !isEmpty) {
      setCurrentPage(currentPage + 1)
    }
  }

  const renderItem = ({ item }: any) => <NewsListItem item={item} navigation={navigation} />

  return (
    <View style={{ backgroundColor: '#fff', flex: 1, marginBottom: 45 }}>
      <FlatList data={newsData} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} ListFooterComponent={footerLoader} onEndReached={onEndReached} onEndReachedThreshold={0.5} maxToRenderPerBatch={10} />
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
  footerLoader: {
    marginVertical: 16,
    alignItems: 'center'
  }
})

export default NewsList;