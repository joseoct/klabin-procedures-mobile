import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, BackButton, HeaderTitle } from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, ...rest }) => {
  const navigation = useNavigation();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container {...rest}>
      <BackButton onPress={navigateBack}>
        <Icon name="chevron-left" size={24} color="#fff" />
      </BackButton>

      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;
