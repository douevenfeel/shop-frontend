import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllUsers, fetchUpdateUserRole } from 'api/services/userService';
import { GetAllUsers, UpdateUserRole } from 'api/types/userService.types';

export const fetchGetAllUsersAction = createAsyncThunk('getAllUsers/fetchGetAllUsers', async (values: GetAllUsers) => {
    return await fetchGetAllUsers(values);
});

export const fetchUpdateUserRoleAction = createAsyncThunk(
    'updateUserRole/fetchUpdateUserRole',
    async (values: UpdateUserRole) => {
        return await fetchUpdateUserRole(values);
    },
);
