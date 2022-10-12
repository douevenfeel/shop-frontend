import { UpdateUserRole } from 'api/types/userService.types';
import axiosInstance from 'api';
import { AxiosError } from 'axios';

export const fetchGetAllUsers = () =>
    axiosInstance
        .get('/user')
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
