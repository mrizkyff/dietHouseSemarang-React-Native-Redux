import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useEffect } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import HomeScreen from './screens/HomeScreen'

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';

const Stack = createStackNavigator();

import { SplashScreen, LoginScreen} from "./screens";

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <View style={styles.container}>
      //   {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      //   <NavigationContainer linking={LinkingConfiguration}>
      //     <Stack.Navigator>
      //       <Stack.Screen name="Root" component={BottomTabNavigator} />
      //     </Stack.Navigator>
      //   </NavigationContainer>
      // </View>
      <View style={{flex: 1}}>
        {/* <HomeScreen /> */}
        {/* <SplashScreen /> */}
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
