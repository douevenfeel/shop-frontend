import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCreateOrder, fetchGetAllOrders, fetchGetOneOrder } from 'api/services/orderService';

export const fetchCreateOrderAction = createAsyncThunk(
    'createOrder/fetchCreateOrder',
    async () => {
        return await fetchCreateOrder();
    }
);

export const fetchGetAllOrdersAction = createAsyncThunk('getAllOrders/fetchGetAllOrders', async () => {
    return await fetchGetAllOrders();
});

export const fetchGetOneOrderAction = createAsyncThunk('getOneOrder/fetchGetOneOrder', async (id: number) => {
    return await fetchGetOneOrder(id);
});
