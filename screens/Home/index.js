import React from 'react';
import {ImageBackground, StyleSheet, StatusBar} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib';

const image = require('./home.png');
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'flex-end',
          }}>
          <Button
            backgroundColor="#FFF"
            label="Dashboard"
            labelStyle={{fontFamily: 'Alef-Bold', color: '#f5821f'}}
            style={{width: 300, margin: 10}}
            enableShadow
            onPress={() => navigation.navigate('Dashboard')}
          />
          <Button
            backgroundColor="#FFF"
            label="Play"
            labelStyle={{fontFamily: 'Alef-Bold', color: '#f5821f'}}
            style={{width: 300, margin: 10}}
            onPress={() => navigation.navigate('Play')}
            enableShadow
          />
          <Button
            backgroundColor="#FFF"
            label="Shop"
            labelStyle={{fontFamily: 'Alef-Bold', color: '#f5821f'}}
            style={{width: 300, margin: 10, marginBottom: 70}}
            onPress={() => navigation.navigate('Shop')}
            enableShadow
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default Home;
