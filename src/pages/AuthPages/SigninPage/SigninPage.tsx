import { Card } from '../AuthPage.style';
import { SigninProps } from 'api/types/authService.types';
import { UserIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchSigninAction } from 'store/actions/authAction';
import { THEME } from 'utils/constants';
import { Button, Form, Input, LinkStyled, Page, Paragraph } from 'utils/styles';

export const SigninPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();
    const { error, authorized } = useAppSelector((store) => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        authorized && navigate('/');
    }, [authorized, dispatch, navigate]);

    const onSubmit = (data: FieldValues) => {
        dispatch(fetchSigninAction(data as SigninProps));
    };
    return (
        <Page justifyContent='center' alignItems='center'>
            {!authorized && (
                <Card>
                    <UserIcon />
                    <Form gap='6px' onSubmit={handleSubmit(onSubmit)}>
                        <Input
                            width='280px'
                            height='36px'
                            placeholder='Enter email...'
                            {...register('email', { required: true })}
                        />
                        <Input
                            width='280px'
                            height='36px'
                            placeholder='Enter password...'
                            {...register('password', { required: true })}
                            type='password'
                        />

                        <Button width='280px' height='36px' type='submit'>
                            Sign in
                        </Button>
                    </Form>
                    <Paragraph fontSize='14px' color={THEME.red} textAlign='center'>
                        {error.message}
                    </Paragraph>
                    <Paragraph fontSize='14px'>
                        Don't have an account yet?{' '}
                        <LinkStyled to='/auth/signup'>
                            <Paragraph
                                as='span'
                                fontSize='14px'
                                color={THEME.blue}
                                outlined
                                fontWeight='500'
                                cursor='pointer'
                            >
                                Sign up
                            </Paragraph>
                        </LinkStyled>
                    </Paragraph>
                </Card>
            )}
        </Page>
    );
};
