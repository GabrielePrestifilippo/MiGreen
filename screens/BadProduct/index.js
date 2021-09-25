import React from 'react';
import {ImageBackground, StyleSheet, Image, Dimensions} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib'; //eslint-disable-line

const meat = require('./meat.png');

const BadProduct = ({navigation}) => {
  const {width} = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <View />
      <Image source={meat} style={{width: '100%', height: width / 1.28}} />
      <View
        style={{
          flex: 1,
          textAlign: 'center',
          alignContent: 'center',
          alignItems: 'center',
          marginTop: 200,
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
    </View>
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
