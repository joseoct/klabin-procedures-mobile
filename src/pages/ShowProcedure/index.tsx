import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import Header from '../../components/Header';

import {
  ProcedureView,
  ProcedureObservation,
  ProcedureImage,
  EditButton,
  RemoveButton,
  ButtonsView,
} from './styles';

export interface RouteParams {
  procedure_image_url: string;
  observations: string;
  subarea_id: string;
  index: number;
}

const ShowProcedure: React.FC = () => {
  const route = useRoute();
  const {
    procedure_image_url,
    observations,
    subarea_id,
    index,
  } = route.params as RouteParams;

  const { reset } = useNavigation();

  const handleDeleteProcedure = useCallback(() => {
    try {
      api.delete(`subareas/${subarea_id}/${index}`);
      Alert.alert('Procedimento deletado com sucesso');
      reset({
        routes: [
          {
            name: 'Procedures',
            params: { subarea_id },
          },
        ],
        index: 2,
      });
    } catch (err) {
      Alert.alert('Falha ao deletar procedimento');
    }
  }, [index, subarea_id, reset]);

  return (
    <>
      <Header title="Procedimento" />

      <ProcedureView>
        <ProcedureObservation>{observations}</ProcedureObservation>

        <ProcedureImage source={{ uri: procedure_image_url }} />

        <ButtonsView>
          <EditButton icon="edit">Editar</EditButton>
          <RemoveButton icon="trash-2" onPress={handleDeleteProcedure}>
            Excluir
          </RemoveButton>
        </ButtonsView>
      </ProcedureView>
    </>
  );
};

export default ShowProcedure;
