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
          headerTitle: 'Subáreas',
          headerStyle: { backgroundColor: '#009e59' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="Procedures"
        component={Procedures}
        options={{
          headerTitle: 'Procedimentos',
          headerStyle: { backgroundColor: '#009e59' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="CreateProcedure"
        component={CreateProcedure}
        options={{
          headerTitle: 'Criar procedimento',
          headerStyle: { backgroundColor: '#009e59' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
      <Stack.Screen
        name="ShowProcedure"
        component={ShowProcedure}
        options={{
          headerTitle: 'Foto do procedimento',
          headerStyle: { backgroundColor: '#009e59' },
          headerTintColor: '#fff',
          cardStyle: { backgroundColor: '#312e38' },
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;
