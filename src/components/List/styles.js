import { styled } from 'styled-components';

export const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px;
    opacity: ${(props) => (props.done ? 0.6 : 1)};

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-weight: 500;
            padding: 0 10px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        }

        button {
            width: 42px;
            height: 42px;
            border-radius: 18px;
            background-color: ${({ theme }) => theme.COLORS.BLUE_400};
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 30px;
    }
`;
