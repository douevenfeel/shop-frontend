import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchGetAllDevices,
    fetchGetOneDevice,
    fetchCreateDevice,
    fetchCreateCategoryDevice,
    fetchCreateInfoDevice,
    fetchUpdateCategoryTitleDevice,
    fetchDeleteCategoryDevice,
    fetchDeleteInfoDevice,
    fetchUpdateInfoDevice,
    fetchUpdateDevice,
} from 'api/services/deviceService';
import {
    GetAllDevicesProps,
    GetOneDeviceProps,
    CreateDeviceProps,
    CreateCategoryDeviceProps,
    CreateInfoDeviceProps,
    UpdateCategoryTitleDeviceProps,
    DeleteCategoryDeviceProps,
    DeleteInfoDeviceProps,
    UpdateInfoDeviceProps,
    UpdateDeviceProps,
} from 'api/types/deviceService.types';

export const fetchGetAllDevicesAction = createAsyncThunk(
    'getAllDevices/fetchGetAllDevices',
    async (values: GetAllDevicesProps) => {
        return await fetchGetAllDevices(values);
    },
);

export const fetchGetOneDeviceAction = createAsyncThunk(
    'getOneDevice/fetchGetOneDevice',
    async (values: GetOneDeviceProps) => {
        return await fetchGetOneDevice(values);
    },
);

export const fetchCreateDeviceAction = createAsyncThunk(
    'createDevice/fetchCreateDevice',
    async (values: CreateDeviceProps) => {
        return await fetchCreateDevice(values);
    },
);

export const fetchUpdateDeviceAction = createAsyncThunk(
    'updateDevice/fetchUpdateDevice',
    async (values: UpdateDeviceProps) => {
        return await fetchUpdateDevice(values);
    },
);

export const fetchCreateCategoryDeviceAction = createAsyncThunk(
    'createCategoryDevice/fetchCreateCategoryDevice',
    async (values: CreateCategoryDeviceProps) => {
        return await fetchCreateCategoryDevice(values);
    },
);

export const fetchCreateInfoDeviceAction = createAsyncThunk(
    'createInfoDevice/fetchCreateInfoDevice',
    async (values: CreateInfoDeviceProps) => {
        return await fetchCreateInfoDevice(values);
    },
);

export const fetchUpdateCategoryTitleDeviceAction = createAsyncThunk(
    'updateCategoryTitleDevice/fetchUpdateCategoryTitleDevice',
    async (values: UpdateCategoryTitleDeviceProps) => {
        return await fetchUpdateCategoryTitleDevice(values);
    },
);

export const fetchDeleteCategoryDeviceAction = createAsyncThunk(
    'DeleteCategoryDevice/fetchDeleteCategoryDevice',
    async (values: DeleteCategoryDeviceProps) => {
        return await fetchDeleteCategoryDevice(values);
    },
);

export const fetchUpdateInfoDeviceAction = createAsyncThunk(
    'updateInfoDevice/fetchUpdateInfoDevice',
    async (values: UpdateInfoDeviceProps) => {
        return await fetchUpdateInfoDevice(values);
    },
);

export const fetchDeleteInfoDeviceAction = createAsyncThunk(
    'deleteInfoDevice/fetchDeleteInfoDevice',
    async (values: DeleteInfoDeviceProps) => {
        return await fetchDeleteInfoDevice(values);
    },
);
