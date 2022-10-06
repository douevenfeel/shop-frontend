import { configureStore } from '@reduxjs/toolkit';
import { deviceReducer } from './reducers/deviceReducer';
import { userReducer } from './reducers/userReducer';

export const store = configureStore({
    reducer: { user: userReducer, device: deviceReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
