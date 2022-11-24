export interface GetAllOrdersManagerProps {
    page: number;
    canceled?: boolean;
    delivered?: boolean;
    userId?: number;
    dateFrom?: string;
    dateTo?: string;
}

export interface GetAllOrdersProps {
    page: number;
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
