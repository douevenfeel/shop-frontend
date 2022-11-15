import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchGetBasket,
    fetchAddDeviceBasket,
    fetchChangeCountBasket,
    fetchChangeSelectedBasket,
    fetchDeleteDeviceBasket,
} from 'api/services/basketService';
import {
    AddDeviceBasketProps,
    ChangeCountBasketProps,
    ChangeSelectedBasketProps,
    DeleteDeviceBasketProps,
} from 'api/types/basketService.types';

export const fetchGetBasketAction = createAsyncThunk(
    'getBasket/fetchGetBasket',
    async () => {
        return await fetchGetBasket();
    }
);

export const fetchAddDeviceBasketAction = createAsyncThunk(
    'addDeviceBasket/fetchAddDevice',
    async (values: AddDeviceBasketProps) => {
        return await fetchAddDeviceBasket(values);
    }
);

export const fetchChangeCountBasketAction = createAsyncThunk(
    'changeCountBasket/fetchChangeCountBasket',
    async (values: ChangeCountBasketProps) => {
        return await fetchChangeCountBasket(values);
    }
);

export const fetchChangeSelectedBasketAction = createAsyncThunk(
    'changeSelectedBasket/fetchChangeSelectedBasket',
    async (values: ChangeSelectedBasketProps) => {
        return await fetchChangeSelectedBasket(values);
    }
);

export const fetchDeleteDeviceBasketAction = createAsyncThunk(
    'deleteDeviceBasket/fetchDeleteDeviceBasket',
    async (values: DeleteDeviceBasketProps) => {
        return await fetchDeleteDeviceBasket(values);
    }
);
