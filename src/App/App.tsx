import { Header } from 'components/Header';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { AdminPage } from 'pages/AdminPage';
import { SigninPage } from 'pages/AuthPages/SigninPage';
import { SignupPage } from 'pages/AuthPages/SignupPage';
import { BasketPage } from 'pages/BasketPage';
import { DevicePage } from 'pages/DevicePage';
import { OrderPage } from 'pages/OrderPage';
import { OrdersPage } from 'pages/OrdersPage';
import { ShopPage } from 'pages/ShopPage';
import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';

export const App = () => {
    const { authorized, user } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(fetchRefreshAction());
        }
    }, [dispatch]);
    console.log(user.role);

    return (
        <>
            <Header />
            <Routes>
                {authorized ? (
                    <>
                        {user.role === 'ADMIN' && (
                            <>
                                <Route path='/admin' element={<AdminPage />} />
                            </>
                        )}
                        <Route path='/basket' element={<BasketPage />} />
                        <Route path='/orders' element={<OrdersPage />} />
                        <Route path='/order/:id' element={<OrderPage />} />
                    </>
                ) : (
                    <>
                        <Route path='/auth/signup' element={<SignupPage />} />
                        <Route path='/auth/signin' element={<SigninPage />} />
                    </>
                )}
                <Route path='/' element={<ShopPage />} />
                <Route path='/device/:id' element={<DevicePage />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
};
