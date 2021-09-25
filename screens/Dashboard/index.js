import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib'; //eslint-disable-line

const image = require('../img/dashboard.png');
const Dashboard = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View />
        <View
          style={{
            flex: 1,
            textAlign: 'center',
            alignContent: 'center',
            alignItems: 'center',
            marginTop: 200,
          }}></View>
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
export default Dashboard;
