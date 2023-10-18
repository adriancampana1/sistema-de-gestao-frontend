import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;

    grid-template-columns: auto 1fr;
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

export const Content = styled.div`
    grid-area: content;

    overflow-y: auto;

    margin: 3rem;
`;

export const Filters = styled.div`
    display: flex;
    align-items: center;
    gap: 5rem;

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    button {
        background-color: transparent;
        border: none;

        svg {
            font-size: 2.6rem;
        }
    }
`;
