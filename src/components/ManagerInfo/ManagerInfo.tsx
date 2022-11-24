import { ManagerInfoProps } from './ManagerInfo.types';
import React, { useState } from 'react';
import { Container, ManagerInput } from 'utils/styles';

export const ManagerInfo: React.FC<ManagerInfoProps> = ({ info }) => {
    const [title, setTitle] = useState(info.title);
    const [content, setContent] = useState(info.content);
    return (
        <Container gap='12px' margin='0 0 0 12px'>
            <ManagerInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                width='32vw'
                minWidth='124px'
                maxWidth='240px'
                fontSize='14px'
                fontWeight='500'
            />
            <ManagerInput
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxWidth='400px'
                width='42vw'
                fontSize='14px'
            />
        </Container>
    );
};
