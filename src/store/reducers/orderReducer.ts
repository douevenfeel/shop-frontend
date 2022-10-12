import { createSlice } from '@reduxjs/toolkit';
import { OrderDetailModel, OrderModel } from 'models/orderModel';
import {
    fetchCreateOrderAction,
    fetchGetAllOrdersAction,
    fetchGetOneOrderAction,
    fetchCancelOrderAction,
    fetchHideOrderAction,
} from 'store/actions/orderAction';

import { FetchStatus } from 'utils/fetchStatus.types';

export interface OrderState {
    fetchStatus: FetchStatus;
    fetchActionStatus: FetchStatus;
    orders: OrderModel[];
    count: number;
    order: OrderDetailModel;
    loading: boolean;
    error: string;
}

const initialState: OrderState = {
    fetchStatus: FetchStatus.IDLE,
    fetchActionStatus: FetchStatus.IDLE,
    orders: [] as OrderModel[],
    count: 0,
    order: {} as OrderDetailModel,
    loading: false,
    error: '',
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        resetOrder: (state) => {
            state.order = {} as OrderDetailModel;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCreateOrderAction.pending, (state) => {
            console.log('fetchCreateOrderAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchCreateOrderAction.fulfilled, (state) => {
            console.log('fetchCreateOrderAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.error = '';
        });
        builder.addCase(fetchCreateOrderAction.rejected, (state, { error }: any) => {
            console.log('fetchCreateOrderAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchGetAllOrdersAction.pending, (state) => {
            console.log('fetchGetAllOrdersAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchGetAllOrdersAction.fulfilled, (state, { payload }) => {
            console.log('fetchGetAllOrdersAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.loading = false;
            state.orders = payload.rows;
            state.count = payload.count;
            state.error = '';
        });
        builder.addCase(fetchGetAllOrdersAction.rejected, (state, { error }: any) => {
            console.log('fetchGetAllOrdersAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.loading = false;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchGetOneOrderAction.pending, (state) => {
            console.log('fetchGetOneOrderAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.loading = true;
            state.error = '';
        });
        builder.addCase(fetchGetOneOrderAction.fulfilled, (state, { payload }) => {
            console.log('fetchGetOneOrderAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.loading = false;
            state.order = payload;
            state.error = '';
        });
        builder.addCase(fetchGetOneOrderAction.rejected, (state, { error }: any) => {
            console.log('fetchGetOneOrderAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.loading = false;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchCancelOrderAction.pending, (state) => {
            console.log('fetchCancelOrderAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchCancelOrderAction.fulfilled, (state) => {
            console.log('fetchCancelOrderAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
            state.error = '';
        });
        builder.addCase(fetchCancelOrderAction.rejected, (state, { error }: any) => {
            console.log('fetchCancelOrderAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchHideOrderAction.pending, (state) => {
            console.log('fetchHideOrderAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchHideOrderAction.fulfilled, (state) => {
            console.log('fetchHideOrderAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
            state.error = '';
        });
        builder.addCase(fetchHideOrderAction.rejected, (state, { error }: any) => {
            console.log('fetchHideOrderAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
    },
});

export const { resetOrder } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
