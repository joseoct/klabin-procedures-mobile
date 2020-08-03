import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

import { Container, ButtonText } from './styles';

interface ButtonProps extends RectButtonProperties {
  children?: string;
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({ children, icon, ...rest }) => {
  return (
    <Container {...rest}>
      {icon ? (
        <Icon name={icon} size={20} />
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </Container>
  );
};

export default Button;
