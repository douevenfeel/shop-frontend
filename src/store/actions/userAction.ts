import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllUsers, fetchUpdateUserRole } from 'api/services/userService';
import { UpdateUserRole } from 'api/types/userService.types';

export const fetchGetAllUsersAction = createAsyncThunk('getAllUsers/fetchGetAllUsers', async () => {
    return await fetchGetAllUsers();
});

export const fetchUpdateUserRoleAction = createAsyncThunk(
    'updateUserRole/fetchUpdateUserRole',
    async (values: UpdateUserRole) => {
        return await fetchUpdateUserRole(values);
    }
);
