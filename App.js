import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Button, Text} from 'react-native';
import ScanPlugin from '@hmscore/react-native-hms-scan';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeScreen({navigation}) {
  let defaultViewRequest = {
    scanType: ScanPlugin.ScanType.All,
    additionalScanTypes: [],
  };
  //Call requestCameraAndStoragePermission API.
  ScanPlugin.Permission.requestCameraAndStoragePermission().then(res =>
    console.log('Result:', res),
  );

  const scan = () => {
    ScanPlugin.Permission.hasCameraAndStoragePermission().then(
      res => console.log('Result:', res),
      ScanPlugin.Utils.startDefaultView(defaultViewRequest)
        .then(res => console.log(res)) // ScanResponse
        .catch(e => console.log(e)),
    );
  };
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Welcome</Text>
        <Button title="scan" onPress={scan} />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function DetailsScreen({navigation}) {
  return (
    <ScrollView>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

export default App;
