import { DeviceCardBasket } from 'components/DeviceCardBasket';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchGetBasketAction } from 'store/actions/basketAction';
import { fetchCreateOrderAction } from 'store/actions/orderAction';
import { THEME } from 'utils/constants';
import { Button, Container, Page, Paragraph } from 'utils/styles';

export const BasketPage = () => {
    const dispatch = useAppDispatch();
    const { basket, fetchActionStatus } = useAppSelector((store) => store.basket);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchGetBasketAction());
    }, [dispatch, fetchActionStatus]);
    const handleSubmit = () => {
        dispatch(fetchCreateOrderAction());
        let selected = 0;
        basket.forEach((item) => item.selected && selected++);
        console.log(selected);
        selected && navigate('/');
    };

    return (
        <Page alignItems='center' flexDirection='column' gap='12px'>
            {basket.length === 0 ? (
                <Paragraph fontSize='18px'>no phones in the basket yet</Paragraph>
            ) : (
                <>
                    <Button backgroundColor={THEME.green} onClick={handleSubmit}>
                        Confirm order
                    </Button>
                    <Container flexDirection='column' gap='20px'>
                        {basket.map((item) => (
                            <DeviceCardBasket key={item.id} {...item} />
                        ))}
                    </Container>
                </>
            )}
        </Page>
    );
};
