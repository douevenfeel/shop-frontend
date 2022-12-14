import { configureStore } from '@reduxjs/toolkit';
import { basketReducer } from './reducers/basketReducer';
import { deviceReducer } from './reducers/deviceReducer';
import { orderReducer } from './reducers/orderReducer';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
    reducer: { user: userReducer, device: deviceReducer, basket: basketReducer, order: orderReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
