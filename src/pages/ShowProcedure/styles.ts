import styled from 'styled-components/native';
import Button from '../../components/Button';

export const ProcedureView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ProcedureObservation = styled.Text`
  font-size: 18px;
  color: #00ff90;
  font-family: 'RobotoSlab-Regular';
  margin-bottom: 8px;
`;

export const ProcedureImage = styled.Image`
  width: 100%;
  height: 400px;
  border-radius: 8px;
`;

export const ButtonsView = styled.View`
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EditButton = styled(Button)`
  background: #008b00;
  width: 100px;
`;

export const RemoveButton = styled(Button)`
  background: #cc1919;
  width: 100px;
`;
