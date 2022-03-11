/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const StartView = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => navigation.navigate('ConnectionView'), 2500);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <ImageBackground
      source={require('/mobileApps/Ctcontrol/Resorces/images/background.png')}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}>
      <View style={styles.maincontainer}>
        <Text style={styles.maintext}>Ctcontrol</Text>
        <Text style={styles.aditionaltext}>Profiler_App</Text>
        <Text style={styles.aditionaltext}>v0 2xx (Beta)</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  maintext: {
    color: 'white',
    fontSize: 65,
    fontFamily: 'Bebas-Regular',
  },
  aditionaltext: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'HACKED',
  },
});

export default StartView;
