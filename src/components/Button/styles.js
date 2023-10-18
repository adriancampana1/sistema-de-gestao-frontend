import { styled } from 'styled-components';

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.BLUE_400};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 14px;
    font-weight: 500;

    border: none;
    border-radius: 5px;

    padding: 14px;
`;
