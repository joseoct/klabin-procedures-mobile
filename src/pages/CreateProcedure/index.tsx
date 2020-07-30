import React, { useRef, useCallback, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, Title } from './styles';

const CreateProcedure: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [font, setFont] = useState<string>('uk');

  const handleSignIn = useCallback(() => {
    console.log('oi');
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
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                name="description"
                placeholder="Descrição"
                returnKeyType="next"
              />

              <Input
                name="observations"
                placeholder="Observações"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Input
                name="local"
                placeholder="Local"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <Input
                name="tag"
                placeholder="Tag"
                secureTextEntry
                returnKeyType="send"
                onSubmitEditing={() => formRef.current?.submitForm()}
              />

              <DropDownPicker
                items={[
                  {
                    label: 'UK',
                    value: 'uk',
                  },
                  {
                    label: 'France',
                    value: 'france',
                  },
                ]}
                defaultValue={font}
                containerStyle={{ height: 60 }}
                style={{ backgroundColor: '#22222b' }}
                itemStyle={{
                  fontSize: 16,
                  color: 'red',
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
