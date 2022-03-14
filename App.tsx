/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import * as eva from '@eva-design/eva';
 import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
 import HomeScreen from './src/screens/HomeScreen';
 import BottomTabMenu from './src/components/BottomTabMenu';
 import { StatusBar } from 'react-native';
 import Carousel from './src/components/Carousel';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
import SingleNewsScreen from './src/screens/SingleNewsScreen';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
import FullStoryWebView from './src/screens/FullStoryWebView';
import { Store } from './src/redux/store';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
 
 const App = () => {

  const Stack = createStackNavigator();
 
   return (
     <Provider store={Store}>
       <ApplicationProvider {...eva} theme={eva.light}>
       <StatusBar translucent backgroundColor="transparent" />
       
       <NavigationContainer>
         <Stack.Navigator screenOptions={{headerShown:false}}>
             <Stack.Screen name="BottomTabMenu" component={BottomTabMenu}/>
             <Stack.Screen name="SingleNewsScreen" component={SingleNewsScreen}/>
             <Stack.Screen name="FullStoryWebView" component={FullStoryWebView}/>
         </Stack.Navigator>
       </NavigationContainer>
     </ApplicationProvider>
     </Provider>
   );
 };
 
 
 export default App;
 