import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, Button, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Play from './screens/Play';
import Shop from './screens/Shop';
import EcoProduct from './screens/EcoProduct';
import BadProduct from './screens/BadProduct';
import {hideNavigationBar} from 'react-native-navigation-bar-color';

const App = () => {
  hideNavigationBar();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          name="EcoProduct"
          component={EcoProduct}
          options={{title: 'Eier Freiland 53+', headerShown: false}}
        />
        <Stack.Screen
          name="BadProduct"
          component={BadProduct}
          options={{title: 'Festival Nr.2', headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Play"
          component={Play}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Shop"
          component={Shop}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
