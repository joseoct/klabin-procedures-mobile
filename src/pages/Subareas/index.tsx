import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useAxios } from '../../hooks/useAxios';

import SearchInput from '../../components/SearchInput';

import {
  SearchView,
  SubareaContainer,
  SubareaDetail,
  SubareaList,
} from './styles';

export interface Subarea {
  id: string;
  tag: string;
  name: string;
  sector: string;
  local: string;
  observations: string;
}

const Subareas: React.FC = () => {
  const { data: subareas } = useAxios<Subarea[]>('subareas');

  const [searchValue, setSearchValue] = useState('');

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <SubareaList
        data={subareas}
        keyExtractor={subarea => subarea.id}
        // eslint-disable-next-line prettier/prettier
        ListHeaderComponent={(
          <SearchView>
            <SearchInput
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder="Qual subárea você procura?"
            />
          </SearchView>
          // eslint-disable-next-line prettier/prettier
        )}
        renderItem={({ item: subarea }) => (
          <SubareaContainer onPress={() => navigation.navigate('Procedures')}>
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

export default Subareas;
