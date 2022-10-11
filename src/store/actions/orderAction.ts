import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchCancelOrder,
    fetchCreateOrder,
    fetchGetAllOrders,
    fetchGetOneOrder,
    fetchHideOrder,
} from 'api/services/orderService';
import { GetAllOrdersProps } from 'utils/fetch.types';

export const fetchCreateOrderAction = createAsyncThunk('createOrder/fetchCreateOrder', async () => {
    return await fetchCreateOrder();
});

export const fetchGetAllOrdersAction = createAsyncThunk(
    'getAllOrders/fetchGetAllOrders',
    async (params: GetAllOrdersProps) => {
        return await fetchGetAllOrders(params);
    }
);

export const fetchGetOneOrderAction = createAsyncThunk('getOneOrder/fetchGetOneOrder', async (id: number) => {
    return await fetchGetOneOrder(id);
});

export const fetchCancelOrderAction = createAsyncThunk('cancelOrder/fetchCancelOrder', async (id: number) => {
    return await fetchCancelOrder(id);
});

export const fetchHideOrderAction = createAsyncThunk('hideOrder/fetchHideOrder', async (id: number) => {
    return await fetchHideOrder(id);
});
