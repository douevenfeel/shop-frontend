import { createSlice } from '@reduxjs/toolkit';
import { DeviceModel, DeviceDetailModel } from 'models/deviceModel';
import {
    fetchGetAllDevicesAction,
    fetchGetOneDeviceAction,
    fetchCreateDeviceAction,
    fetchCreateCategoryDeviceAction,
    fetchCreateInfoDeviceAction,
    fetchUpdateAvailableDeviceAction,
    fetchUpdatePriceDeviceAction,
    fetchUpdateDiscountDeviceAction,
    fetchRemoveDiscountDeviceAction,
    fetchUpdateCategoryTitleDeviceAction,
    fetchDeleteCategoryDeviceAction,
    fetchDeleteInfoDeviceAction,
} from 'store/actions/deviceAction';
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
        changePageDevice: (state, { payload }) => {
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
        builder.addCase(fetchCreateDeviceAction.pending, (state) => {
            console.log('fetchGetOneDeviceAction.pending');
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
        builder.addCase(fetchCreateCategoryDeviceAction.pending, (state) => {
            console.log('fetchCreateCategoryDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchCreateCategoryDeviceAction.fulfilled, (state) => {
            console.log('fetchCreateCategoryDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchCreateCategoryDeviceAction.rejected, (state) => {
            console.log('fetchCreateCategoryDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchCreateInfoDeviceAction.pending, (state) => {
            console.log('fetchCreateInfoDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchCreateInfoDeviceAction.fulfilled, (state) => {
            console.log('fetchCreateInfoDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchCreateInfoDeviceAction.rejected, (state) => {
            console.log('fetchCreateInfoDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdateAvailableDeviceAction.pending, (state) => {
            console.log('fetchUpdateAvailableDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdateAvailableDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdateAvailableDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdateAvailableDeviceAction.rejected, (state) => {
            console.log('fetchUpdateAvailableDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdatePriceDeviceAction.pending, (state) => {
            console.log('fetchUpdatePriceDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdatePriceDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdatePriceDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdatePriceDeviceAction.rejected, (state) => {
            console.log('fetchUpdatePriceDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdateDiscountDeviceAction.pending, (state) => {
            console.log('fetchUpdateDiscountDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdateDiscountDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdateDiscountDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdateDiscountDeviceAction.rejected, (state) => {
            console.log('fetchUpdateDiscountDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchRemoveDiscountDeviceAction.pending, (state) => {
            console.log('fetchRemoveDiscountDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchRemoveDiscountDeviceAction.fulfilled, (state) => {
            console.log('fetchRemoveDiscountDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchRemoveDiscountDeviceAction.rejected, (state) => {
            console.log('fetchRemoveDiscountDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchUpdateCategoryTitleDeviceAction.pending, (state) => {
            console.log('fetchUpdateCategoryTitleDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchUpdateCategoryTitleDeviceAction.fulfilled, (state) => {
            console.log('fetchUpdateCategoryTitleDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchUpdateCategoryTitleDeviceAction.rejected, (state) => {
            console.log('fetchUpdateCategoryTitleDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchDeleteCategoryDeviceAction.pending, (state) => {
            console.log('fetchDeleteCategoryDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchDeleteCategoryDeviceAction.fulfilled, (state) => {
            console.log('fetchDeleteCategoryDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchDeleteCategoryDeviceAction.rejected, (state) => {
            console.log('fetchDeleteCategoryDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
        builder.addCase(fetchDeleteInfoDeviceAction.pending, (state) => {
            console.log('fetchDeleteInfoDeviceAction.pending');
            state.fetchStatus = FetchStatus.PENDING;
        });
        builder.addCase(fetchDeleteInfoDeviceAction.fulfilled, (state) => {
            console.log('fetchDeleteInfoDeviceAction.fulfilled');
            state.fetchStatus = FetchStatus.FULFILLED;
        });
        builder.addCase(fetchDeleteInfoDeviceAction.rejected, (state) => {
            console.log('fetchDeleteInfoDeviceAction.rejected');
            state.fetchStatus = FetchStatus.REJECTED;
        });
    },
});

export const { resetDevice, changePageDevice, sortDevices } = deviceSlice.actions;

export const deviceReducer = deviceSlice.reducer;
