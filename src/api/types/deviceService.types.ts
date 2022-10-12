export interface GetAllDevicesProps {
    limit?: number;
    page?: number;
    orderBy?: string;
    orderType?: string;
    brandTitle?: string;
}

export interface GetOneDeviceProps {
    id: number;
}

export interface CreateDeviceProps {
    brandTitle: string;
    title: string;
    price: string;
    image: File;
}

export interface CreateCategoryDeviceProps {
    deviceId: number;
    categoryTitle: string;
}

export interface CreateInfoDeviceProps {
    categoryId:number;
    title: string;
    content: string;
}

export interface UpdateAvailableDeviceProps {
    id: number;
    available: boolean;
}

export interface UpdatePriceDeviceProps {
    id: number;
    price: number;
}

export interface DiscountDeviceProps {
    id: number;
    price: number;
}

export interface RemoveDiscountDeviceProps {
    id: number;
}

export interface UpdateCategoryTitleDeviceProps {
    id: number;
    categoryTitle: string;
}


export interface DeleteCategoryDeviceProps {
    categoryId: number;
}

export interface DeleteInfoDeviceProps {
    id: number;
}
