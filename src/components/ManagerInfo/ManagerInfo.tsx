import { ManagerInfoProps } from './ManagerInfo.types';
import { useAppDispatch } from 'hooks/redux';
import React, { useState } from 'react';
import {
    fetchCreateInfoDeviceAction,
    fetchDeleteInfoDeviceAction,
    fetchUpdateInfoDeviceAction,
} from 'store/actions/deviceAction';
import { Container, FiDeleteStyled, FiSaveStyled, ManagerInput } from 'utils/styles';

export const ManagerInfo: React.FC<ManagerInfoProps> = ({ info, categoryId }) => {
    const [title, setTitle] = useState(info.title);
    const [content, setContent] = useState(info.content);

    const dispatch = useAppDispatch();

    const handleSave = () => {
        if (typeof info.id === 'number') {
            const values = { id: info.id, title, content };
            dispatch(fetchUpdateInfoDeviceAction(values));
        } else if (title && content) {
            const values = { categoryId, title, content };
            dispatch(fetchCreateInfoDeviceAction(values));
        }
    };

    const handleDelete = () => {
        const values = { id: info.id };
        dispatch(fetchDeleteInfoDeviceAction(values));
    };

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
                placeholder='Input info title...'
            />
            <ManagerInput
                value={content}
                onChange={(e) => setContent(e.target.value)}
                maxWidth='400px'
                width='42vw'
                fontSize='14px'
                placeholder='Input info content...'
            />
            <FiSaveStyled onClick={handleSave} />
            {info.id && <FiDeleteStyled onClick={handleDelete} />}
        </Container>
    );
};
