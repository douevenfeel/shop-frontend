import { DeviceCardBasket } from 'components/DeviceCardBasket';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { fetchGetBasketAction } from 'store/actions/basketAction';
import { Container, Page, Paragraph } from 'utils/styles';

export const BasketPage = () => {
    const dispatch = useAppDispatch();
    const { basket, fetchActionStatus } = useAppSelector((store) => store.basket);
    useEffect(() => {
        dispatch(fetchGetBasketAction());
    }, [dispatch, fetchActionStatus]);

    return (
        <Page>
            {basket.map((item) => (
                <DeviceCardBasket {...item} />
            ))}
        </Page>
    );
};
