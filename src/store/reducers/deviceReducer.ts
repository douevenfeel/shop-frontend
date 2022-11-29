import { createSlice } from '@reduxjs/toolkit';
import { DeviceModel, DeviceDetailModel } from 'models/deviceModel';
import {
    fetchGetAllDevicesAction,
    fetchGetOneDeviceAction,
    fetchCreateDeviceAction,
    fetchCreateCategoryDeviceAction,
    fetchCreateInfoDeviceAction,
    fetchUpdateCategoryTitleDeviceAction,
    fetchDeleteCategoryDeviceAction,
    fetchDeleteInfoDeviceAction,
    fetchUpdateInfoDeviceAction,
    fetchUpdateDeviceAction,
} from 'store/actions/deviceAction';
import { FetchStatus } from 'utils/fetchStatus.types';

export interface DeviceState {
    fetchStatus: FetchStatus;
    fetchActionStatus: FetchStatus;
    devices: DeviceModel[];
    device: DeviceDetailModel;
    count: number;
    page: number;
    limit: number;
    title: string;
    minPrice: number;
    maxPrice: number;
    fromPrice: number;
    toPrice: number;
    order: { title: string; order: [string, string] };
}

const initialState: DeviceState = {
    fetchStatus: FetchStatus.IDLE,
    fetchActionStatus: FetchStatus.IDLE,
    devices: [],
    device: {} as DeviceDetailModel,
    count: 0,
    page: 1,
    limit: 12,
    title: 'all',
    minPrice: 0,
    maxPrice: 0,
    fromPrice: 0,
    toPrice: 0,
    order: { title: 'default', order: ['image', 'DESC'] },
};

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        resetDevice: (state) => {
            state.device = {} as DeviceDetailModel;
        },
        changePageDevice: (state, { payload }) => {
            state.page = Math.max(payload, 1);
        },
        sortDevices: (state, { payload }) => {
            state.order = payload;
        },
        findDevice: (state, { payload }) => {
            payload.title ? (state.title = payload.title) : (state.title = 'all');
            payload.fromPrice ? (state.fromPrice = payload.fromPrice) : (state.fromPrice = 0);
            payload.toPrice ? (state.toPrice = payload.toPrice) : (state.toPrice = 0);
        },
        resetPage: (state) => {
            state.page = 1;
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
            state.minPrice = payload.minPrice;
            state.maxPrice = payload.maxPrice;
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
        builder.addCase(fetchCreateDeviceAction.pending, (state) => {
            console.log('fetchCreateDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchCreateDeviceAction.fulfilled, (state) => {
            console.log('fetchCreateDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchCreateDeviceAction.rejected, (state) => {
            console.log('fetchCreateDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdateDeviceAction.pending, (state) => {
            console.log('fetchUpdateDeviceAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdateDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdateDeviceAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdateDeviceAction.rejected, (state) => {
            console.log('fetchUpdateDeviceAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchCreateCategoryDeviceAction.pending, (state) => {
            console.log('fetchCreateCategoryDeviceAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchCreateCategoryDeviceAction.fulfilled, (state) => {
            console.log('fetchCreateCategoryDeviceAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchCreateCategoryDeviceAction.rejected, (state) => {
            console.log('fetchCreateCategoryDeviceAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchCreateInfoDeviceAction.pending, (state) => {
            console.log('fetchCreateInfoDeviceAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchCreateInfoDeviceAction.fulfilled, (state) => {
            console.log('fetchCreateInfoDeviceAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchCreateInfoDeviceAction.rejected, (state) => {
            console.log('fetchCreateInfoDeviceAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdateCategoryTitleDeviceAction.pending, (state) => {
            console.log('fetchUpdateCategoryTitleDeviceAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdateCategoryTitleDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdateCategoryTitleDeviceAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdateCategoryTitleDeviceAction.rejected, (state) => {
            console.log('fetchUpdateCategoryTitleDeviceAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchDeleteCategoryDeviceAction.pending, (state) => {
            console.log('fetchDeleteCategoryDeviceAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchDeleteCategoryDeviceAction.fulfilled, (state) => {
            console.log('fetchDeleteCategoryDeviceAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchDeleteCategoryDeviceAction.rejected, (state) => {
            console.log('fetchDeleteCategoryDeviceAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdateInfoDeviceAction.pending, (state) => {
            console.log('fetchUpdateInfoDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdateInfoDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdateInfoDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdateInfoDeviceAction.rejected, (state) => {
            console.log('fetchUpdateInfoDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchDeleteInfoDeviceAction.pending, (state) => {
            console.log('fetchDeleteInfoDeviceAction.pending');
            state.fetchActionStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchDeleteInfoDeviceAction.fulfilled, (state) => {
            console.log('fetchDeleteInfoDeviceAction.fulfilled');
            state.fetchActionStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchDeleteInfoDeviceAction.rejected, (state) => {
            console.log('fetchDeleteInfoDeviceAction.rejected');
            state.fetchActionStatus = FetchStatus.REJECTED;
        });
    },
});

export const { resetDevice, changePageDevice, sortDevices, findDevice, resetPage } = deviceSlice.actions;

export const deviceReducer = deviceSlice.reducer;
