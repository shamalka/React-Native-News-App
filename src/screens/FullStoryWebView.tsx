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
const {width,height} = Dimensions.get('window');

const FullStoryWebView = ({ route, navigation }:any) => {

    console.log(route)

  return (
    <View style={{backgroundColor:'#fff', flex:1}}>
        <View style={styles.headingView}>

            <Text style={styles.headingText }>{"Full Story on " + route.params.source.name}</Text>
            {/* <View style={styles.sourceChip}>
                <Text style={styles.sourceChipText}>{"Full Story on " + route.params.source.name}</Text>
            </View> */}
        </View>
        <View style={{flex:8}}>
            <WebView
                    source={{
                    uri: route.params.url
                    }}
                    startInLoadingState={true}
                    renderLoading={() => <ActivityIndicator size="large" color="#aaa"/>}
                />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    headingView: {
        backgroundColor: 'white', 
        flex:1, 
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    headingText : {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default FullStoryWebView;