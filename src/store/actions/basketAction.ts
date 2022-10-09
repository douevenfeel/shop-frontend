import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetBasket } from 'api/services/basketService';

export const fetchGetBasketAction = createAsyncThunk(
    'getBasket/fetchGetBasket',
    async () => {
        return await fetchGetBasket();
    }
);
