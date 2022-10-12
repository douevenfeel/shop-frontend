import React, { useState } from 'react';
import { ArrowStyled, Container, Paragraph } from 'utils/styles';
import { Option } from './Dropdown.style';

import { DropdownProps } from './Dropdown.types';

export const Dropdown: React.FC<DropdownProps> = ({ value, valuesArr, handleDropdownValue }) => {
    const [isOpened, setIsOpened] = useState(false);
    const handleValue = (value: any) => {
        handleDropdownValue(value);
        setIsOpened(false);
    };
    return (
        <Container gap='8px'>
            <Paragraph>sort by </Paragraph>
            <Container position='relative' flexDirection='column' gap='2px'>
                <Container>
                    <Option onClick={() => setIsOpened((prev) => !prev)}>{value.title}</Option>
                    <ArrowStyled rotate={180} top='8px' left='-20px' />
                </Container>
                <Container position='absolute' top='28px'>
                    {isOpened &&
                        valuesArr.map((value) => (
                            <Option onClick={() => handleValue(value)} key={value.title}>
                                {value.title}
                            </Option>
                        ))}
                </Container>
            </Container>
        </Container>
    );
};
