import React, { useRef, useCallback, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title } from './styles';

interface NewProcedureFormData {
  tag: string;
  description: string;
  local: string;
  observations: string;
  font: string;
}

const CreateProcedure: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [font, setFont] = useState<string>('');

  const handleSignIn = useCallback((data: NewProcedureFormData) => {
    console.log(data, font);
  }, []);

  return (
    <>
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
            <View>
              <Title>Criar procedimento</Title>
            </View>

            <Form onSubmit={handleSignIn} ref={formRef}>
              <Input
                name="tag"
                placeholder="Tag"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Input
                autoCorrect={false}
                name="description"
                placeholder="Descrição"
                returnKeyType="next"
              />

              <Input
                name="local"
                placeholder="Local"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Input
                name="observations"
                placeholder="Observações"
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

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
                defaultValue={font}
                arrowColor="#f4f4f4"
                containerStyle={{ height: 60, border: 'none' }}
                style={{
                  backgroundColor: '#22222b',
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                dropDownStyle={{ backgroundColor: '#22222b' }}
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

              <View>
                <Button onPress={() => formRef.current?.submitForm()}>
                  Criar
                </Button>
              </View>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateProcedure;
