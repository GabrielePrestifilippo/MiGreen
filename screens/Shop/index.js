import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
import {Text, View, Button} from 'react-native-ui-lib'; //eslint-disable-line
import ScanPlugin from '@hmscore/react-native-hms-scan';

const image = require('../img/scan.png');
const Shop = ({navigation, route}) => {
  let defaultViewRequest = {
    scanType: ScanPlugin.ScanType.All,
    additionalScanTypes: [],
  };
  //Call requestCameraAndStoragePermission API.
  ScanPlugin.Permission.requestCameraAndStoragePermission().then(res =>
    console.log('Result:', res),
  );

  const scan = () => {
    const type = route?.params?.type;
    ScanPlugin.Permission.hasCameraAndStoragePermission().then(
      ScanPlugin.Utils.startDefaultView(defaultViewRequest)
        .then(res =>
          type === 'bad'
            ? navigation.navigate('BadProduct')
            : navigation.navigate('EcoProduct'),
        )
        .catch(e => console.log(e)),
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View></View>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
            alignContent: 'flex-end',
            marginTop: 200,
          }}>
          <Text
            style={{
              fontFamily: 'Alef-Bold',
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
            }}>
            Scan a product to start shopping
          </Text>
          <Button
            backgroundColor="#FFFFFF"
            label="SCAN PRODUCT"
            labelStyle={{fontFamily: 'Alef-Bold', color: '#f5821f'}}
            style={{width: 300, margin: 20}}
            onPress={scan}
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
export default Shop;
