import styled from 'styled-components';

export const Container = styled.div`
    .sidebar {
        width: 100%;
        height: 100vh;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

        transition: all 0.2s;

        box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .sidebar .logo {
        font-size: 2.5rem;

        flex: 1;
        display: grid;

        padding: 3rem 1.6rem;
    }

    .sidebar .separator {
        border-bottom: 1px dashed ${({ theme }) => theme.COLORS.BACKGROUND_750};

        position: relative;
    }

    .sidebar .collapse {
        position: absolute;

        color: ${({ theme }) => theme.COLORS.WHITE};

        font-size: 3rem;
        right: 0;
        top: -15px;

        cursor: pointer;

        transition: all 0.2s;
    }

    .sidebar .collapse:hover {
        color: ${({ theme }) => theme.COLORS.BLUE_100};
    }

    .sidebarList {
        padding: 3rem 0;
    }

    .sidebar .row {
        width: 100%;
        height: 60px;

        display: flex;
        align-items: center;

        gap: 20px;

        font-size: 1.6rem;
    }

    .sidebar .row:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_750};
        color: ${({ theme }) => theme.COLORS.BLUE_300};
    }

    .sidebar .row #active {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    .row .icon {
        flex: 10%;

        margin-left: 1.6rem;
    }

    .row .title {
        flex: 90%;
    }

    .logout {
        display: flex;
        align-items: center;

        margin-left: 1.6rem;

        font-size: 1.8rem;

        gap: 20px;
        height: 60px;
        width: 100%;

        cursor: pointer;

        svg {
            color: ${({ theme }) => theme.COLORS.RED};
        }
    }

    .sidebar.closed {
        width: 100px;
        max-width: 100px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }

    .sidebar.closed .collapse {
        font-size: 2.5rem;
        top: -12px;
    }

    .sidebar.closed .row .icon {
        flex: 100%;
        display: grid;
        place-items: center;

        font-size: 2rem;
    }

    .sidebar.closed .row:hover {
        color: ${({ theme }) => theme.COLORS.BLUE_300};
    }

    .sidebar.closed .row .title {
        flex: 0;
    }

    .sidebar.closed .logout {
        margin-left: 0;

        font-size: 2rem;

        justify-content: center;
    }
`;
