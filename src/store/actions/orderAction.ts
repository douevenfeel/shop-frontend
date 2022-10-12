import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    fetchCreateOrder,
    fetchGetAllOrders,
    fetchGetOneOrder,
    fetchCancelOrder,
    fetchHideOrder,
    fetchDeliveryOrder,
} from 'api/services/orderService';
import {
    GetAllOrdersProps,
    GetOneOrderProps,
    CancelOrderProps,
    HideOrderProps,
    DeliveryOrderProps,
} from 'api/types/orderService.types';

export const fetchCreateOrderAction = createAsyncThunk('createOrder/fetchCreateOrder', async () => {
    return await fetchCreateOrder();
});

export const fetchGetAllOrdersAction = createAsyncThunk(
    'getAllOrders/fetchGetAllOrders',
    async (params: GetAllOrdersProps) => {
        return await fetchGetAllOrders(params);
    }
);

export const fetchGetOneOrderAction = createAsyncThunk(
    'getOneOrder/fetchGetOneOrder',
    async (values: GetOneOrderProps) => {
        return await fetchGetOneOrder(values);
    }
);

export const fetchCancelOrderAction = createAsyncThunk(
    'cancelOrder/fetchCancelOrder',
    async (values: CancelOrderProps) => {
        return await fetchCancelOrder(values);
    }
);

export const fetchHideOrderAction = createAsyncThunk('hideOrder/fetchHideOrder', async (values: HideOrderProps) => {
    return await fetchHideOrder(values);
});

export const fetchDeliveryOrderAction = createAsyncThunk(
    'deliveryOrder/fetchDeliveryOrder',
    async (values: DeliveryOrderProps) => {
        return await fetchDeliveryOrder(values);
    }
);
