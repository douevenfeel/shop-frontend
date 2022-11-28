export type OrderPanelProps = {
    handleAll: () => void;
    handleDelivered: () => void;
    handleInDelivery: () => void;
    handleCanceled: () => void;
    current: CurrentType;
};

type CurrentType = 'all' | 'delivered' | 'in delivery' | 'canceled';
