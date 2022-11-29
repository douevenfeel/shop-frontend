import { DeviceModel } from './deviceModel';
import { UserModel } from './userModel';

export interface OrderModel {
    id: number;
    orderDate: string;
    deliveryDate: string;
    delivered: boolean;
    canceled: boolean;
    hidden: boolean;
    user: UserModel;
}

export interface OrderDeviceModel {
    id: number;
    price: number;
    count: number;
    device: DeviceModel;
}

export interface OrderDetailModel extends OrderModel {
    orderDevices: OrderDeviceModel[];
}
