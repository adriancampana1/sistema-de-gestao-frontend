import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;

    background-color: rgba(0, 0, 0, 0.75);

    position: fixed;

    z-index: 1000;

    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: auto;
    grid-template-areas: 'modal';

    .modal {
        grid-area: modal;
        overflow-y: auto;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        max-width: 60vw;
        max-height: 90vh;

        padding: 5rem;

        border-radius: 10px;

        position: relative;

        display: flex;
        align-items: start;
        justify-content: center;
    }

    .modal .modal-close {
        width: 2rem;
        height: 2rem;

        cursor: pointer;

        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        border: none;

        position: absolute;
        top: 1.5rem;
        right: 1.5rem;

        display: flex;
    }

    .modal .modal-close::before,
    .modal .modal-close::after {
        content: '';
        position: absolute;

        width: 2rem;
        height: 0.125rem;

        background-color: currentColor;

        border-radius: 0.125rem;

        left: 0;
        top: calc(2rem / 2);
    }

    .modal .modal-close::before {
        transform: rotate(45deg);
    }

    .modal .modal-close::after {
        transform: rotate(-45deg);
    }
`;
