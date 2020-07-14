import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Subareas from '../pages/Subareas';
import Procedures from '../pages/Procedures';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontFamily: 'RobotoSlab-Medium',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="Subareas"
        component={Subareas}
        options={{
          headerStyle: { backgroundColor: '#009e59' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="Procedures"
        component={Procedures}
        options={{
          headerStyle: { backgroundColor: '#009e59' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
