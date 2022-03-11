/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const LaptopInfoView = ({route}) => {
  const navigation = useNavigation();
  const [isLoaded, setDataLoad] = useState(true);
  const [storyData, setStoryData] = useState();

  let ip = route.params.ip;

  const getData = async () => {
    try {
      let response = await fetch(ip);
      let pcData = await response.json();
      setStoryData(pcData);
      setDataLoad(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const dataInterval = setInterval(() => getData(), 1 * 100);
    return () => {
      clearInterval(dataInterval);
    };
  });

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
      {isLoaded ? (
        <View style={{flex: 1, backgroundColor: '#000000'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.maintext}>400 ERROR </Text>
            <ActivityIndicator size="large" color="#ffffff" />
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('/mobileApps/Ctcontrol/Resorces/images/404_1.png')}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
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
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: '#000000'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50,
            }}>
            <View style={{alignSelf: 'flex-start'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 36,
                  fontFamily: 'HACKED',
                  alignSelf: 'flex-start',
                  marginLeft: 30,
                }}>
                Notebook PC
              </Text>
            </View>
            <Image
              source={require('/mobileApps/Ctcontrol/Resorces/images/notebook.gif')}
              style={{
                alignSelf: 'center',
                height: 170,
                width: 300,
                marginTop: 20,
                marginBottom: 20,
              }}
            />
          </View>
          <Text style={styles.text}>{'>'} Date</Text>
          <Text style={styles.text}>
            {'>'} {storyData.date}
          </Text>
          <Text style={styles.text}>{'>'} Time</Text>
          <Text style={styles.text}>
            {'>'} {storyData.time}
          </Text>
          <Text style={styles.text}>{'>'} Day</Text>
          <Text style={styles.text}>
            {'>'} {storyData.day}
          </Text>
          <Text style={styles.text}>{'>'} Worktime</Text>
          <Text style={styles.text}>
            {'>'} {storyData.worktime}
          </Text>
          <Text style={styles.text}>{'>'} Batary</Text>
          <Text style={styles.text}>
            {'>'} {storyData.batary}
          </Text>
          {/* <Text style={styles.text}>{'>'} continue?</Text> */}
          <Text style={styles.text}>
            {'>'} {'_'}
          </Text>
          <Text style={styles.text} />
          {/* <TouchableOpacity>
            <Text style={styles.text}>{'>'} Yes</Text>
          </TouchableOpacity> */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text}>{'>'} back</Text>
          </TouchableOpacity>
          <View
            style={{
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
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  maintext: {
    color: 'white',
    fontSize: 65,
    fontFamily: 'HACKED',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'HACKED',
  },
});

export default LaptopInfoView;
