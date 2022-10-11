export interface GetAllDevicesProps {
    limit?: number;
    page?: number;
    orderBy?: string;
    orderType?: string;
    brandTitle?: string;
}

export interface SignupProps {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface SigninProps {
    email: string;
    password: string;
}

export interface ChangeCount {
    count: number;
    deviceId: number;
}

export interface ChangeSelected {
    selected: boolean;
    deviceId: number;
}

export interface GetAllOrdersProps {
    canceled?: boolean;
    delivered?: boolean;
}
