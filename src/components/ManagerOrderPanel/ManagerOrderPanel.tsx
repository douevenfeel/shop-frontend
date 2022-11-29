import { OrderPanel } from 'components/OrderPanel';
import { useAppDispatch } from 'hooks/redux';
import { useDebounce } from 'hooks/useDebounce';
import React, { useEffect, useState } from 'react';
import { setDate, setParams } from 'store/reducers/orderReducer';
import { Container, Input, Paragraph } from 'utils/styles';

type CurrentType = 'all' | 'delivered' | 'in delivery' | 'canceled';

export const ManagerOrderPanel = () => {
    const dispatch = useAppDispatch();
    const [current, setCurrent] = useState<CurrentType>('all');
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const debouncedDateFrom = useDebounce(dateFrom);
    const debouncedDateTo = useDebounce(dateTo);

    useEffect(() => {
        const values = { dateFrom: debouncedDateFrom, dateTo: debouncedDateTo };
        dispatch(setDate(values));
    }, [debouncedDateFrom, debouncedDateTo, dispatch]);

    const handleAll = () => {
        dispatch(setParams({}));
        setCurrent('all');
    };

    const handleDelivered = () => {
        dispatch(setParams({ delivered: true }));
        setCurrent('delivered');
    };

    const handleInDelivery = () => {
        dispatch(setParams({ delivered: false, canceled: false }));
        setCurrent('in delivery');
    };

    const handleCanceled = () => {
        dispatch(setParams({ canceled: true }));
        setCurrent('canceled');
    };

    return (
        <Container flexDirection='column' alignItems='center' gap='12px'>
            <OrderPanel
                handleAll={handleAll}
                handleCanceled={handleCanceled}
                handleDelivered={handleDelivered}
                handleInDelivery={handleInDelivery}
                current={current}
            />
            <Container gap='8px'>
                <Container gap='8px' alignItems='flex-start' flexDirection='column'>
                    <Paragraph>order date from:</Paragraph>
                    <Input
                        type='date'
                        placeholder='Input date from...'
                        value={dateFrom}
                        onChange={(e) => setDateFrom(e.target.value)}
                    />
                </Container>
                <Container gap='8px' alignItems='flex-start' flexDirection='column'>
                    <Paragraph>order date to:</Paragraph>
                    <Input
                        type='date'
                        placeholder='Input date to...'
                        value={dateTo}
                        onChange={(e) => setDateTo(e.target.value)}
                    />
                </Container>
            </Container>
        </Container>
    );
};
