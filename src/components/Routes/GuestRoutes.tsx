import { SigninPage } from 'pages/AuthPages/SigninPage';
import { SignupPage } from 'pages/AuthPages/SignupPage';
import { DevicePage } from 'pages/DevicePage';
import { ShopPage } from 'pages/ShopPage';
import { Route, Navigate, Routes } from 'react-router-dom';

export const GuestRoutes = () => {
    return (
        <Routes>
            <Route path='/auth/signup' element={<SignupPage />} />
            <Route path='/auth/signin' element={<SigninPage />} />

            <Route path='/' element={<ShopPage />} />
            <Route path='/device/:id' element={<DevicePage />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};
