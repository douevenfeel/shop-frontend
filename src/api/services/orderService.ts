import axiosInstance from 'api';
import { AxiosError } from 'axios';

export const fetchCreateOrder = () =>
    axiosInstance
        .post('/order')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetAllOrders = () =>
    axiosInstance
        .get('/order/all')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetOneOrder = (id: number) =>
    axiosInstance
        .get(`/prder/${id}`)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
