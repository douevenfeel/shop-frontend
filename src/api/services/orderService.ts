import axiosInstance from 'api';
import {
    GetAllOrdersProps,
    GetOneOrderProps,
    CancelOrderProps,
    HideOrderProps,
    DeliveryOrderProps,
    GetAllOrdersManagerProps,
} from 'api/types/orderService.types';
import { AxiosError } from 'axios';

export const fetchCreateOrder = () =>
    axiosInstance
        .post('/order')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetAllOrdersManager = (params: GetAllOrdersManagerProps) =>
    axiosInstance
        .get('/order', { params })
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

export const fetchGetOneOrder = (values: GetOneOrderProps) =>
    axiosInstance
        .get(`/order/${values.id}`)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchCancelOrder = (values: CancelOrderProps) =>
    axiosInstance
        .put('/order/cancel', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchHideOrder = (values: HideOrderProps) =>
    axiosInstance
        .put('/order/hide', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchDeliveryOrder = (values: DeliveryOrderProps) =>
    axiosInstance
        .put('/order/delivery', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
