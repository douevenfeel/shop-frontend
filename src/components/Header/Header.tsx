import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchLogoutAction } from 'store/actions/authAction';
import { THEME } from 'utils/constants';
import { Container, LinkStyled, Paragraph } from 'utils/styles';

export const Header = () => {
    const [loading, setLoading] = useState(true);
    const { authorized, user } = useAppSelector((store) => store.user);
    const { pathname } = useLocation();
    const dispatch = useAppDispatch();
    const isAuth = pathname === '/auth/signup' || pathname === '/auth/signin';
    useEffect(() => {
        setTimeout(() => setLoading(false), 50);
    }, []);

    const handleLogout = () => dispatch(fetchLogoutAction());
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
                {!isAuth && !authorized && !loading ? (
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
                ) : (
                    authorized &&
                    !loading && (
                        <>
                            {user.role === 'ADMIN' && (
                                <LinkStyled to='/admin'>
                                    <Paragraph color={THEME.blue} fontWeight='500' cursor='pointer'>
                                        Admin
                                    </Paragraph>
                                </LinkStyled>
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
                    )
                )}
            </Container>
        </Container>
    );
};
