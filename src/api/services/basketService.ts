import axiosInstance from 'api';
import { AxiosError } from 'axios';

export const fetchGetBasket = () =>
    axiosInstance
        .get('/basket')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
