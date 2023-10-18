import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    position: relative;

    grid-template-columns: auto auto;
    grid-template-rows: 100px auto;
    grid-template-areas:
        'menu header'
        'menu content';
`;

export const Sidebar = styled.div`
    grid-area: menu;
`;

export const Header = styled.header`
    grid-area: header;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;

    margin: 3rem;

    .search {
        display: grid;
        grid-template-columns: 65% 15%;
        gap: 20px;
    }

    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        color: ${({ theme }) => theme.COLORS.BLUE_400};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

        border-radius: 5px;

        font-weight: bold;

        cursor: pointer;
    }

    .filter:hover {
        filter: brightness(0.8);
    }

    .btn {
        display: flex;
        justify-content: end;
    }
`;

export const TotalBudget = styled.div`
    grid-area: total;

    display: flex;
    align-items: center;

    margin: 3rem;

    color: ${({ theme }) => theme.COLORS.BLUE_400};

    font-size: 1.5rem;

    .total_value {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        font-size: 2rem;
        font-weight: normal;
    }

    .total_businesses {
        color: ${({ theme }) => theme.COLORS.WHITE};
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        padding: 0.5rem;
        font-size: 1.4rem;
        font-weight: normal;

        margin-left: 10px;

        border-radius: 5px;
    }
`;

export const Content = styled.div`
    grid-area: content;

    overflow-x: auto;
    overflow-y: auto;

    margin: 0 3rem 3rem;
`;
