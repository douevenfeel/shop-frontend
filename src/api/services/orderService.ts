import axiosInstance from 'api';
import { AxiosError } from 'axios';
import { GetAllOrdersProps } from 'utils/fetch.types';

export const fetchCreateOrder = () =>
    axiosInstance
        .post('/order')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetAllOrders = (params: GetAllOrdersProps) =>
    axiosInstance
        .get('/order/all', { params })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetOneOrder = (id: number) =>
    axiosInstance
        .get(`/order/${id}`)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchCancelOrder = (id: number) =>
    axiosInstance
        .put('/order/cancel', { id })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchHideOrder = (id: number) =>
    axiosInstance
        .put('/order/hide', { id })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
