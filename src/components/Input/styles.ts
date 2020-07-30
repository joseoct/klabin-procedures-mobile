import styled, { css } from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

interface IconProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #232129;
  border-radius: 10px;
  margin-bottom: 8px;

  /* border: 2px solid #232129; */
  border-width: 2px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #009e59;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #009e59;
    `}
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: '#666360',
}))`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FeatherIcon)<IconProps>`
  margin-right: 16px;
  color: #666360;

  ${props =>
    (props.isFocused || props.isFilled) &&
    css`
      color: #009e59;
    `}
`;
