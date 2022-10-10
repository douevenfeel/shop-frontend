import { createSlice } from '@reduxjs/toolkit';
import { BasketModel } from 'models/basketModel';
import {
    fetchAddDeviceBasketAction,
    fetchChangeCountBasketAction,
    fetchChangeSelectedBasketAction,
    fetchDeleteDeviceBasketAction,
    fetchGetBasketAction,
} from 'store/actions/basketAction';
import { FetchStatus } from 'utils/fetchStatus.types';

export interface BasketState {
    fetchStatus: FetchStatus;
    fetchActionStatus: FetchStatus;
    basket: BasketModel[];
}

const initialState: BasketState = {
    fetchStatus: FetchStatus.IDLE,
    fetchActionStatus: FetchStatus.IDLE,
    basket: [] as BasketModel[],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: { resetBasket: (state) => initialState },
    extraReducers: (builder) => {
        builder.addCase(fetchGetBasketAction.pending, (state) => {
            console.log('fetchGetBasketAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchGetBasketAction.fulfilled, (state, { payload }) => {
            console.log('fetchGetBasketAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.basket = payload;
        });
        builder.addCase(fetchGetBasketAction.rejected, (state) => {
            console.log('fetchGetBasketAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchAddDeviceBasketAction.pending, (state) => {
            console.log('fetchAddDeviceBasketAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchAddDeviceBasketAction.fulfilled, (state) => {
            console.log('fetchAddDeviceBasketAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchAddDeviceBasketAction.rejected, (state) => {
            console.log('fetchAddDeviceBasketAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchChangeCountBasketAction.pending, (state) => {
            console.log('fetchChangeCountBasketAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchChangeCountBasketAction.fulfilled, (state) => {
            console.log('fetchChangeCountBasketAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchChangeCountBasketAction.rejected, (state) => {
            console.log('fetchChangeCountBasketAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchChangeSelectedBasketAction.pending, (state) => {
            console.log('fetchChangeSelectedBasketAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchChangeSelectedBasketAction.fulfilled, (state) => {
            console.log('fetchChangeSelectedBasketAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchChangeSelectedBasketAction.rejected, (state) => {
            console.log('fetchChangeSelectedBasketAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchDeleteDeviceBasketAction.pending, (state) => {
            console.log('fetchDeleteDeviceBasketAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchDeleteDeviceBasketAction.fulfilled, (state) => {
            console.log('fetchDeleteDeviceBasketAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchDeleteDeviceBasketAction.rejected, (state) => {
            console.log('fetchDeleteDeviceBasketAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
    },
});

export const { resetBasket } = basketSlice.actions;

export const basketReducer = basketSlice.reducer;
