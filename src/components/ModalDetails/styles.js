import { styled } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding-bottom: 2.5rem;

    border-bottom: 1px dotted ${({ theme }) => theme.COLORS.BACKGROUND_600};

    .business-data {
        margin-left: 6px;
        h2 {
            font-size: 2rem;
        }

        p {
            cursor: pointer;
            font-size: 1.5rem;
            color: ${({ theme }) => theme.COLORS.BLUE_300};
            margin-top: 5px;
        }

        .business-title {
            display: flex;
            align-items: center;
            gap: 10px;

            svg {
                width: 2rem;
                height: 2rem;
                cursor: pointer;
            }
        }
    }

    .control-btn {
        .delete-card {
            color: ${({ theme }) => theme.COLORS.RED};
            border: none;
            background-color: transparent;
            font-size: 18px;
            margin-right: 0.3rem;
        }
    }

    @media (max-width: 300px) {
        align-items: start;
        flex-direction: column;

        .delete-card {
            margin: 15px 0 0 5px;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    margin-top: 2.5rem;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
        'notes sidebar'
        'allnotes sidebar'
        'calculate calculate';
    gap: 15px;

    .hide {
        display: none;
    }

    .sidebar-col {
        grid-area: sidebar;

        .value-products {
            background-color: ${({ theme }) => theme.COLORS.WHITE};
            border-radius: 5px;
            height: 100%;

            p.subtitle {
                padding: 1.6rem;
                font-weight: bold;

                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
                border-radius: 5px 5px 0 0;
            }

            div {
                padding: 1.6rem;

                display: flex;
                flex-direction: column;
                gap: 10px;

                span {
                    font-size: 1.3rem;
                    margin-bottom: -5px;
                    opacity: 0.7;
                }

                p {
                    font-size: 1.6rem;
                }

                .cost {
                    color: ${({ theme }) => theme.COLORS.RED};
                }

                .profit {
                    color: ${({ theme }) => theme.COLORS.GREEN};
                    font-weight: bold;
                }

                button {
                    margin-top: 10px;
                    background-color: ${({ theme }) =>
                        theme.COLORS.BACKGROUND_500};

                    border: none;
                    border-radius: 5px;

                    text-align: center;

                    padding: 5px;
                }
            }
        }
    }

    .notes {
        grid-area: notes;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        overflow-y: auto;
        max-height: 250px;
        border: none;
        border-radius: 5px;

        span {
            display: flex;
            justify-content: space-between;

            padding: 1.6rem;
            border-radius: 5px 5px 0 0;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

            p {
                display: flex;
                align-items: center;
                gap: 5px;

                color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                font-weight: bold;
            }

            button {
                background-color: transparent;

                text-decoration: underline;

                border: none;
            }

            button:hover {
                color: ${({ theme }) => theme.COLORS.BLUE_400};
            }
        }

        p.note {
            width: 100%;

            padding: 1.6rem;

            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }

        .add-notes {
            margin: 1.6rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            input,
            textarea {
                width: 100%;
                padding: 1rem;
                border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_600};
                border-radius: 5px;
            }

            .btn-add-remove {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                button {
                    padding: 1rem;
                    border: none;
                    border-radius: 5px;
                }

                .btn-remove {
                    background-color: ${({ theme }) => theme.COLORS.RED};
                    color: ${({ theme }) => theme.COLORS.WHITE};
                }

                .btn-add {
                    background-color: ${({ theme }) => theme.COLORS.GREEN};
                    color: ${({ theme }) => theme.COLORS.WHITE};
                }
            }
        }

        .note-item {
            padding: 1.6rem;
            margin: 2rem;
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
    }

    .description {
        grid-area: allnotes;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 5px;

        div {
            display: flex;
            justify-content: space-between;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            h2 {
                padding: 1.6rem;

                font-weight: bold;
                font-size: 1.6rem;

                border-radius: 5px 5px 0 0;
            }

            button {
                background-color: transparent;

                text-decoration: underline;

                border: none;
                padding: 1.6rem;
            }
        }
        span {
            padding: 2.5rem 1.6rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        p {
            padding: 2.5rem 1.6rem;
            border: none;
        }

        textarea {
            padding: 1.6rem;
            border: none;
            width: 100%;
        }

        .btn-add-remove {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background-color: transparent;
            padding: 1rem;
            button {
                padding: 1rem;
                border: none;
                border-radius: 5px;
                text-decoration: none;
            }

            .btn-remove {
                background-color: ${({ theme }) => theme.COLORS.RED};
                color: ${({ theme }) => theme.COLORS.WHITE};
            }

            .btn-add {
                background-color: ${({ theme }) => theme.COLORS.GREEN};
                color: ${({ theme }) => theme.COLORS.WHITE};
            }
        }
    }

    .profit-calculation {
        grid-area: calculate;
        width: 100%;
        background-color: ${({ theme }) => theme.COLORS.WHITE};
        border-radius: 0 0 5px 5px;

        h2 {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
            padding: 1.6rem;

            font-weight: bold;
            font-size: 1.6rem;

            border-radius: 5px 5px 0 0;
        }

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
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

                border: none;
                border-radius: 5px;

                padding: 8px 10px;
            }

            select {
                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};

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
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 6px;

            label {
                font-size: 1.2rem;
            }
            padding: 1.6rem 1.6rem 0;
        }

        .btn-product {
            font-weight: bold;

            margin-left: 5px;

            color: red;
            font-size: 1.4rem;

            display: flex;
            align-items: center;
            gap: 15px;
            padding: 1.6rem;

            .add {
                color: ${({ theme }) => theme.COLORS.GREEN};
                display: flex;
                align-items: center;
                gap: 5px;
                cursor: pointer;
            }

            .remove {
                color: ${({ theme }) => theme.COLORS.RED};
                display: flex;
                align-items: center;
                gap: 5px;
                cursor: pointer;
            }
        }

        .show-add-products {
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;

            padding: 1.6rem;

            color: ${({ theme }) => theme.COLORS.GREEN};
            font-size: 1.5rem;

            cursor: pointer;
        }

        .show-add-products:hover {
            text-decoration: underline;
        }

        .product-cardlist {
            margin-top: 1rem;
            table {
                width: 100%;
                text-align: center;
                overflow-x: auto;

                th {
                    border-top: 1px solid
                        ${({ theme }) => theme.COLORS.BACKGROUND_600};
                    padding: 0.5rem 0.5rem 1rem 0.5rem;
                }

                td {
                    padding: 0.5rem;
                }

                th,
                td {
                    border: 1px solid
                        ${({ theme }) => theme.COLORS.BACKGROUND_500};
                }

                .btnRemove {
                    color: red;
                    cursor: pointer;
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
    }

    @media (max-width: 1650px) {
        .profit-calculation {
            .add-product {
                grid-template-columns: 1fr 1fr;
            }
        }
    }

    @media (max-width: 1150px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 130px auto;
        grid-template-areas:
            'notes'
            'allnotes'
            'sidebar'
            'calculate'
            'calculate';

        .sidebar-col {
            grid-area: sidebar;
        }
    }

    @media (max-width: 1050px) {
        .title-value {
            grid-template-columns: 1fr;
        }
    }
`;

export const CheckboxLabel = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;

    input[type='checkbox'] {
        margin-right: 8px;
    }
`;
