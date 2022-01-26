import axios from 'axios';
import { Receiver } from '../types/ReceiverType';
export const baseUrl = 'http://localhost:8080/receivers';

export const getDestinations = () => {
  return axios.get<Receiver[]>(baseUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const getDestination = (name: string) => {
  return axios.get<Receiver[]>(`${baseUrl}/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const createDestination = (receiver: Receiver) => {
  return axios.post<Receiver[]>(baseUrl, receiver, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateDestination = (receiver: Receiver, name: string) => {
  return axios.patch<Receiver[]>(`${baseUrl}/${name}`, receiver, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteDestination = (name: string) => {
  return axios.delete<Receiver[]>(`${baseUrl}/${name}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
