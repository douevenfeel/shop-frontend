import axiosInstance from 'api';
import { AxiosError } from 'axios';
import { GetAllDevicesProps } from 'utils/fetch.types';

export const fetchGetAllDevices = (values: GetAllDevicesProps) =>
    axiosInstance
        .get('/device', { params: values })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchGetOneDevice = (id: number) =>
    axiosInstance
        .get(`/device/${id}`)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
