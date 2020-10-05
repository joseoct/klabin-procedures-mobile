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

  const navigation = useNavigation();

  const handleDeleteProcedure = useCallback(() => {
    try {
      api.delete(`subareas/${subarea_id}/${index}`).then(() => {
        Alert.alert('Procedimento deletado com sucesso');

        navigation.navigate('Procedures');
      });
    } catch (err) {
      Alert.alert('Falha ao deletar procedimento');
    }
  }, [index, navigation, subarea_id]);

  const handleNavigateToEdit = useCallback(() => {
    navigation.navigate('EditProcedure', {
      subarea_id,
      index,
    });
  }, [navigation, index, subarea_id]);

  return (
    <>
      <Header title="Procedimento" />

      <ProcedureView>
        <ProcedureObservation>{observations}</ProcedureObservation>

        <ProcedureImage source={{ uri: procedure_image_url }} />

        <ButtonsView>
          <EditButton icon="edit" onPress={handleNavigateToEdit}>
            Editar
          </EditButton>
          <RemoveButton icon="trash-2" onPress={handleDeleteProcedure}>
            Excluir
          </RemoveButton>
        </ButtonsView>
      </ProcedureView>
    </>
  );
};

export default ShowProcedure;
