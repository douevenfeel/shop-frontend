import { DeviceModel } from 'models/deviceModel';

export type DeviceCardProps = {
    device: DeviceModel;
    handleBrand: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};
