import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const Option = styled.p`
    width: 140px;
    height: 28px;
    border: 1px solid ${THEME.lighterGray};
    border-radius: 8px;
    padding: 4px 8px;
    font-size: 14px;
    user-select: none;
    cursor: pointer;
    z-index: 10;
    background: ${THEME.darkerGray};
`;
