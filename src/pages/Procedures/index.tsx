import React from 'react';
import { useRoute } from '@react-navigation/native';

import { SafeAreaView } from 'react-native';
import { useAxios } from '../../hooks/useAxios';
import {
  ProcedureContainer,
  ProcedureDetail,
  ProcedureList,
  ProcedureDetails,
  ProcedureIndexView,
  ProcedureIndexText,
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

  const { subarea_id } = route.params as RouteParams;

  const { data: procedures } = useAxios<Procedure[]>(
    `subareas/${subarea_id}/procedures`,
  );

  return (
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
  );
};

export default Procedures;
