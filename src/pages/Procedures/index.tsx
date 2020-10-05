import React, { useCallback, useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import Header from '../../components/Header';

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
  index: number;
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
  const [procedures, setProcedures] = useState<Procedure[]>([]);

  const { subarea_id } = route.params as RouteParams;

  useEffect(() => {
    api
      .get(`subareas/${subarea_id}/procedures`)
      .then(response => setProcedures(response.data));
  }, [subarea_id]);

  const handleNavigateCreateProcedure = useCallback(() => {
    navigation.navigate('CreateProcedure', {
      subarea_id,
    });
  }, [navigation, subarea_id]);

  const handleNavigateToProcedure = useCallback(
    (procedure_image_url: string, observations: string, index: number) => {
      navigation.navigate('ShowProcedure', {
        procedure_image_url,
        observations,
        subarea_id,
        index,
      });
    },
    [navigation, subarea_id],
  );

  return (
    <>
      <Header title="Lista de procedimentos" />

      <ProcedureList
        data={procedures}
        keyExtractor={procedure => procedure.id}
        // eslint-disable-next-line prettier/prettier
        renderItem={({ item: procedure }) => (
          <ProcedureContainer
            onPress={
              () =>
                handleNavigateToProcedure(
                  procedure.procedure_image_url,
                  procedure.observations,
                  procedure.index,
                )
              // eslint-disable-next-line react/jsx-curly-newline
            }
          >
            <ProcedureIndexView fontColor={procedure.font}>
              <ProcedureIndexText>{procedure.index}</ProcedureIndexText>
            </ProcedureIndexView>
            <ProcedureDetails>
              <ProcedureDetail>{procedure.tag}</ProcedureDetail>
              <ProcedureDetail>{procedure.description}</ProcedureDetail>
              <ProcedureDetail>{procedure.local}</ProcedureDetail>
              <ProcedureDetail>{procedure.font}</ProcedureDetail>
              <ProcedureDetail>{procedure.observations}</ProcedureDetail>
            </ProcedureDetails>
          </ProcedureContainer>
        )}
      />

      <FabButton onPress={handleNavigateCreateProcedure}>
        <FabButtonText>
          <Icon name="plus" size={30} color="#fff" />
        </FabButtonText>
      </FabButton>
    </>
  );
};

export default Procedures;
