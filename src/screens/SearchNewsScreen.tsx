import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import Carousel from '../components/Carousel';
import { ActivityIndicator, Dimensions, ImageBackground, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import NewsListItem from '../components/NewsListItem';
import NewsList from '../components/NewsList';
import LinearGradient from 'react-native-linear-gradient';
import WebView from 'react-native-webview';
import { styled } from '@ui-kitten/components';
import Icon, { Icons } from '../components/Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../configs/colors';
const { width, height } = Dimensions.get('window');

const SearchNewsScreen = ({ route, navigation }: any) => {

    const [text, onChangeText] = useState("")
    const [keyword, setKeyword] = useState("a")
    const [modalVisible, setModalVisible] = useState(false);

    const onSubmitEditing = (event: any) => {
        setKeyword(event.nativeEvent.text)
    }

    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={styles.headingView}>
                <Text style={styles.latestNewsText}>Search News</Text>
            </View>
            <View style={styles.bodyView}>
                <View style={styles.searchBarView}>
                    <View style={styles.searchBar}>
                        <View style={styles.searchIconView}>
                            <Icon style={styles.searchIcon} type={Icons.MaterialCommunityIcons} name={'text-box-search-outline'} color={'#808B96'} />
                        </View>
                        <View style={styles.searchInputView}>
                            <TextInput
                                placeholder="Search news"
                                style={styles.searchInput}
                                onSubmitEditing={onSubmitEditing}
                                // value={text}
                                placeholderTextColor={"#808B96"}
                            />
                        </View>
                    </View>
                    <Pressable onPress={() => { setModalVisible(true) }} style={styles.searchFilters}>
                        <View >
                            <Icon style={styles.searchIcon} type={Icons.MaterialCommunityIcons} name={'filter-variant'} color={colors.white} size={28} />
                        </View>
                    </Pressable>
                </View>
                <View style={styles.newsView}>
                    <NewsList
                        filters={{
                            q: keyword,
                            sortBy: "publishedAt"
                        }}
                        navigation={navigation}
                        newsType={"filtered"}
                    />
                </View>
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    latestNewsText: {
        color: 'black',
        fontSize: 27,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    },
    headingView: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    bodyView: {
        flex: 7,
    },
    searchBarView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginRight: 10,
        marginLeft: 10
    },
    newsView: {
        flex: 7
    },
    searchBar: {
        flex: 5,
        height: 55,
        // margin: 10,
        borderRadius: 10,
        backgroundColor: '#EAEDED',
        // justifyContent: 'center',
        flexDirection: 'row'
    },
    searchFilters: {
        flex: 1,
        height: 55,
        // margin: 10,
        marginLeft: 10,
        borderRadius: 10,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIconView: {
        flex: 1,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        // margin: 5
    },
    searchInputView: {
        justifyContent: 'center',
        flex: 5
    },
    searchInput: {
        color: "#808B96",
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default SearchNewsScreen;