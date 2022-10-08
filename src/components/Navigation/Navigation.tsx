import { useAppDispatch, useAppSelector } from 'hooks/redux';
import React from 'react';
import { changePage } from 'store/reducers/deviceReducer';
import { ArrowStyled, Button, Container } from 'utils/styles';

export const Navigation = () => {
    const dispatch = useAppDispatch();
    const { count, limit, page } = useAppSelector((store) => store.device);
    const handlePage = (page: number) => {
        dispatch(changePage(page));
    };
    const pageCount = Math.ceil(count / limit);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return pageCount === 1 ? (
        <></>
    ) : (
        <Container gap='12px' padding='12px 0 0'>
            <Button width='40px' height='40px' padding='0' onClick={() => handlePage(page - 1)}>
                <ArrowStyled rotate={-90} />
            </Button>
            {pages.map((number) => (
                <Button key={number} width='40px' height='40px' padding='0' onClick={() => handlePage(number)}>
                    {number}
                </Button>
            ))}
            <Button width='40px' height='40px' padding='0' onClick={() => handlePage(page + 1)}>
                <ArrowStyled rotate={90} />
            </Button>
        </Container>
    );
};
