import { styled } from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    padding: 1.6rem;
    border-radius: 15px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        div {
            display: grid;
            grid-template-columns: 45% 45% 10%;
            justify-content: start;
            align-items: center;
            padding: 1.3rem 1.6rem;
            border: 1px dotted ${({ theme }) => theme.COLORS.BACKGROUND_700};
            border-radius: 15px;

            main {
                display: flex;
                align-items: center;
                gap: 2rem;

                span {
                    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
                }
            }

            .edit {
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .edit:hover {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            }
        }
    }
    @media (max-width: 960px) {
        ul {
            div {
                grid-template-columns: 1fr;
                justify-content: space-between;
                align-items: center;
                grid-template-rows: 30px 30px;
                text-align: center;

                main {
                    justify-content: center;
                }
            }
        }
    }
`;
