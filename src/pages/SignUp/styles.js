import { styled } from 'styled-components';

import background from '../../assets/backgroundRegister.webp';

import { Link } from 'react-router-dom';

export const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100vh;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_850};
`;

export const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;

    z-index: -100;

    width: 100%;
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    filter: brightness(0.2);
`;

export const Form = styled.form`
    text-align: center;

    margin: 0 auto;
    padding: 100px 60px;
    max-width: 550px;

    border-radius: 20px;
    background: var(
        --glass-1-fill-carey,
        linear-gradient(
            294deg,
            rgba(191, 191, 191, 0.06) 0%,
            rgba(0, 0, 0, 0) 100%
        ),
        rgba(0, 0, 0, 0.14)
    );
    box-shadow: -8px 4px 5px 0px rgba(0, 0, 0, 0.24);
    backdrop-filter: blur(26.5px);
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > p {
        font-size: 14px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

        margin-top: 30px;
    }

    input {
        color: ${({ theme }) => theme.COLORS.WHITE};
    }
`;

export const LinkToLogin = styled(Link)`
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    cursor: pointer;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    > h1 {
        font-size: 26px;
        margin-bottom: 5px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
`;

export const Fields = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    margin: 30px 0 30px;
    gap: 15px;
`;
