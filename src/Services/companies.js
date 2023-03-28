import axios from 'axios';
import {AsyncStorage} from 'react-native';

export const getCompanies = async (q?: {search?: string}) => {
  let query = '?';

  if (q) {
    query += q.search ? `search=${q.search}` : '';
  }

  const requestOptions = {
    headers: {
      Authorization:
        'Bearer ' + (await AsyncStorage.getItem('@GoBarber:token')),
    },
  };

  const response = await axios.get(
    `https://api.segnuv.com.br/api/companies/${query}`,
    requestOptions,
  );
  return response.data;
};
