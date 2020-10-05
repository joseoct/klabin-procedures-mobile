import React, { useRef, useCallback, useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Header from '../../components/Header';
import api from '../../services/api';
import Input from '../../components/Input';

import { Container, CreateButtonView, CreateButton } from './styles';
import { Procedure } from '../Procedures';

interface RouteParams {
  subarea_id: string;
  index: number;
}

interface NewProcedureFormData {
  tag: string;
  description: string;
  local: string;
  observations: string;
}

const EditProcedure: React.FC = () => {
  const [procedure, setProcedure] = useState<Procedure>({} as Procedure);

  const route = useRoute();
  const formRef = useRef<FormHandles>(null);
  const { subarea_id, index } = route.params as RouteParams;

  const [font, setFont] = useState<string>('');
  const navigation = useNavigation();

  useEffect(() => {
    api.get(`subareas/${subarea_id}/${index}`).then(response => {
      setProcedure(response.data);
      setFont(response.data.font);
    });
  }, [index, subarea_id]);

  const handleUpdateProcedure = useCallback(
    (data: NewProcedureFormData) => {
      const { description, local, observations, tag } = data;

      const formData = {
        ...(tag ? { tag } : {}),
        ...(description ? { description } : {}),
        ...(local ? { local } : {}),
        ...(observations ? { tag } : {}),
        font,
      };

      try {
        api.put(`subareas/${subarea_id}/${index}`, formData).then(() => {
          Alert.alert('Procedimento atualizado com sucesso');

          navigation.navigate('Procedures');
        });
      } catch (error) {
        Alert.alert('Falha ao atualizar procedimento');
      }
    },
    [index, navigation, subarea_id, font],
  );

  return (
    <>
      <Header title="Editar procedimento" />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Form
              onSubmit={handleUpdateProcedure}
              ref={formRef}
              initialData={procedure}
            >
              <View style={{ marginBottom: 8 }}>
                <DropDownPicker
                  items={[
                    {
                      label: 'Massa',
                      value: 'Massa',
                    },
                    {
                      label: 'Química',
                      value: 'Química',
                    },
                    {
                      label: 'Pneumática',
                      value: 'Pneumática',
                    },
                    {
                      label: 'Elétrica',
                      value: 'Elétrica',
                    },
                    {
                      label: 'Água',
                      value: 'Água',
                    },
                    {
                      label: 'Mecânica',
                      value: 'Mecânica',
                    },
                  ]}
                  defaultValue={procedure.font}
                  arrowColor="#f4f4f4"
                  containerStyle={{ height: 60 }}
                  style={{
                    backgroundColor: '#22222b',
                    borderColor: '#22222b',
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                  dropDownStyle={{
                    backgroundColor: '#322e38',
                    borderColor: '#009e59',
                  }}
                  placeholder="Fonte"
                  placeholderStyle={{ color: '#666360' }}
                  labelStyle={{
                    fontFamily: 'RobotoSlab-Regular',
                    padding: 19,
                    marginLeft: 8,
                    fontSize: 16,
                    textAlign: 'left',
                    color: '#f4f4f4',
                  }}
                  onChangeItem={item => setFont(item.value)}
                />
              </View>

              <Input name="tag" placeholder="Tag" returnKeyType="next" />

              <Input
                autoCorrect={false}
                name="description"
                placeholder="Descrição"
                returnKeyType="next"
              />

              <Input name="local" placeholder="Local" returnKeyType="next" />

              <Input
                name="observations"
                placeholder="Observações"
                returnKeyType="next"
              />

              <CreateButtonView>
                <CreateButton
                  icon="plus"
                  onPress={() => formRef.current?.submitForm()}
                >
                  Atualizar
                </CreateButton>
              </CreateButtonView>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default EditProcedure;
