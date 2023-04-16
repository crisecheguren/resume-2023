import styled from "styled-components";

export const StyledContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.navColor4};
`;

export const StyledProjects = styled.div`
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