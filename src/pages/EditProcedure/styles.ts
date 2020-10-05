import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const CameraButtonView = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CameraButton = styled(Button)`
  width: 100%;
  border-radius: 8px;
`;

export const CreateButtonView = styled.View`
  margin-top: 36px;
  align-items: center;
`;

export const CreateButton = styled(Button)`
  width: 150px;
  border-radius: 8px;
`;
