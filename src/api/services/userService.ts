import axiosInstance from 'api';
import { GetAllUsers, UpdateUserRole } from 'api/types/userService.types';
import { AxiosError } from 'axios';

export const fetchGetAllUsers = (values: GetAllUsers) =>
    axiosInstance
        .get('/user', { params: values })
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchUpdateUserRole = (values: UpdateUserRole) =>
    axiosInstance
        .put(`/user/role`, values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
