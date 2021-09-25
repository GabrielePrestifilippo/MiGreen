import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Text, Button} from 'react-native-ui-lib';
import {CommonActions} from '@react-navigation/native';

const Splash = ({navigation}) => {
  const image = require('./image1.jpeg');

  const onDone = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Button
          backgroundColor="#FFFFFF"
          label="START"
          labelStyle={{fontFamily: 'Alef-Bold', color: '#f5821f'}}
          style={{width: 300, margin: 20}}
          enableShadow
          onPress={onDone}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 12,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontFamily: 'minya nouvelle',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    alignContent: 'flex-end',
  },
});

export default Splash;
