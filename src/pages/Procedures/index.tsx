import React, { useCallback } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { SafeAreaView } from 'react-native';
import { useAxios } from '../../hooks/useAxios';
import {
  ProcedureContainer,
  ProcedureDetail,
  ProcedureList,
  ProcedureDetails,
  ProcedureIndexView,
  ProcedureIndexText,
  FabButton,
  FabButtonText,
} from './styles';

interface RouteParams {
  subarea_id: string;
}

export interface Procedure {
  id: string;
  index: string;
  description: string;
  observations: string;
  local: string;
  tag: string;
  font: string;
  procedure_image_url: string;
}

const Procedures: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { subarea_id } = route.params as RouteParams;

  const { data: procedures } = useAxios<Procedure[]>(
    `subareas/${subarea_id}/procedures`,
  );

  const handleCreateProcedure = useCallback(() => {
    navigation.navigate('CreateProcedure');
  }, [navigation]);

  return (
    <>
      <SafeAreaView>
        <ProcedureList
          data={procedures}
          keyExtractor={procedure => procedure.id}
          // eslint-disable-next-line prettier/prettier
          renderItem={({ item: procedure }) => (
            <ProcedureContainer>
              <ProcedureIndexView fontColor={procedure.font}>
                <ProcedureIndexText>{procedure.index}</ProcedureIndexText>
              </ProcedureIndexView>
              <ProcedureDetails>
                <ProcedureDetail>{procedure.tag}</ProcedureDetail>
                <ProcedureDetail>{procedure.local}</ProcedureDetail>
              </ProcedureDetails>
            </ProcedureContainer>
          )}
        />
      </SafeAreaView>

      <FabButton onPress={handleCreateProcedure}>
        <FabButtonText>
          <Icon name="plus" size={30} color="#fff" />
        </FabButtonText>
      </FabButton>
    </>
  );
};

export default Procedures;
