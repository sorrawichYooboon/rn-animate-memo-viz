import React from 'react';
import BottomTabNavigators from './src/components/BottomTabNavigators/BottomTabNavigators';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigators />
    </NavigationContainer>
  );
}

export default App;
