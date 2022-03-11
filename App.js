import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StatusBar, BackHandler} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartView from './App/View/StartView';
import ConnectionView from './App/View/ConnectionView';
import GetConnectionView from './App/View/GetConnectionView';
import MainView from './App/View/MainView';
import LaptopInfoView from './App/View/LaptopInfoView';
import PcInfoView from './App/View/PcInfoView';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    const backAction = () => {
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="StartView">
          <Stack.Screen
            name="StartView"
            component={StartView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ConnectionView"
            component={ConnectionView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="GetConnectionView"
            component={GetConnectionView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MainView"
            component={MainView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="LaptopInfoView"
            component={LaptopInfoView}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PcInfoView"
            component={PcInfoView}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
