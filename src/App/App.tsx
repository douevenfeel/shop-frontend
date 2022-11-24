import { Header } from 'components/Header';
import { SigninPage } from 'pages/AuthPages/SigninPage';
import { SignupPage } from 'pages/AuthPages/SignupPage';
import { BasketPage } from 'pages/BasketPage';
import { DevicePage } from 'pages/DevicePage';
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
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
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

                <Route path='/basket' element={<BasketPage />} />
                <Route path='/orders' element={<OrdersPage />} />
                <Route path='/order/:id' element={<OrderPage />} />

                <Route path='/auth/signup' element={<SignupPage />} />
                <Route path='/auth/signin' element={<SigninPage />} />

                <Route path='/' element={<ShopPage />} />
                <Route path='/device/:id' element={<DevicePage />} />
                <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
        </>
    );
};
