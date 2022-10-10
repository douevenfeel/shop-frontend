import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchAddDeviceBasket,
    fetchChangeCountBasket,
    fetchChangeSelectedBasket,
    fetchDeleteDeviceBasket,
    fetchGetBasket,
} from 'api/services/basketService';
import { ChangeCount, ChangeSelected } from 'utils/fetch.types';

export const fetchGetBasketAction = createAsyncThunk('getBasket/fetchGetBasket', async () => {
    return await fetchGetBasket();
});

export const fetchAddDeviceBasketAction = createAsyncThunk(
    'addDeviceBasket/fetchAddDevice',
    async (deviceId: number) => {
        return await fetchAddDeviceBasket(deviceId);
    }
);

export const fetchChangeCountBasketAction = createAsyncThunk(
    'changeCountBasket/fetchChangeCountBasket',
    async (values: ChangeCount) => {
        return await fetchChangeCountBasket(values);
    }
);

export const fetchChangeSelectedBasketAction = createAsyncThunk(
    'changeSelectedBasket/fetchChangeSelectedBasket',
    async (values: ChangeSelected) => {
        return await fetchChangeSelectedBasket(values);
    }
);

export const fetchDeleteDeviceBasketAction = createAsyncThunk(
    'deleteDeviceBasket/fetchDeleteDeviceBasket',
    async (deviceId: number) => {
        return await fetchDeleteDeviceBasket(deviceId);
    }
);
