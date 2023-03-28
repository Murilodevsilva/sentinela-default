import axios from 'axios';
import {AsyncStorage} from 'react-native';

export const login = async (params: {
  email: string;
  password: string;
  device_name: string;
}) => {
  const response = await axios.post(
    'https://api.segnuv.com.br/api/auth/login',
    params,
  );

  const {token} = response.data;

  if (token) {
    await AsyncStorage.setItem('@GoBarber:token', token);
  }

  return token;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post(`https://api.segnuv.com.br/auth/register`, {
    email,
    password,
  });

  const {token} = response.data;

  if (token) {
    await AsyncStorage.setItem('@GoBarber:token', token);
  }

  return token;
};
