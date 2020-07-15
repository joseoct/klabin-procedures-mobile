import React, { useState, useCallback } from 'react';
import { SafeAreaView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import { useAxios } from '../../hooks/useAxios';

import SearchInput from '../../components/SearchInput';

import {
  SearchView,
  SubareaContainer,
  SubareaDetail,
  SubareaList,
  RadioButtonView,
  RadioText,
  TagView,
  TagText,
  LocalView,
  LocalText,
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

  const [checked, setChecked] = useState('tag');
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
            <RadioButtonView>
              <RadioText>Pesquisar por:</RadioText>
              <TagView>
                <TagText>Tag</TagText>
                <RadioButton
                  value="tag"
                  status={checked === 'tag' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('tag')}
                />
              </TagView>

              <LocalView>
                <LocalText>Local</LocalText>
                <RadioButton
                  value="local"
                  status={checked === 'local' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('local')}
                />
              </LocalView>
            </RadioButtonView>
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
