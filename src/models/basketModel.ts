import { DeviceModel } from './deviceModel';

export interface BasketModel {
    id: number;
    count: number;
    selected: boolean;
    device: DeviceModel;
}
