/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ConnectionView = () => {
  const navigation = useNavigation();

  const GoToConnect = () => {
    navigation.navigate('GetConnectionView');
  };

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const value = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const startAnimate = () => {
    Animated.timing(value, {
      toValue: 100,
      useNativeDriver: true,
      duration: 1500,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    startAnimate();
  });

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000000',
        }}>
        <View style={{marginBottom: 50}}>
          <Image
            source={require('/mobileApps/Ctcontrol/Resorces/images/offline_.png')}
          />
        </View>

        <View>
          <Animated.View style={{opacity: fadeAnim}}>
            <TouchableOpacity onPress={() => GoToConnect()}>
              <Text style={styles.maintext}>Connect</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={{flexDirection: 'row-reverse'}}>
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: value.interpolate({
                      inputRange: [0, 100],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
                backgroundColor: 'white',
                height: 11,
                width: 75,
                margin: 5,
              }}
            />

            <Animated.View
              style={{
                transform: [
                  {
                    translateX: value.interpolate({
                      inputRange: [0, 100],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
                backgroundColor: 'white',
                height: 11,
                width: 10,
                margin: 5,
              }}
            />

            <Animated.View
              style={{
                transform: [
                  {
                    translateX: value.interpolate({
                      inputRange: [0, 100],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
                backgroundColor: 'white',
                height: 11,
                width: 15,
                margin: 5,
              }}
            />

            <Animated.View
              style={{
                transform: [
                  {
                    translateX: value.interpolate({
                      inputRange: [0, 100],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
                backgroundColor: 'white',
                height: 11,
                width: 22,
                margin: 5,
              }}
            />

            <Animated.View
              style={{
                transform: [
                  {
                    translateX: value.interpolate({
                      inputRange: [0, 100],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
                backgroundColor: 'white',
                height: 11,
                width: 11,
                margin: 5,
              }}
            />

            <Animated.View
              style={{
                transform: [
                  {
                    translateX: value.interpolate({
                      inputRange: [0, 100],
                      outputRange: [-100, 0],
                    }),
                  },
                ],
                backgroundColor: 'white',
                height: 11,
                width: 25,
                margin: 5,
              }}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: '#000000',
          alignItems: 'flex-end',
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontFamily: 'HACKED',
          }}>
          Profiler_App
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 12,
            fontFamily: 'HACKED',
          }}>
          v0 2xx (Beta)
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  maintext: {
    color: 'white',
    fontSize: 65,
    fontFamily: 'Bebas-Regular',
  },
});

export default ConnectionView;
