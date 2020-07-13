import useSWR from 'swr';
import api from '../services/api';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useAxios<Data = any>(url: string) {
  const { data, error, mutate } = useSWR<Data>(url, async () => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error, mutate };
}
