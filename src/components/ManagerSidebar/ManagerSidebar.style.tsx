import styled from 'styled-components';

export const Tab = styled.button<{ isCurrent: boolean }>`
    width: 100%;
    height: 40px;
    background: ${(props) => (props.isCurrent ? '#333' : 'transparent')};
    border: none;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
`;
