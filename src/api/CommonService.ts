import axios from 'axios';
import { Priorizable } from '../types/PriorizableType';

export const getPriorizables = (baseUrl) => {
    return axios.get<Priorizable[]>(baseUrl, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};


export const updatePriorizable = (receiver: Priorizable, name: string, priority: number, baseUrl) => {
    return axios.patch<Priorizable[]>(`${baseUrl}/${name}`, receiver, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
