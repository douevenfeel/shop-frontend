import { GetAllDevicesProps } from 'utils/fetch.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchGetAllDevices, fetchGetOneDevice } from 'api/services/deviceService';

export const fetchGetAllDevicesAction = createAsyncThunk(
    'getAll/fetchGetAllDevices',
    async (values: GetAllDevicesProps) => {
        return await fetchGetAllDevices(values);
    }
);

export const fetchGetOneDeviceAction = createAsyncThunk('getOne/fetchGetOneDevice', async (id: number) => {
    return await fetchGetOneDevice(id);
});
