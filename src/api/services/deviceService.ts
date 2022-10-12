import axiosInstance from 'api';
import {
    GetAllDevicesProps,
    GetOneDeviceProps,
    CreateDeviceProps,
    CreateCategoryDeviceProps,
    CreateInfoDeviceProps,
    UpdateAvailableDeviceProps,
    UpdatePriceDeviceProps,
    DiscountDeviceProps,
    RemoveDiscountDeviceProps,
    UpdateCategoryTitleDeviceProps,
    DeleteCategoryDeviceProps,
    DeleteInfoDeviceProps,
} from 'api/types/deviceService.types';

import { AxiosError } from 'axios';

export const fetchGetAllDevices = (values: GetAllDevicesProps) =>
    axiosInstance
        .get('/device', { params: values })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetOneDevice = (values: GetOneDeviceProps) =>
    axiosInstance
        .get(`/device/${values.id}`)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchCreateDevice = (values: CreateDeviceProps) =>
    axiosInstance
        .post('/device', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchCreateCategoryDevice = (values: CreateCategoryDeviceProps) =>
    axiosInstance
        .post(`/device/category`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchCreateInfoDevice = (values: CreateInfoDeviceProps) =>
    axiosInstance
        .post(`/device/category/info`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchUpdateAvailableDevice = (values: UpdateAvailableDeviceProps) =>
    axiosInstance
        .put(`/device/available`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchUpdatePriceDevice = (values: UpdatePriceDeviceProps) =>
    axiosInstance
        .put(`/device/update-price`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchUpdateDiscountDevice = (values: DiscountDeviceProps) =>
    axiosInstance
        .put(`/device/update-discount`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchRemoveDiscountDevice = (values: RemoveDiscountDeviceProps) =>
    axiosInstance
        .put(`/device/remove-discount`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchUpdateCategoryTitleDevice = (values: UpdateCategoryTitleDeviceProps) =>
    axiosInstance
        .put(`/device/category`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });


export const fetchDeleteCategoryDevice = (values: DeleteCategoryDeviceProps) =>
    axiosInstance
        .delete(`/device/category`, { data: values })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchDeleteInfoDevice = (values: DeleteInfoDeviceProps) =>
    axiosInstance
        .delete(`/device/category/info`, { data: values })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
