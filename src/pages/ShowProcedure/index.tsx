import React from 'react';
import { useRoute } from '@react-navigation/native';

import { ProcedureView, ProcedureObservation, ProcedureImage } from './styles';

export interface RouteParams {
  procedure_image_url: string;
  observations: string;
}

const ShowProcedure: React.FC = () => {
  const route = useRoute();
  const { procedure_image_url, observations } = route.params as RouteParams;

  return (
    <ProcedureView>
      <ProcedureObservation>{observations}</ProcedureObservation>

      <ProcedureImage source={{ uri: procedure_image_url }} />
    </ProcedureView>
  );
};

export default ShowProcedure;
