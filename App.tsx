import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { YellowBox } from 'react-native';

import Routes from './src/routes';

const App: React.FC = () => {
  YellowBox.ignoreWarnings(['Invalid prop `style` of type `array`']);
  return (
    <>
      <StatusBar style="dark" />
      <Routes />
    </>
  );
};

export default App;
