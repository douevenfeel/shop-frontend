import { ManagerPageProps } from './ManagerPage.types';
import { ManagerSidebar } from 'components/ManagerSidebar';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchRefreshAction } from 'store/actions/authAction';
import { resetPage } from 'store/reducers/deviceReducer';
import { Container } from 'utils/styles';

export const ManagerPage: React.FC<ManagerPageProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { authorized } = useAppSelector((store) => store.user);
    const navigate = useNavigate();
    const pathname = useLocation();

    useEffect(() => {
        dispatch(resetPage());
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
        } else {
            !authorized && navigate('/shop');
        }

        return () => {
            dispatch(resetPage());
        };
    }, [authorized, dispatch, navigate, pathname]);

    return (
        <Container margin='60px 0 0'>
            <ManagerSidebar />
            {children}
        </Container>
    );
};
