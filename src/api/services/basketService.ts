import axiosInstance from 'api';
import { AxiosError } from 'axios';
import { ChangeCount, ChangeSelected } from 'utils/fetch.types';

export const fetchGetBasket = () =>
    axiosInstance
        .get('/basket')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchAddDeviceBasket = (deviceId: number) =>
    axiosInstance
        .post('/basket', { deviceId })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchChangeCountBasket = (values: ChangeCount) =>
    axiosInstance
        .put('/basket', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchChangeSelectedBasket = (values: ChangeSelected) =>
    axiosInstance
        .put('/basket/selected', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchDeleteDeviceBasket = (deviceId: number) =>
    axiosInstance
        .delete('/basket', { data: { deviceId } })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
