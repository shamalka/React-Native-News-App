import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { Dimensions, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon, { Icons } from './Icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import * as Animatable from 'react-native-animatable';
import SearchNewsScreen from '../screens/SearchNewsScreen';
import EStyleSheet from 'react-native-extended-stylesheet';
const { width, height } = Dimensions.get('window');
EStyleSheet.build({$rem: width / 380});

const Tab = createBottomTabNavigator();

const tabsArray = [
    { route: 'Home', label: 'Home', type: Icons.MaterialCommunityIcons, activeIcon: 'newspaper', inActiveIcon: 'newspaper-outline', component: HomeScreen },
    { route: 'SearchNews', label: 'SearchNews', type: Icons.MaterialCommunityIcons, activeIcon: 'text-box-search', inActiveIcon: 'text-box-search-outline', component: SearchNewsScreen },
    { route: 'Like', label: 'Like', type: Icons.MaterialCommunityIcons, activeIcon: 'fire', inActiveIcon: 'fire-outline', component: SettingsScreen },
    { route: 'Search', label: 'Search', type: Icons.MaterialCommunityIcons, activeIcon: 'menu', inActiveIcon: 'menu-outline', component: HomeScreen },
]

const TabBarButton = (props: any) => {
    const { tab, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const animRef: any = useRef(null);

    useEffect(() => {
        if (focused) {
            animRef.current.animate({ 0: { scale: 1 }, 1: { scale: 1.5 } })
        } else {
            animRef.current.animate({ 0: { scale: 1.5 }, 1: { scale: 1 } })
        }
    }, [focused])

    return (
        <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={1}>
            <Animatable.View ref={animRef} duration={600} style={styles.container}>
                <Icon type={tab.type} name={tab.activeIcon} color={focused ? Colors.primary : Colors.primaryLite} style={styles.icon}/>
            </Animatable.View>
        </TouchableOpacity>
    )
}

const BottomTabMenu = () => {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBarStyle
        }}>
            {tabsArray.map((tab, index) => {
                return <Tab.Screen key={index} name={tab.route} component={tab.component} options={{
                    tabBarShowLabel: false,
                    tabBarButton: (props) => <TabBarButton {...props} tab={tab} />
                }} />
            })}
        </Tab.Navigator>
        //   <NavigationContainer>
        //       <Tab.Navigator screenOptions={{
        //           headerShown:false,
        //           tabBarStyle:{
        //               height: 55,
        //               borderTopLeftRadius:10,
        //               borderTopRightRadius:10,
        //               position: 'absolute',
        //           }
        //       }}>
        //       {tabsArray.map((tab, index) => {
        //           return <Tab.Screen key={index} name={tab.route} component={tab.component} options={{
        //               tabBarShowLabel: false,
        //               tabBarButton: (props) => <TabBarButton {...props} tab={tab}/>
        //           }}/>
        //       })}
        //   </Tab.Navigator>
        //   </NavigationContainer>
    );
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {fontSize: '24rem'},
    tabBarStyle: {
        height: "55rem",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        position: 'absolute',
    }
})

export default BottomTabMenu;