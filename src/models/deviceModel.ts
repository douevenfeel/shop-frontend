export interface DeviceModel {
    id: number;
    title: string;
    price: number;
    oldPrice: number;
    image: string;
    available: boolean;
    brand: BrandModel;
}

export interface DeviceDetailModel extends DeviceModel {
    categories: CategoryModel[];
}

export interface BrandModel {
    id: number;
    title: string;
}

export interface CategoryModel {
    id: number;
    title: string;
    infos: InfoModel[];
}

export interface InfoModel {
    id: number;
    title: string;
    content: string;
}
