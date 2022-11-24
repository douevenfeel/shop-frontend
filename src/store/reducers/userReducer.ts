import { createSlice } from '@reduxjs/toolkit';
import { SearchBy } from 'api/types/userService.types';
import { UserModel } from 'models/userModel';
import { fetchSignupAction, fetchSigninAction, fetchLogoutAction, fetchRefreshAction } from 'store/actions/authAction';
import { fetchGetAllUsersAction, fetchUpdateUserRoleAction } from 'store/actions/userAction';
import { FetchStatus } from 'utils/fetchStatus.types';

export interface UserState {
    fetchStatus: FetchStatus;
    authorized: boolean;
    user: UserModel;
    users: UserModel[];
    page: number;
    count: number;
    searchBy: SearchBy;
    searchValue: string;
    error: string | any;
}

const initialState: UserState = {
    fetchStatus: FetchStatus.IDLE,
    authorized: false,
    user: {} as UserModel,
    users: [],
    page: 1,
    count: 0,
    searchBy: 'email',
    searchValue: '',
    error: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changePageUser: (state, { payload }) => {
            state.page = Math.max(payload, 1);
        },
        findUser: (state, { payload }) => {
            payload.searchValue ? (state.searchValue = payload.searchValue) : (state.searchValue = '');
            state.searchBy = payload.searchBy;
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
        builder.addCase(fetchLogoutAction.fulfilled, (state) => {
            console.log('fetchLogoutAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.user = {} as UserModel;
            state.authorized = false;
            state.error = '';
            localStorage.removeItem('token');
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
        builder.addCase(fetchRefreshAction.rejected, (state, { error }: any) => {
            console.log('fetchRefreshAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchGetAllUsersAction.pending, (state) => {
            console.log('fetchGetAllUsersAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchGetAllUsersAction.fulfilled, (state, { payload }) => {
            console.log('fetchGetAllUsersAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.users = payload.rows;
            state.page = 1;
            state.count = payload.count;
            state.error = '';
        });
        builder.addCase(fetchGetAllUsersAction.rejected, (state, { error }: any) => {
            console.log('fetchGetAllUsersAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
        builder.addCase(fetchUpdateUserRoleAction.pending, (state) => {
            console.log('fetchUpdateUserRoleAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
            state.error = '';
        });
        builder.addCase(fetchUpdateUserRoleAction.fulfilled, (state) => {
            console.log('fetchUpdateUserRoleAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.error = '';
        });
        builder.addCase(fetchUpdateUserRoleAction.rejected, (state, { error }: any) => {
            console.log('fetchUpdateUserRoleAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
            state.error = JSON.parse(error.message);
        });
    },
});

export const { changePageUser, findUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
