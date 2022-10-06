import { Info } from 'components/Info';
import React from 'react';
import { Container, Paragraph } from 'utils/styles';

import { CategoryProps } from './Category.types';

export const Category: React.FC<CategoryProps> = ({ category }) => {
    return (
        <Container flexDirection='column' margin='8px' gap='4px'>
            <Paragraph fontWeight='600'>{category.title}</Paragraph>
            <Container flexDirection='column'>
                {category.infos && category.infos.map((info) => <Info info={info} />)}
            </Container>
        </Container>
    );
};
