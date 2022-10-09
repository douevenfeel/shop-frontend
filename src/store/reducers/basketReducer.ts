import { createSlice } from '@reduxjs/toolkit';
import { FetchStatus } from 'utils/fetchStatus.types';

export interface BasketState {
    fetchStatus: FetchStatus;
}

const initialState: BasketState = {
    fetchStatus: FetchStatus.IDLE,
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export const basketReducer = basketSlice.reducer;
