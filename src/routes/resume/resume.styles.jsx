import styled from 'styled-components';

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

export const StyledParagraph = styled.p`
    white-space: pre-line;
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primaryDark};
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    margin-top: 1rem;
    
    @media only screen and (max-width: 1170px) {
        font-size: 1.2rem;
    }
`;

export const StyledH3 = styled.h3`
    padding-top: 0.25rem;
`;

