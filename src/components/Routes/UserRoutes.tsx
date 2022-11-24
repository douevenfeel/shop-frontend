import { useAppSelector } from 'hooks/redux';
import { BasketPage } from 'pages/BasketPage';
import { OrderPage } from 'pages/OrderPage';
import { OrdersPage } from 'pages/OrdersPage';
import { Route, Routes } from 'react-router-dom';

export const UserRoutes = () => {
    const { authorized } = useAppSelector((store) => store.user);
    return authorized ? (
        <Routes>
            <Route path='/basket' element={<BasketPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/order/:id' element={<OrderPage />} />
        </Routes>
    ) : (
        <></>
    );
};
