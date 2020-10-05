import React, { useState, useEffect, useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';

import { useAxios } from '../../hooks/useAxios';
import api from '../../services/api';

import SearchInput from '../../components/SearchInput';

import {
  Header,
  UserName,
  Welcome,
  SearchView,
  SubareaContainer,
  SubareaDetails,
  SubareaDetail,
  SubareaDetailText,
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
  const [searchFor, setSearchFor] = useState<string>('tag');
  const [searchValue, setSearchValue] = useState('');

  const { data: subareas, mutate } = useAxios<Subarea[]>('subareas');
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFoods(): Promise<void> {
      const response = await api.get<Subarea[]>('/subareas', {
        params: {
          searchFor,
          searchValue,
        },
      });

      mutate(response.data, false);
    }

    loadFoods();
  }, [searchValue, mutate, searchFor]);

  useEffect(() => {
    setSearchValue('');
  }, [searchFor]);

  const handleNavigateToProcedures = useCallback(
    (subarea_id: string) => {
      navigation.navigate('Procedures', {
        subarea_id,
      });
    },
    [navigation],
  );

  return (
    <>
      <Header>
        <Welcome>Bem vindo,</Welcome>
        <UserName>José</UserName>
      </Header>

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
                  color="#009e59"
                  value="tag"
                  status={searchFor === 'tag' ? 'checked' : 'unchecked'}
                  onPress={() => setSearchFor('tag')}
                />
              </TagView>

              <LocalView>
                <LocalText>Local</LocalText>
                <RadioButton
                  value="local"
                  status={searchFor === 'local' ? 'checked' : 'unchecked'}
                  onPress={() => setSearchFor('local')}
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
          <SubareaContainer
            onPress={() => handleNavigateToProcedures(subarea.id)}
          >
            <SubareaDetails>
              <SubareaDetail>Tag </SubareaDetail>
              <SubareaDetailText>{subarea.tag}</SubareaDetailText>
            </SubareaDetails>
            <SubareaDetails>
              <SubareaDetail>Nome </SubareaDetail>
              <SubareaDetailText>{subarea.name}</SubareaDetailText>
            </SubareaDetails>
            <SubareaDetails>
              <SubareaDetail>Setor </SubareaDetail>
              <SubareaDetailText>{subarea.sector}</SubareaDetailText>
            </SubareaDetails>
            <SubareaDetails>
              <SubareaDetail>Local </SubareaDetail>
              <SubareaDetailText>{subarea.local}</SubareaDetailText>
            </SubareaDetails>
            <SubareaDetails>
              <SubareaDetail>Observações </SubareaDetail>
              <SubareaDetailText>{subarea.observations}</SubareaDetailText>
            </SubareaDetails>
          </SubareaContainer>
        )}
      />
    </>
  );
};

export default Subareas;
