import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';

import { useAxios } from '../../hooks/useAxios';

import {
  SubareaContainer,
  SubareaDetail,
  SubareaList,
  SubareasListTitle,
} from './styles';

export interface Subarea {
  id: string;
  tag: string;
  name: string;
  sector: string;
  local: string;
  observations: string;
}

const Home: React.FC = () => {
  const { data: subareas } = useAxios<Subarea[]>('subareas');

  return (
    <SafeAreaView>
      <SubareaList
        data={subareas}
        keyExtractor={subarea => subarea.id}
        ListHeaderComponent={<SubareasListTitle>Subareas</SubareasListTitle>}
        renderItem={({ item: subarea }) => (
          <SubareaContainer>
            <SubareaDetail>{subarea.tag}</SubareaDetail>
            <SubareaDetail>{subarea.name}</SubareaDetail>
            <SubareaDetail>{subarea.sector}</SubareaDetail>
            <SubareaDetail>{subarea.local}</SubareaDetail>
            <SubareaDetail>{subarea.observations}</SubareaDetail>
          </SubareaContainer>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
