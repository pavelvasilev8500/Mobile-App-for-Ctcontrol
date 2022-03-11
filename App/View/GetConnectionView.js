/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const GetConnectionView = () => {
  const navigation = useNavigation();

  let ip;

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  const onSuccess = e => {
    ip = e.data;
    navigation.navigate('MainView', {ip});
  };

  return (
    <>
      <QRCodeScanner
        onRead={onSuccess}
        cameraProps={{autoFocus: 'on'}}
        containerStyle={{flex: 1, backgroundColor: '#000000'}}
        topViewStyle={{flex: 3}}
        topContent={<Text style={styles.maintext}>Scan QR</Text>}
      />

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

export default GetConnectionView;
