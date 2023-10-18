import { styled, css } from 'styled-components';

export const Container = styled.div`
    position: relative;
    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.4);
    cursor: grab;

    main {
        p {
            font-weight: 500;
            line-height: 20px;
            margin-bottom: 1rem;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
        }

        span {
            font-weight: 400;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
        }
    }

    section {
        padding-bottom: 1rem;
        header {
            position: absolute;
            top: -20px;
            left: 15px;
        }

        button {
            position: absolute;
            top: -7px;
            right: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
            background-color: transparent;
            border-radius: 5px;
            border: none;
        }
    }

    img {
        width: 24px;
        height: 24px;
        border-radius: 5px;

        margin-top: 5px;
    }

    ${(props) =>
        props.$isdragging &&
        css`
            border: 2px dashed rgba(0, 0, 0, 0.2);
            padding-top: 31px;
            border-radius: 0;
            background: transparent;
            box-shadow: none;
            cursor: grabbing;

            p,
            img,
            header {
                opacity: 0;
            }
        `}
`;

export const Label = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background-color: ${(props) => props.color};
`;
