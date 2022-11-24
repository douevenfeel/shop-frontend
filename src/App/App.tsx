import { Header } from 'components/Header';
import { ProtectedRoute } from 'components/ProtectedRoute';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { SigninPage } from 'pages/AuthPages/SigninPage';
import { SignupPage } from 'pages/AuthPages/SignupPage';
import { BasketPage } from 'pages/BasketPage';
import { DevicePage } from 'pages/DevicePage';
import { ManagerCreateDevicePage } from 'pages/ManagerCreateDevicePage';
import { ManagerDevicePage } from 'pages/ManagerDevicePage';
import { ManagerDevicesPage } from 'pages/ManagerDevicesPage';
import { ManagerOrderPage } from 'pages/ManagerOrderPage';
import { ManagerOrdersPage } from 'pages/ManagerOrdersPage';
import { ManagerPage } from 'pages/ManagerPage';
import { ManagerUserPage } from 'pages/ManagerUserPage';
import { ManagerUsersPage } from 'pages/ManagerUsersPage';
import { OrderPage } from 'pages/OrderPage';
import { OrdersPage } from 'pages/OrdersPage';
import { ShopPage } from 'pages/ShopPage';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';

export const App = () => {
    const { authorized } = useAppSelector((store) => store.user);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        }
    }, [authorized, dispatch, navigate]);

    return (
        <>
            <Header />
            <Routes>
                <Route path='/auth/signup' element={<SignupPage />} />
                <Route path='/auth/signin' element={<SigninPage />} />
                <Route path='/' element={<ShopPage />} />
                <Route path='/device/:id' element={<DevicePage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path='/basket' element={<BasketPage />} />
                    <Route path='/orders' element={<OrdersPage />} />
                    <Route path='/order/:id' element={<OrderPage />} />
                </Route>
                <Route element={<ProtectedRoute role='MANAGER' />}>
                    <Route path='/manager' element={<ManagerPage />} />
                    <Route
                        path='/manager/devices'
                        element={
                            <ManagerPage>
                                <ManagerDevicesPage />
                            </ManagerPage>
                        }
                    />
                    <Route
                        path='/manager/device/:id'
                        element={
                            <ManagerPage>
                                <ManagerDevicePage />
                            </ManagerPage>
                        }
                    />
                    <Route
                        path='/manager/create-device'
                        element={
                            <ManagerPage>
                                <ManagerCreateDevicePage />
                            </ManagerPage>
                        }
                    />
                    <Route
                        path='/manager/users'
                        element={
                            <ManagerPage>
                                <ManagerUsersPage />
                            </ManagerPage>
                        }
                    />
                    <Route
                        path='/manager/user/:id'
                        element={
                            <ManagerPage>
                                <ManagerUserPage />
                            </ManagerPage>
                        }
                    />
                    <Route
                        path='/manager/orders'
                        element={
                            <ManagerPage>
                                <ManagerOrdersPage />
                            </ManagerPage>
                        }
                    />
                    <Route
                        path='/manager/order/:id'
                        element={
                            <ManagerPage>
                                <ManagerOrderPage />
                            </ManagerPage>
                        }
                    />
                </Route>
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
};
