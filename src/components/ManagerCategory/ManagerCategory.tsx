import { ManagerCategoryProps } from './ManagerCategory.types';
import { ManagerInfo } from 'components/ManagerInfo';
import React, { useState } from 'react';
import { Container, ManagerInput } from 'utils/styles';

export const ManagerCategory: React.FC<ManagerCategoryProps> = ({ category }) => {
    const [title, setTitle] = useState(category.title);
    return (
        <Container flexDirection='column' margin='8px' gap='4px'>
            {category.infos.length !== 0 && (
                <ManagerInput value={title} onChange={(e) => setTitle(e.target.value)} fontWeight='600' width='100%' />
            )}
            <Container flexDirection='column'>
                {category.infos && category.infos.map((info) => <ManagerInfo info={info} key={info.id} />)}
            </Container>
        </Container>
    );
};
