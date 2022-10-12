import axiosInstance from 'api';
import {
    AddDeviceBasketProps,
    ChangeCountBasketProps,
    ChangeSelectedBasketProps,
    DeleteDeviceBasketProps,
} from 'api/types/basketService.types';

import { AxiosError } from 'axios';

export const fetchGetBasket = () =>
    axiosInstance
        .get('/basket')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchAddDeviceBasket = (values: AddDeviceBasketProps) =>
    axiosInstance
        .post('/basket', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchChangeCountBasket = (values: ChangeCountBasketProps) =>
    axiosInstance
        .put('/basket', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchChangeSelectedBasket = (values: ChangeSelectedBasketProps) =>
    axiosInstance
        .put('/basket/selected', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchDeleteDeviceBasket = (values: DeleteDeviceBasketProps) =>
    axiosInstance
        .delete('/basket', { data: values })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
