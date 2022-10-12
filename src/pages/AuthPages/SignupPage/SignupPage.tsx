import { SignupProps } from 'api/types/authService.types';
import { UserIcon } from 'assets';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React, { useEffect } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { fetchRefreshAction, fetchSignupAction } from 'store/actions/authAction';
import { THEME } from 'utils/constants';
import { Button, Form, Input, LinkStyled, Page, Paragraph } from 'utils/styles';
import { Card } from '../AuthPage.style';

export const SignupPage = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useAppDispatch();
    const { error, authorized } = useAppSelector((store) => store.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            !authorized && dispatch(fetchRefreshAction());
            authorized && navigate('/shop');
        }
    }, [authorized, dispatch, navigate]);

    const onSubmit = (data: FieldValues) => {
        dispatch(fetchSignupAction(data as SignupProps));
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
                        <Input
                            width='280px'
                            height='36px'
                            placeholder='Enter first name...'
                            {...register('firstName', { required: true })}
                        />
                        <Input
                            width='280px'
                            height='36px'
                            placeholder='Enter last name...'
                            {...register('lastName', { required: true })}
                        />
                        <Button width='280px' height='36px' type='submit'>
                            Sign up
                        </Button>
                    </Form>
                    <Paragraph fontSize='14px' color={THEME.red} textAlign='center'>
                        {error.message}
                    </Paragraph>
                    <Paragraph fontSize='14px'>
                        Already have an account?{' '}
                        <LinkStyled to='/auth/signin'>
                            <Paragraph
                                as='span'
                                fontSize='14px'
                                color={THEME.blue}
                                outlined
                                fontWeight='500'
                                cursor='pointer'
                            >
                                Sign in
                            </Paragraph>
                        </LinkStyled>
                    </Paragraph>
                </Card>
            )}
        </Page>
    );
};
