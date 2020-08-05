import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Procedure } from './index';

interface ProcedureFontColorProps {
  fontColor: string;
}

export const ProcedureViewTitle = styled.View`
  align-items: center;
`;

export const ProcedureTextTitle = styled.Text`
  font-size: 32px;
  color: #fff;
  font-family: 'RobotoSlab-Medium';
`;

export const ProcedureList = styled(
  FlatList as new () => FlatList<Procedure>,
).attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 16px;
`;

// export const ProceduresListTitle = styled.Text`
//   font-size: 24px;
//   margin-bottom: 16px;
//   color: #f4ede8;
//   font-family: 'RobotoSlab-Medium';
// `;
export const RadioButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RadioText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f0f0f5;
`;

export const TagView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TagText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f0f0f5;
`;

export const LocalView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocalText = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 16px;
  color: #f0f0f5;
`;

export const SearchView = styled.View`
  margin-bottom: 16px;
`;

export const ProcedureContainer = styled(RectButton)`
  background: #3e3b47;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ProcedureIndexView = styled.View<ProcedureFontColorProps>`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  align-items: center;
  justify-content: center;

  ${props => {
    switch (props.fontColor) {
      case 'Massa':
        return css`
          background: #8b4513;
        `;
      case 'Química':
        return css`
          background: #7fffd4;
        `;
      case 'Pneumática':
        return css`
          background: #00bfff;
        `;
      case 'Elétrica':
        return css`
          background: #b5171b;
        `;
      case 'Água':
        return css`
          background: #18b41b;
        `;
      case 'Mecânica':
        return css`
          background: #4f4e52;
        `;

      default:
        return css`
          background: #3e3b47;
        `;
    }
  }}
`;

export const ProcedureIndexText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #f4f4f4;
`;

export const ProcedureDetails = styled.View`
  margin-left: 16px;
`;

export const ProcedureDetail = styled.Text`
  color: #fff;
  font-family: 'RobotoSlab-Regular';
  margin: 4px;
`;

export const FabButton = styled(RectButton)`
  width: 60px;
  height: 60px;
  background: #009e59;
  border-radius: 96px;
  position: absolute;
  right: 30px;
  bottom: 30px;

  justify-content: center;
  align-items: center;
`;

export const FabButtonText = styled.Text``;
