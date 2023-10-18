import { styled } from 'styled-components';

export const Container = styled.div`
    position: relative;

    .dropdown {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        font-weight: bold;
        padding: 1.6rem;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
        border-radius: 15px;
        cursor: pointer;
    }

    .dropdown.active {
        border-radius: 15px 15px 0 0;
    }

    .dropdown-content {
        display: none;
    }

    .dropdown-content.active {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        border-radius: 0 0 15px 15px;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }

    .dropdown-item {
        padding: 1.6rem;
        cursor: pointer;
    }

    .dropdown-item:hover {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    }
`;
