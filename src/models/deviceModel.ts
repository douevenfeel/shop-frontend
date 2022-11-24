export interface DeviceModel {
    id: number;
    title: string;
    price: number;
    image: string;
    brand: BrandModel;
}

export interface BrandModel {
    id: number;
    title: string;
}

export interface DeviceDetailModel extends DeviceModel {
    categories: CategoryModel[];
}

export interface CategoryModel {
    id?: number;
    title: string;
    infos?: InfoModel[];
}

export interface InfoModel {
    id?: number;
    title: string;
    content: string;
}
