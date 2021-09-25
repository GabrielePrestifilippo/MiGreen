import React, {useState, useEffect} from 'react';

import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const Play = ({navigation}) => {
  const [rendered, setRendered] = useState(false);

  return (
    <WebView
      originWhitelist={['*']}
      style={{flex: 1}}
      allowFileAccess={true}
      allowUniversalAccessFromFileURLs={true}
      onLoad={() => setRendered(true)}
      onNavigationStateChange={navState => {
        if (navState.title === 'https://www.migros.ch/de.html') {
          navigation.navigate('Home');
        }
      }}
      source={
        rendered
          ? {uri: 'file:///android_asset/pageGame/index.html'}
          : undefined
      }
    />
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
export default Play;
