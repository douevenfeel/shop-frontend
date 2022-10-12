import React from 'react';
import { Container, Paragraph } from 'utils/styles';

import { InfoProps } from './Info.types';

export const Info: React.FC<InfoProps> = ({ info }) => {
    return (
        <Container gap='12px' margin='0 0 0 12px'>
            <Paragraph width='32vw' minWidth='124px' maxWidth='240px' fontSize='14px' fontWeight='500'>
                {info.title}:
            </Paragraph>
            <Paragraph maxWidth='400px' width='42vw' fontSize='14px'>
                {info.content}
            </Paragraph>
        </Container>
    );
};
