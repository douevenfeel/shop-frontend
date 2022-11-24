import { useAppSelector } from 'hooks/redux';
import { ManagerCreateDevicePage } from 'pages/ManagerCreateDevicePage';
import { ManagerDevicePage } from 'pages/ManagerDevicePage';
import { ManagerDevicesPage } from 'pages/ManagerDevicesPage';
import { ManagerOrderPage } from 'pages/ManagerOrderPage';
import { ManagerOrdersPage } from 'pages/ManagerOrdersPage';
import { ManagerPage } from 'pages/ManagerPage';
import { ManagerUserPage } from 'pages/ManagerUserPage';
import { ManagerUsersPage } from 'pages/ManagerUsersPage';
import { Route, Routes } from 'react-router-dom';

export const ManagerRoutes = () => {
    const { role } = useAppSelector((store) => store.user.user);
    return role === 'MANAGER' ? (
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
        </Routes>
    ) : (
        <></>
    );
};
