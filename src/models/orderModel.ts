import { DeviceModel } from './deviceModel';

export interface OrderModel {
    id: number;
    orderDate: string;
    deliveryDate: string;
    delivered: boolean;
    canceled: boolean;
    hidden: boolean;
}

export interface OrderDeviceModel {
    id: number;
    price: string;
    count: number;
    device: DeviceModel;
}

export interface OrderDetailModel extends OrderModel {
    orderDevices: OrderDetailModel[];
}
