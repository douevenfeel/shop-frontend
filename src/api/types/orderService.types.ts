export interface GetAllOrdersProps {
    canceled?: boolean;
    delivered?: boolean;
}

export interface GetOneOrderProps {
    id: number;
}

export interface CancelOrderProps {
    id: number;
}

export interface HideOrderProps {
    id: number;
}

export interface DeliveryOrderProps {
    id: number;
}
