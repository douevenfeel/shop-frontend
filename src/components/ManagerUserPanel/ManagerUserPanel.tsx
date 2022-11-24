import { useAppDispatch } from 'hooks/redux';
import { useDebounce } from 'hooks/useDebounce';
import React, { useCallback, useEffect, useState } from 'react';
import { findUser } from 'store/reducers/userReducer';
import { THEME } from 'utils/constants';
import { Container, Input, Paragraph } from 'utils/styles';

export const ManagerUserPanel = () => {
    const dispatch = useAppDispatch();
    const [searchBy, setSearchBy] = useState('email');
    const [searchValue, setSearchValue] = useState('');
    const debouncedValue = useDebounce(searchValue);

    useEffect(() => {
        const values = { searchBy, searchValue: debouncedValue };
        dispatch(findUser(values));
    }, [debouncedValue, dispatch, searchBy]);

    const handleSearchBy = useCallback((value: string) => {
        setSearchBy(value);
    }, []);

    const handleValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    return (
        <Container width='80vw' margin='0 0 20px' alignItems='flex-start' justifyContent='flex-start' gap='20px'>
            <Container gap='4px' flexDirection='column'>
                <Paragraph>Search by: </Paragraph>
                <Paragraph
                    color={searchBy === 'email' ? THEME.red : THEME.white}
                    onClick={() => handleSearchBy('email')}
                    cursor='pointer'
                >
                    email
                </Paragraph>
                <Paragraph
                    color={searchBy === 'firstName' ? THEME.red : THEME.white}
                    onClick={() => handleSearchBy('firstName')}
                    cursor='pointer'
                >
                    first name
                </Paragraph>
                <Paragraph
                    color={searchBy === 'lastName' ? THEME.red : THEME.white}
                    onClick={() => handleSearchBy('lastName')}
                    cursor='pointer'
                >
                    last name
                </Paragraph>
                <Paragraph
                    color={searchBy === 'role' ? THEME.red : THEME.white}
                    onClick={() => handleSearchBy('role')}
                    cursor='pointer'
                >
                    role
                </Paragraph>
            </Container>
            <Input
                placeholder={`Input user's ${searchBy}...`}
                value={searchValue}
                onChange={handleValue}
                width='240px'
            />
        </Container>
    );
};
