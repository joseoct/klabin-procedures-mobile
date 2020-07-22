import React from 'react';
import { useRoute } from '@react-navigation/native';

import { SafeAreaView } from 'react-native';
import { useAxios } from '../../hooks/useAxios';
import { SubareaContainer, SubareaDetail, SubareaList } from './styles';

interface RouteParams {
  subarea_id: string;
}

export interface Procedure {
  id: string;
  description: string;
  observations: string;
  local: string;
  tag: string;
  font: string;
  procedure_image: string;
}

const Procedures: React.FC = () => {
  const route = useRoute();

  const { subarea_id } = route.params as RouteParams;

  const { data: procedures } = useAxios<Procedure[]>(
    `subareas/${subarea_id}/procedures`,
  );

  return (
    <SafeAreaView>
      <SubareaList
        data={procedures}
        keyExtractor={procedure => procedure.id}
        // eslint-disable-next-line prettier/prettier
        renderItem={({ item: procedure }) => (
          <SubareaContainer>
            <SubareaDetail>{procedure.tag}</SubareaDetail>
            <SubareaDetail>{procedure.description}</SubareaDetail>
            <SubareaDetail>{procedure.font}</SubareaDetail>
            <SubareaDetail>{procedure.local}</SubareaDetail>
            <SubareaDetail>{procedure.observations}</SubareaDetail>
            <SubareaDetail>{procedure.procedure_image}</SubareaDetail>
          </SubareaContainer>
        )}
      />
    </SafeAreaView>
  );
};

export default Procedures;
