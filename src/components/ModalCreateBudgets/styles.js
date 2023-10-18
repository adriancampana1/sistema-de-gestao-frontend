import { styled } from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    svg {
        width: 6rem;
        height: 6rem;
    }

    h2 {
        font-size: 2rem;
    }

    p {
        text-align: center;
    }
`;

export const Container = styled.div`
    width: 100vw;

    form {
        margin-top: 4rem;

        display: flex;
        flex-direction: column;
        gap: 20px;

        .row {
            width: 100%;
            display: flex;
            gap: 10px;
        }

        .col {
            display: flex;
            flex-direction: column;
            gap: 8px;

            label {
                font-weight: bold;
                font-size: 1.4rem;
                margin-left: 3px;
            }

            input {
                background-color: ${({ theme }) => theme.COLORS.WHITE};

                border: none;
                border-radius: 5px;

                padding: 8px 10px;
            }

            textarea {
                background-color: ${({ theme }) => theme.COLORS.WHITE};

                border: none;
                border-radius: 5px;

                padding: 15px 10px;

                width: 100%;
            }

            select {
                background-color: ${({ theme }) => theme.COLORS.WHITE};

                border: none;
                border-radius: 5px;

                padding: 8px 10px;
            }
        }

        .title-value {
            display: grid;
            grid-template-columns: 3fr 1fr;
        }

        .add-product {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 6px;

            label {
                font-size: 1.2rem;
            }
        }

        .btn-controls {
            display: flex;
            gap: 2rem;
        }

        .remove-product,
        .add-product {
            font-weight: bold;

            margin: 10px 0 0 5px;

            font-size: 1.4rem;

            cursor: pointer;

            display: flex;
            align-items: center;
            gap: 5px;
        }

        .remove-product {
            color: red;
        }

        .add-product {
            color: green;
        }

        .add-notes {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .show-add-products,
        .show-add-notes {
            font-weight: bold;

            font-size: 1.5rem;

            cursor: pointer;

            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .show-add-products:hover,
        .show-add-notes:hover {
            text-decoration: underline;
        }

        .created-notes {
            margin-top: 1rem;
        }

        .note-item {
            padding: 1.6rem;
            margin: 2rem 0;
            border: 1px dotted ${({ theme }) => theme.COLORS.BACKGROUND_800};
            border-radius: 15px;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
                padding-bottom: 1rem;
                border-bottom: 1px solid
                    ${({ theme }) => theme.COLORS.BACKGROUND_700};

                .content {
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    svg {
                        font-size: 2rem;
                        opacity: 0.8;
                    }
                }

                p {
                    color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
                    font-size: 1.4rem;
                }

                .remove-note {
                    color: red;
                    cursor: pointer;
                }
            }

            main {
                margin-top: 1.6rem;
                p {
                    font-weight: 500;
                    margin-bottom: 0.5rem;
                }
                span {
                    background-color: transparent;
                    padding: 0;
                    color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
                    margin-top: 1rem;
                }
            }
        }

        .size-12 {
            width: 100%;
        }
        .size-8 {
            width: 3fr;
        }
        .size-6 {
            width: 50%;
        }
        .size-4 {
            width: 1fr;
        }
        .size-2 {
            width: 1fr;
        }

        @media (max-width: 1800px) {
            .add-product {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }

        @media (max-width: 1450px) {
            .add-product {
                grid-template-columns: 1fr 1fr;
            }
        }
        @media (max-width: 1050px) {
            .title-value {
                grid-template-columns: 1fr;
            }
            .add-product {
                grid-template-columns: 1fr;
            }
        }
    }
`;
