import { Header } from 'components/Header';
import { SigninPage } from 'pages/AuthPages/SigninPage';
import { SignupPage } from 'pages/AuthPages/SignupPage';
import { BasketPage } from 'pages/BasketPage';
import { DevicePage } from 'pages/DevicePage';
import { OrderPage } from 'pages/OrderPage';
import { OrdersPage } from 'pages/OrdersPage';
import { ShopPage } from 'pages/ShopPage';
import { Route, Routes, Navigate } from 'react-router-dom';

export const App = () => {
    return (
        <>
            <Header />
            <Routes>
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
