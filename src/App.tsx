import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, StatusBar } from 'react-native';

import Routes from './routes/index';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#312e38"
        translucent
      />

      <View style={{ backgroundColor: '#312e38', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

export default App;
