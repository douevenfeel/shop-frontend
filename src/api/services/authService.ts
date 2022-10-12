import axiosInstance from 'api';
import { SignupProps, SigninProps } from 'api/types/authService.types';
import { AxiosError } from 'axios';

export const fetchSignup = (values: SignupProps) =>
    axiosInstance
        .post('/auth/signup', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchSignin = (values: SigninProps) =>
    axiosInstance
        .post('/auth/signin', values)
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchLogout = () =>
    axiosInstance
        .post('/auth/logout')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });

export const fetchRefresh = () =>
    axiosInstance
        .get('/auth/refresh')
        .then((response) => response?.data)
        .catch((error: AxiosError<Record<string, string>>) => {
            throw JSON.stringify(error.response?.data);
        });
