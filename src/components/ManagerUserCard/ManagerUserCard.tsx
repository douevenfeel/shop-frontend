import { UserCardContainerStyled } from './ManagerUserCard.style';
import { ManagerUserCardProps } from './ManagerUserCard.types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Container, Paragraph } from 'utils/styles';

export const ManagerUserCard: React.FC<ManagerUserCardProps> = ({ user }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/manager/user/${user.id}`);
    };

    return (
        <UserCardContainerStyled>
            <Paragraph>
                <strong>ID: </strong>
                {user.id}
            </Paragraph>
            <Paragraph>
                <strong>Email: </strong>
                {user.email}
            </Paragraph>
            <Paragraph>
                <strong>First Name: </strong>
                {user.firstName}
            </Paragraph>
            <Paragraph>
                <strong>Last Name: </strong>
                {user.lastName}
            </Paragraph>
            <Paragraph>
                <strong>User's role: </strong>
                {user.role}
            </Paragraph>
            <Container justifyContent='flex-end'>
                <Button fontSize='16px' onClick={handleNavigate}>
                    View all orders
                </Button>
            </Container>
        </UserCardContainerStyled>
    );
};
