import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;

    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: 'menu content';
`;

export const Sidebar = styled.div`
    grid-area: menu;
`;

export const Content = styled.div`
    grid-area: content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    overflow-y: auto;

    section {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 5rem;
        border-radius: 50px;
        box-shadow: -20px -20px 60px #d9d9d9, 20px 20px 60px #aaa;
        gap: 2rem;
    }

    h2 {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .row-2 {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;
    }
`;
