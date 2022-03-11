import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  BackHandler,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

const MainView = ({route}) => {
  const navigation = useNavigation();

  let ip = route.params.ip;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const fadeAnimT = useRef(new Animated.Value(0)).current;

  const GoToNetbook = () => {
    navigation.navigate('LaptopInfoView', {ip});
  };

  const GoToPc = () => {
    navigation.navigate('PcInfoView', {ip});
  };

  useEffect(() => {
    const backAction = () => {
      BackHandler.exitApp();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, []);

  return (
    <Swiper
      showsButtons={false}
      horizontal={false}
      loop={false}
      showsPagination={false}>
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#000000',
            height: Dimensions.get('window').height,
          }}>
          <View>
            <Text style={styles.maintext}>Ctcontrol</Text>
            <Text style={styles.subtext}>control your pc</Text>
            <Text style={styles.aditionalsubtext}>or not your?</Text>
          </View>
          <Image
            source={require('/mobileApps/Ctcontrol/Resorces/images/say_hello.gif')}
            style={{
              alignItems: 'center',
              height: 170,
              width: 300,
              marginBottom: 50,
            }}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={require('/mobileApps/Ctcontrol/Resorces/images/scrolldown.gif')}
              style={{
                alignItems: 'center',
                height: 30,
                width: 30,
                marginRight: 20,
              }}
            />
            <Text style={styles.text}>Scroll down for more</Text>
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
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#000000',
            height: Dimensions.get('window').height,
          }}>
          <View>
            <Text style={styles.maintext}>Ctcontrol</Text>
            <Text style={styles.subtext}>control your pc</Text>
          </View>
          <View style={{alignSelf: 'flex-start'}}>
            <TouchableOpacity onPress={() => GoToNetbook()}>
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
              <Image
                source={require('/mobileApps/Ctcontrol/Resorces/images/notebook.gif')}
                style={{
                  alignSelf: 'flex-start',
                  height: 170,
                  width: 300,
                  marginTop: 20,
                  marginLeft: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'flex-start'}}>
            <Text style={styles.text1}>{'>'}Date</Text>
            <Text style={styles.text1}>{'>'}Time</Text>
            <Text style={styles.text1}>{'>'}Day</Text>
            <Text style={styles.text1}>{'>'}Worktime</Text>
            <Text style={styles.text1}>{'>'}Batary</Text>
            <Text style={styles.text1}>{'>'}Scroll down for more</Text>
            <Text style={styles.text1}>{'>'}_</Text>
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
      </View>

      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: '#000000',
            height: Dimensions.get('window').height,
          }}>
          <View>
            <Text style={styles.maintext}>Ctcontrol</Text>
            <Text style={styles.subtext}>control your pc</Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <TouchableOpacity onPress={() => GoToPc()}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 36,
                  fontFamily: 'HACKED',
                  alignSelf: 'flex-end',
                  marginRight: 30,
                }}>
                desktop PC
              </Text>
              <Image
                source={require('/mobileApps/Ctcontrol/Resorces/images/pc.gif')}
                style={{
                  alignItems: 'center',
                  height: 190,
                  width: 270,
                  marginTop: 20,
                  marginRight: 30,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{alignSelf: 'flex-start'}}>
            <Text style={styles.text1}>{'>'}Date</Text>
            <Text style={styles.text1}>{'>'}Time</Text>
            <Text style={styles.text1}>{'>'}Day</Text>
            <Text style={styles.text1}>{'>'}Worktime</Text>
            <Text style={styles.text1}>{'>'}Scroll up for more</Text>
            <Text style={styles.text1}>{'>'}_</Text>
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
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  maintext: {
    color: 'white',
    fontSize: 65,
    fontFamily: 'Bebas-Regular',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Bebas-Regular',
  },
  text1: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'HACKED',
  },
  text2: {
    color: 'white',
    fontSize: 36,
    fontFamily: 'HACKED',
  },
  subtext: {
    color: '#9F9F9F',
    fontSize: 20,
    fontFamily: 'HACKED',
  },
  aditionalsubtext: {
    color: '#3E3E3E',
    fontSize: 18,
    fontFamily: 'HACKED',
  },
  aditionaltext: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'HACKED',
  },
});

export default MainView;
