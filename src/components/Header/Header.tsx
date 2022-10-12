import { Role } from 'api/types/userService.types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchLogoutAction } from 'store/actions/authAction';
import { handleUserRole, refreshUserRole } from 'store/reducers/userReducer';
import { THEME } from 'utils/constants';
import { FetchStatus } from 'utils/fetchStatus.types';
import { Container, LinkStyled, Paragraph } from 'utils/styles';

export const Header = () => {
    const { authorized, user, role, fetchStatus } = useAppSelector((store) => store.user);
    const [nextRole, setNextRole] = useState<Role>('ADMIN');
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const isAuth = pathname === '/auth/signup' || pathname === '/auth/signin';
    useEffect(() => {
        dispatch(refreshUserRole());
    }, [dispatch, user]);

    const handleLogout = () => {
        dispatch(fetchLogoutAction());
    };
    const handleRole = () => {
        dispatch(handleUserRole(nextRole));
        nextRole === 'ADMIN' ? setNextRole('USER') : setNextRole('ADMIN');
    };
    return (
        <Container
            width='100vw'
            maxWidth='100%'
            height='60px'
            background={THEME.gray}
            position='absolute'
            alignItems='center'
            justifyContent='space-between'
            padding='0px 20px'
            margin='0px 0px 20px'
        >
            <LinkStyled to='/'>
                <Paragraph fontWeight='500' fontSize='20px' cursor='pointer'>
                    Phone.
                </Paragraph>
            </LinkStyled>
            <Container gap='12px'>
                {!isAuth &&
                    ((!authorized && (
                        <>
                            <LinkStyled to='/auth/signin'>
                                <Paragraph color={THEME.blue} fontWeight='500' cursor='pointer'>
                                    Sign in
                                </Paragraph>
                            </LinkStyled>
                            <LinkStyled to='/auth/signup'>
                                <Paragraph color={THEME.blue} fontWeight='500' cursor='pointer'>
                                    Sign up
                                </Paragraph>
                            </LinkStyled>
                        </>
                    )) ||
                        (authorized && (
                            <>
                                {user.role === 'ADMIN' && (
                                    <Paragraph color={THEME.red} fontWeight='500' cursor='pointer' onClick={handleRole}>
                                        {role === 'ADMIN' ? 'USER' : 'ADMIN'}
                                    </Paragraph>
                                )}
                                <LinkStyled to='/basket'>
                                    <Paragraph color={THEME.blue} fontWeight='500' cursor='pointer'>
                                        Basket
                                    </Paragraph>
                                </LinkStyled>
                                <LinkStyled to='/orders'>
                                    <Paragraph color={THEME.blue} fontWeight='500' cursor='pointer'>
                                        Orders
                                    </Paragraph>
                                </LinkStyled>
                                <Paragraph color={THEME.blue} fontWeight='500' onClick={handleLogout} cursor='pointer'>
                                    Logout
                                </Paragraph>
                            </>
                        )))}
            </Container>
        </Container>
    );
};
