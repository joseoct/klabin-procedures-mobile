import React, { useRef, useCallback, useState } from 'react';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-picker';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import Button from '../../components/Button';
import Input from '../../components/Input';

import {
  Container,
  CameraButtonView,
  CameraButton,
  CreateButtonView,
} from './styles';

interface RouteParams {
  subarea_id: string;
}

interface NewProcedureFormData {
  tag: string;
  description: string;
  local: string;
  observations: string;
}

const CreateProcedure: React.FC = () => {
  const route = useRoute();
  const formRef = useRef<FormHandles>(null);
  const { subarea_id } = route.params as RouteParams;
  const { reset } = useNavigation();

  const [font, setFont] = useState<string>('');
  const [uriPhoto, setUriPhoto] = useState<string>('');

  const handleProcedurePhoto = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Tire uma foto ou selecione da galeria',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolha da galeria',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao selecionar a foto');
          return;
        }

        setUriPhoto(response.uri);
      },
    );
  }, []);

  const handleCreateProcedure = useCallback(
    (data: NewProcedureFormData) => {
      const formData = new FormData();

      formData.append('tag', data.tag);
      formData.append('description', data.description);
      formData.append('local', data.local);
      formData.append('observations', data.observations);
      formData.append('font', font);
      formData.append('procedure_image', {
        type: 'image/jpeg',
        name: `${subarea_id}.jpg`,
        uri: uriPhoto,
      });

      api.post(`subareas/${subarea_id}`, formData).then(response => {
        Alert.alert('Procedimento criado com sucesso');
        reset({
          routes: [
            {
              name: 'Procedures',
              params: { subarea_id },
            },
          ],
          index: 0,
        });
      });
    },
    [subarea_id, font, uriPhoto, reset],
  );

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
            <Form onSubmit={handleCreateProcedure} ref={formRef}>
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

              <CameraButtonView>
                <CameraButton onPress={handleProcedurePhoto} icon="camera" />
              </CameraButtonView>

              <CreateButtonView>
                <Button onPress={() => formRef.current?.submitForm()}>
                  Criar procedimento
                </Button>
              </CreateButtonView>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateProcedure;
