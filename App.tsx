import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';

const App = () => {
  const Tab = createBottomTabNavigator();
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Favoritos" component={(): React.FC => <></>} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
