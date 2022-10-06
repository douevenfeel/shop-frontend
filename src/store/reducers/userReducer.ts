import { fetchLogoutAction, fetchSigninAction, fetchSignupAction, fetchRefreshAction } from './../actions/authAction';
import { createSlice } from '@reduxjs/toolkit';
import { UserModel } from 'models/userModel';
import { FetchStatus } from 'utils/fetchStatus.types';

export interface UserState {
    fetchStatus: FetchStatus;
    authorized: boolean;
    user: UserModel;
    error: string | any;
}

const initialState: UserState = {
    fetchStatus: FetchStatus.IDLE,
    authorized: false,
    user: {} as UserModel,
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUserError: (state) => {
            state.error = '';
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSignupAction.pending, (state) => {
            console.log('fetchSignupAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.authorized = false;
            state.error = '';
        });
        builder.addCase(fetchSignupAction.fulfilled, (state, { payload }) => {
            console.log('fetchSignupAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.user = payload.user;
            state.authorized = true;
            state.error = '';
            localStorage.setItem('token', payload.accessToken);
        });
        builder.addCase(fetchSignupAction.rejected, (state, { error }: any) => {
            console.log('fetchSignupAction.rejected');
            console.log(error);
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchSigninAction.pending, (state) => {
            console.log('fetchSigninAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchSigninAction.fulfilled, (state, { payload }) => {
            console.log('fetchSigninAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.user = payload.user;
            state.authorized = true;
            state.error = '';
            localStorage.setItem('token', payload.accessToken);
        });
        builder.addCase(fetchSigninAction.rejected, (state, { error }: any) => {
            console.log('fetchSigninAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchLogoutAction.fulfilled, (state, { payload }) => {
            console.log('fetchLogoutAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.user = {} as UserModel;
            state.authorized = false;
            state.error = '';
            localStorage.removeItem('token');
        });
        builder.addCase(fetchRefreshAction.rejected, (state, { error }: any) => {
            console.log('fetchRefreshAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchRefreshAction.pending, (state) => {
            console.log('fetchRefreshAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchRefreshAction.fulfilled, (state, { payload }) => {
            console.log('fetchRefreshAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.user = payload.user;
            state.authorized = true;
            state.error = '';
            localStorage.setItem('token', payload.accessToken);
        });
    },
});

export const { resetUserError } = userSlice.actions;
export const userReducer = userSlice.reducer;
