import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLogout, fetchRefresh, fetchSignin, fetchSignup } from 'api/services/authService';
import { SigninProps, SignupProps } from 'utils/fetch.types';

export const fetchSignupAction = createAsyncThunk('signup/fetchSignup', async (values: SignupProps) => {
    return await fetchSignup(values);
});

export const fetchSigninAction = createAsyncThunk('signin/fetchSignin', async (values: SigninProps) => {
    return await fetchSignin(values);
});

export const fetchLogoutAction = createAsyncThunk('logout/fetchLogout', async () => {
    return await fetchLogout();
});

export const fetchRefreshAction = createAsyncThunk('refresh/fetchRefresh', async () => {
    return await fetchRefresh();
});
