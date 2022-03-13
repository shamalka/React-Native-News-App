import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Layout, Text } from '@ui-kitten/components';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const UsersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>USERS</Text>
  </Layout>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category='h1'>ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }:any) => (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={index => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title='Home'/>
      <BottomNavigationTab title='Latest News'/>
      <BottomNavigationTab title='Settings'/>
    </BottomNavigation>
  );
  
  const TabNavigator = () => (
    <Navigator tabBar={props => <BottomTabBar {...props} />}>
      <Screen name='Home' component={HomeScreen}/>
      <Screen name='Latest News' component={HomeScreen}/>
      <Screen name='Settings' component={SettingsScreen}/>
    </Navigator>
  );
  
  export const AppNavigator = () => (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );


const MainMenu = () => {
  return (
    <AppNavigator/>
  );
}

export default MainMenu;