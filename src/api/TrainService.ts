import axios from "axios";
import {Train } from "../types/TrainType"
export const baseUrl = "http://localhost:8080/destinations";
export const baseUrl2 = "http://localhost:8080/destination";

export const getDestinations = () => {
    return axios.get<Train[]>(baseUrl, {
      headers: {
       'Content-Type': 'application/json',
      },
    });
  };

  export const getDestination = (name: string) => {
    return axios.get<Train[]>(`${baseUrl2}/${name}`, {
      headers: {
       'Content-Type': 'application/json',
      },
    });
  };

  export const createDestination = (train: Train) => {
    return axios.post<Train[]>(baseUrl2, train, {
      headers: {
       'Content-Type': 'application/json',
      },
    });
  };

  export const deleteDestination = (name: string) => {
    return axios.delete<Train[]>(`${baseUrl2}/${name}`, {
      headers: {
       'Content-Type': 'application/json',
      },
    });
  };

