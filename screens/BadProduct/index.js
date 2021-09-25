import React from 'react';
import {ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib'; //eslint-disable-line

const meat = require('./meat.png');
const image = require('../img/meat.png');

const BadProduct = ({navigation}) => {
  const {width} = Dimensions.get('window');

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View />
      <Image
        source={meat}
        resizeMode="contain"
        style={{
          width: '100%',
          height: width * 1.05,
          marginTop: 50,
        }}
      />
      <View
        style={{
          flex: 1,
          textAlign: 'center',
          alignContent: 'flex-end',
          alignItems: 'center',
          marginTop: 230,
        }}>
        <Button
          backgroundColor="#FFFFFF"
          label="SCAN PRODUCT"
          labelStyle={{fontFamily: 'Alef-Bold', color: '#f5821f'}}
          style={{width: 300, margin: 20}}
          onPress={() => navigation.navigate('Home')}
          enableShadow
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
export default BadProduct;
