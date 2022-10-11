import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchGetOneOrderAction } from 'store/actions/orderAction';
import { resetOrder } from 'store/reducers/orderReducer';
import { Container, Page, Paragraph } from 'utils/styles';

export const OrderPage = () => {
    const { order } = useAppSelector((store) => store.order);
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const id = +pathname.split('/')[2];
        dispatch(fetchGetOneOrderAction(id));

        return () => {
            dispatch(resetOrder());
        };
    }, [dispatch, pathname]);

    useEffect(() => {
        setTimeout(() => !order && navigate('/orders'), 200);
    }, [order, navigate]);

    return (
        <Page>
            <Container>
                <Paragraph>{order?.id}</Paragraph>
            </Container>
        </Page>
    );
};
