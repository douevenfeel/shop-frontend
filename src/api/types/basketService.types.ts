export interface AddDeviceBasketProps {
    deviceId: number;
}

export interface ChangeCountBasketProps {
    deviceId: number;
    count: number;
}

export interface ChangeSelectedBasketProps {
    deviceId: number;
    selected: boolean;
}

export interface DeleteDeviceBasketProps {
    deviceId: number;
}
