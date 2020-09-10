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
    navigation.navigate('CreateProcedure', {
      subarea_id,
    });
  }, [navigation, subarea_id]);

  const handleNavigateToProcedures = useCallback(
    (procedure_image_url: string, observations: string) => {
      navigation.navigate('ShowProcedure', {
        procedure_image_url,
        observations,
      });
    },
    [navigation],
  );

  return (
    <>
      <SafeAreaView>
        <ProcedureList
          data={procedures}
          keyExtractor={procedure => procedure.id}
          // eslint-disable-next-line prettier/prettier
          renderItem={({ item: procedure }) => (
            <ProcedureContainer
              onPress={
                () =>
                  handleNavigateToProcedures(
                    procedure.procedure_image_url,
                    procedure.observations,
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
