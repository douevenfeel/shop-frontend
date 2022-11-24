import { ManagerCategoryProps } from './ManagerCategory.types';
import { ManagerInfo } from 'components/ManagerInfo';
import { useAppDispatch } from 'hooks/redux';
import React, { useState } from 'react';
import {
    fetchCreateCategoryDeviceAction,
    fetchDeleteCategoryDeviceAction,
    fetchUpdateCategoryTitleDeviceAction,
} from 'store/actions/deviceAction';
import { Container, FiDeleteStyled, FiSaveStyled, ManagerInput, ManagerInputContainerStyled } from 'utils/styles';

export const ManagerCategory: React.FC<ManagerCategoryProps> = ({ category, deviceId }) => {
    const [categoryTitle, setCategoryTitle] = useState(category.title);
    const dispatch = useAppDispatch();

    const handleSave = () => {
        if (typeof category.id === 'number') {
            const values = { id: category.id, categoryTitle };
            dispatch(fetchUpdateCategoryTitleDeviceAction(values));
        } else if (categoryTitle) {
            const values = { categoryTitle, deviceId };
            dispatch(fetchCreateCategoryDeviceAction(values));
            setCategoryTitle('');
        }
    };

    const handleDelete = () => {
        const values = { categoryId: category.id };
        dispatch(fetchDeleteCategoryDeviceAction(values));
    };

    return (
        <Container flexDirection='column' margin='8px' gap='4px' width='100%'>
            <Container flexDirection='row'>
                <ManagerInputContainerStyled>
                    <ManagerInput
                        value={categoryTitle}
                        onChange={(e) => setCategoryTitle(e.target.value)}
                        fontWeight='600'
                        width='420px'
                        placeholder='Input category title...'
                    />
                    <FiSaveStyled onClick={handleSave} />
                    <FiDeleteStyled onClick={handleDelete} />
                </ManagerInputContainerStyled>
            </Container>
            <Container flexDirection='column'>
                {category?.infos &&
                    category.infos.map((info) => <ManagerInfo info={info} categoryId={category.id} key={info.id} />)}
                {category.id && <ManagerInfo info={{ title: '', content: '' }} categoryId={category.id} />}
            </Container>
        </Container>
    );
};
