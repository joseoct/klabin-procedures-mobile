import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

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
        name="Dashboard"
        component={Dashboard}
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
