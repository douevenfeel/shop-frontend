import React from 'react';
import { ArrowStyled, Button, Container } from 'utils/styles';
import { NavigationProps } from './Navigation.types';

export const Navigation: React.FC<NavigationProps> = ({ count, limit, page, handlePage }) => {
    const pageCount = Math.ceil(count / limit);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    return pageCount === 1 || count === 0 ? (
        <></>
    ) : (
        <Container gap='12px' padding='12px 0 0'>
            <Button width='40px' height='40px' padding='0' onClick={() => handlePage(Math.max(page - 1, 1))}>
                <ArrowStyled rotate={-90} />
            </Button>
            {pages.map((number) => (
                <Button key={number} width='40px' height='40px' padding='0' onClick={() => handlePage(number)}>
                    {number}
                </Button>
            ))}
            <Button width='40px' height='40px' padding='0' onClick={() => handlePage(Math.min(page + 1, pageCount))}>
                <ArrowStyled rotate={90} />
            </Button>
        </Container>
    );
};
