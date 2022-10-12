import styled from 'styled-components';
import { THEME } from 'utils/constants';

export const DeviceCardBasketContainer = styled.div`
    display: flex;
    justify-content: center;
    max-width: 460px;
    width: 76vw;
    min-width: 280px;
    padding: 20px;
    background: ${THEME.darkerGray};
    gap: 16px;
    border-radius: 8px;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Checkbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: 2px solid ${THEME.blue};
`;

export const CheckboxSelected = styled.div<{ selected: boolean }>`
    display: ${(props) => (props.selected ? 'block' : 'none')};
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${(props) => (props.selected ? THEME.blue : 'transparent')};
`;
