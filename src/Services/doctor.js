import axios from 'axios';
import {AsyncStorage} from 'react-native';

export async function getDoctors() {
  const response = await axios.get('https://api.segnuv.com.br/api/doctors');

  return response.data;
}