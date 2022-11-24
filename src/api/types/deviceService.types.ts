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

export interface UpdateDeviceProps {
    id: number;
    title: string;
    brandTitle: string;
    price: number;
}

export interface CreateCategoryDeviceProps {
    deviceId: number;
    categoryTitle: string;
}

export interface CreateInfoDeviceProps {
    categoryId?: number;
    title: string;
    content: string;
}

export interface UpdateCategoryTitleDeviceProps {
    id: number;
    categoryTitle: string;
}

export interface DeleteCategoryDeviceProps {
    categoryId?: number;
}

export interface UpdateInfoDeviceProps {
    id?: number;
    title: string;
    content: string;
}

export interface DeleteInfoDeviceProps {
    id?: number;
}
