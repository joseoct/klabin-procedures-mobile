import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import logo from '../../assets/logo.png';

import Button from '../../components/Button';

import { Container, Logo } from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={logo} />

      <Button onPress={() => navigation.navigate('Dashboard')}>Entrar</Button>
    </Container>
  );
};

export default Home;
