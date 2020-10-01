import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Subareas from '../pages/Subareas';
import Procedures from '../pages/Procedures';
import CreateProcedure from '../pages/CreateProcedure';
import ShowProcedure from '../pages/ShowProcedure';

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
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="Procedures"
        component={Procedures}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="CreateProcedure"
        component={CreateProcedure}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="ShowProcedure"
        component={ShowProcedure}
        options={{
          headerShown: false,
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
