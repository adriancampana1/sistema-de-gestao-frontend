import { styled } from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_750};
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    > input {
        height: 50px;
        width: 100%;

        padding: 16px;

        color: ${({ theme }) => theme.COLORS.WHITE};

        background: transparent;

        border: 0;

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;
