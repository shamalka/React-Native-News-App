import React, { useMemo, useState } from 'react';
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
import Collapsible from 'react-native-collapsible';
import EStyleSheet from 'react-native-extended-stylesheet';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
const { width, height } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / 380 });

const SearchNewsScreen = ({ route, navigation }: any) => {

    const [text, onChangeText] = useState("")
    const [keyword, setKeyword] = useState("a")
    const [isFromDatePickerVisible, setIsFromDatePickerVisible] = useState(false);
    const [isToDatePickerVisible, setIsToDatePickerVisible] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const [selectedValue, setSelectedValue] = useState("");
    const [sortBy, setSortBy] = useState("publishedAt")

    const onSubmitEditing = (event: any) => {
        setKeyword(event.nativeEvent.text)
    }

    const onClickFilters = () => {
        setIsCollapsed(!isCollapsed);
    }

    const onSortValueChange = (value: string) => {
        if (value) {
            setSelectedValue(value)
            switch (value) {
                case ("Relevancy"):
                    setSortBy("relevancy")
                    break;
                case ("Popularity"):
                    setSortBy("popularity")
                    break;
                default:
                    setSortBy("publishedAt")
            }
        }
    }

    const showFromDatePicker = () => {
        setIsFromDatePickerVisible(true);
    };

    const hideFromDatePicker = () => {
        setIsFromDatePickerVisible(false);
    };

    const handleFromConfirm = (date: any) => {
        hideFromDatePicker();
        showToDatePicker()
    };

    const showToDatePicker = () => {
        setIsToDatePickerVisible(true);
    };

    const hideToDatePicker = () => {
        setIsToDatePickerVisible(false);
    };

    const handleToConfirm = (date: any) => {
        hideToDatePicker();
    };

    const memoChild = useMemo(() => {
        return (
            <NewsList
                filters={{
                    q: keyword,
                    sortBy: sortBy
                }}
                navigation={navigation}
                newsType={"filtered"}
            />
        )
    }, [keyword, sortBy]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
            <View style={styles.headingView}>
                <Text style={styles.latestNewsText}>Search News</Text>
            </View>
            <View style={styles.searchBar}>
                <View style={styles.searchIconView}>
                    <Icon style={styles.searchIcon} type={Icons.MaterialCommunityIcons} name={'text-box-search-outline'} color={'#808B96'} />
                </View>
                <View style={styles.searchInputView}>
                    <TextInput
                        placeholder="Search news"
                        style={styles.searchInput}
                        onSubmitEditing={onSubmitEditing}
                        placeholderTextColor={"#808B96"}
                    />
                </View>
            </View>
            <View style={styles.filtersView}>
                <View style={styles.filterLabelItem}>
                    <Icon style={styles.filterIcon} type={Icons.SimpleLineIcons} name={'equalizer'} color={colors.white} />
                    <Text style={{ marginRight: 10, marginLeft: 5, fontSize: 10, color: colors.white }}>Filters</Text>
                </View>
                <ScrollView horizontal={true} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.filterItem}>
                        <RNPickerSelect
                            onValueChange={onSortValueChange}
                            items={[
                                { label: 'Relevancy', value: 'Relevancy' },
                                { label: 'Popularity', value: 'Popularity' },
                                { label: 'Published At', value: 'Published At' },
                            ]}
                        >
                            <Text style={{ margin: 10, fontSize: 10 }}>{"Sort News By " + selectedValue}</Text>
                        </RNPickerSelect>
                    </View>

                    <Pressable onPress={showFromDatePicker}>
                        <View style={styles.filterItem}>
                            <Text style={{ margin: 10, fontSize: 10 }}>From</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={showToDatePicker}>
                        <View style={styles.filterItem}>
                            <Text style={{ margin: 10, fontSize: 10 }}>To</Text>
                        </View>
                    </Pressable>
                    
                    <DateTimePickerModal
                        isVisible={isFromDatePickerVisible}
                        mode="date"
                        onConfirm={handleFromConfirm}
                        onCancel={hideFromDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isToDatePickerVisible}
                        mode="date"
                        onConfirm={handleToConfirm}
                        onCancel={hideToDatePicker}
                    />
                </ScrollView>
            </View>
            {memoChild}
        </SafeAreaView>
    );
}

const styles = EStyleSheet.create({
    latestNewsText: {
        color: 'black',
        fontSize: 27,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10
    },
    headingView: {
        justifyContent: 'flex-end'
    },
    filtersView: {
        flexDirection: 'row',
        marginRight: 10,
        marginLeft: 10,
    },
    searchBar: {
        height: 40,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#EAEDED',
        flexDirection: 'row'
    },
    searchIconView: {
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchIcon: {
        // margin: 5
    },
    searchInputView: {
        justifyContent: 'center',
        marginLeft: 10
    },
    searchInput: {
        color: "#808B96",
    },
    filterItem: {
        opacity: 0.7,
        backgroundColor: colors.grey,
        borderRadius: 10,
        marginBottom: "5rem",
        marginTop: "5rem",
        marginRight: "5rem",
        alignItems: 'center'
    },
    filterLabelItem: {
        backgroundColor: colors.blue,
        borderRadius: 10,
        marginBottom: "5rem",
        marginTop: "5rem",
        marginRight: "5rem",
        alignItems: 'center',
        flexDirection: 'row'
    },
    filterIcon: {
        marginLeft: "10rem",
        fontSize: 16
    }
})

export default SearchNewsScreen;