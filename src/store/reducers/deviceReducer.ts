import { fetchGetOneDeviceAction } from './../actions/deviceAction';
import { createSlice } from '@reduxjs/toolkit';
import { DeviceModel, DeviceDetailModel } from 'models/deviceModel';
import { fetchGetAllDevicesAction } from 'store/actions/deviceAction';
import { FetchStatus } from 'utils/fetchStatus.types';

export interface DeviceState {
    fetchStatus: FetchStatus;
    devices: DeviceModel[];
    device: DeviceDetailModel;
    count: number;
    page: number;
    limit: number;
    order: { title: string; order: [string, string] };
}

const initialState: DeviceState = {
    fetchStatus: FetchStatus.IDLE,
    devices: [],
    device: {} as DeviceDetailModel,
    count: 0,
    page: 1,
    limit: 12,
    order: { title: 'default', order: ['image', 'DESC'] },
};

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        resetDevice: (state) => {
            state.device = {} as DeviceDetailModel;
        },
        changePage: (state, { payload }) => {
            state.page = Math.max(payload, 1);
        },
        sortDevices: (state, { payload }) => {
            state.order = payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetAllDevicesAction.pending, (state) => {
            console.log('fetchGetAllDevicesAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchGetAllDevicesAction.fulfilled, (state, { payload }) => {
            console.log('fetchGetAllDevicesAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.devices = payload.rows;
            state.count = payload.count;
        });
        builder.addCase(fetchGetAllDevicesAction.rejected, (state) => {
            console.log('fetchGetOneDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchGetOneDeviceAction.pending, (state) => {
            console.log('fetchGetOneDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchGetOneDeviceAction.fulfilled, (state, { payload }) => {
            console.log('fetchGetOneDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
            state.device = payload;
        });
        builder.addCase(fetchGetOneDeviceAction.rejected, (state) => {
            console.log('fetchGetOneDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
    },
});

export const { resetDevice, changePage, sortDevices } = deviceSlice.actions;

export const deviceReducer = deviceSlice.reducer;
