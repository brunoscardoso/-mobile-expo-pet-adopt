import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import RegisterPet from './pages/RegisterPet';
import AdoptPet from './pages/AdoptPet';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          },
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="RegisterPet" component={RegisterPet} />
        <AppStack.Screen name="AdoptPet" component={AdoptPet} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
