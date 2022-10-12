import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchGetAllDevices,
    fetchGetOneDevice,
    fetchCreateDevice,
    fetchCreateCategoryDevice,
    fetchCreateInfoDevice,
    fetchUpdateAvailableDevice,
    fetchUpdatePriceDevice,
    fetchUpdateDiscountDevice,
    fetchRemoveDiscountDevice,
    fetchUpdateCategoryTitleDevice,
    fetchDeleteCategoryDevice,
    fetchDeleteInfoDevice,
} from 'api/services/deviceService';
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

export const fetchGetAllDevicesAction = createAsyncThunk(
    'getAllDevices/fetchGetAllDevices',
    async (values: GetAllDevicesProps) => {
        return await fetchGetAllDevices(values);
    }
);

export const fetchGetOneDeviceAction = createAsyncThunk(
    'getOneDevice/fetchGetOneDevice',
    async (values: GetOneDeviceProps) => {
        return await fetchGetOneDevice(values);
    }
);

export const fetchCreateDeviceAction = createAsyncThunk(
    'createDevice/fetchCreateDevice',
    async (values: CreateDeviceProps) => {
        return await fetchCreateDevice(values);
    }
);

export const fetchCreateCategoryDeviceAction = createAsyncThunk(
    'createCategoryDevice/fetchCreateCategoryDevice',
    async (values: CreateCategoryDeviceProps) => {
        return await fetchCreateCategoryDevice(values);
    }
);

export const fetchCreateInfoDeviceAction = createAsyncThunk(
    'createInfoDevice/fetchCreateInfoDevice',
    async (values: CreateInfoDeviceProps) => {
        return await fetchCreateInfoDevice(values);
    }
);

export const fetchUpdateAvailableDeviceAction = createAsyncThunk(
    'updateAvailableDevice/fetchUpdateAvailableDevice',
    async (values: UpdateAvailableDeviceProps) => {
        return await fetchUpdateAvailableDevice(values);
    }
);

export const fetchUpdatePriceDeviceDeviceAction = createAsyncThunk(
    'updatePriceDevice/fetchUpdatePriceDevice',
    async (values: UpdatePriceDeviceProps) => {
        return await fetchUpdatePriceDevice(values);
    }
);

export const fetchUpdateDiscountDeviceAction = createAsyncThunk(
    'updateDiscountDevice/fetchUpdateDiscountDevice',
    async (values: DiscountDeviceProps) => {
        return await fetchUpdateDiscountDevice(values);
    }
);

export const fetchRemoveDiscountDeviceAction = createAsyncThunk(
    'removeDiscountDevice/fetchRemoveDiscountDevice',
    async (values: RemoveDiscountDeviceProps) => {
        return await fetchRemoveDiscountDevice(values);
    }
);

export const fetchUpdateCategoryTitleDeviceAction = createAsyncThunk(
    'updateCategoryTitleDevice/fetchUpdateCategoryTitleDevice',
    async (values: UpdateCategoryTitleDeviceProps) => {
        return await fetchUpdateCategoryTitleDevice(values);
    }
);

export const fetchDeleteCategoryDeviceAction = createAsyncThunk(
    'DeleteCategoryDevice/fetchDeleteCategoryDevice',
    async (values: DeleteCategoryDeviceProps) => {
        return await fetchDeleteCategoryDevice(values);
    }
);

export const fetchDeleteInfoDeviceAction = createAsyncThunk(
    'deleteInfoDevice/fetchDeleteInfoDevice',
    async (values: DeleteInfoDeviceProps) => {
        return await fetchDeleteInfoDevice(values);
    }
);
