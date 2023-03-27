import styled from "styled-components";

export const StyledContainer = styled.div`
    max-width: 1300px;
    width: 100%;
    margin: auto;
`;

export const StyledHeader = styled.h1`
    font-size: 8em;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryDark};
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    @media only screen and (max-width: 1170px) {
        font-size: 2rem;
    }
`;

export const ContactWrapper = styled.div`
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 1300px;

    ::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 50%;
        background-color: ${({ theme }) => theme.primaryDark};
        left: 50%;
        top: 40%;
        transform: translate(-50%, -50%);

    }

    .left {
        width: 100%;
        max-width: 650px;
        margin-top: 3%;
        padding: 1rem;
    }

    .right {
        width: 100%;
        max-width: 650px;
        padding: 1rem;
    }
    @media only screen and (max-width: 1170px) {

    }
    @media only screen and (max-width: 768px) {
        
        flex-direction: column;
        gap: 0;
        justify-content: center;
        align-items: center;

        ::after {
            display: none;
        }

        .right {
            padding: 3rem 1rem 1rem 1rem;
        }
    }
`;