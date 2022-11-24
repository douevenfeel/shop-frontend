import { ManagerPageProps } from './ManagerPage.types';
import { ManagerSidebar } from 'components/ManagerSidebar';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetPage } from 'store/reducers/deviceReducer';
import { Container } from 'utils/styles';

export const ManagerPage: React.FC<ManagerPageProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { authorized } = useAppSelector((store) => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(resetPage());

        return () => {
            dispatch(resetPage());
        };
    }, [authorized, dispatch, navigate]);

    return (
        <Container margin='60px 0 0'>
            <ManagerSidebar />
            {children}
        </Container>
    );
};
