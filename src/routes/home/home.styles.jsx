import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10%;

`;

export const StyledLogo = styled(Logo)`
    width: 40vh;
    margin-top: 50%
    
    fill: ${({ theme }) => theme.primaryDark};
    transition: fill 0.3s linear;
    
    
    &:hover {
        fill: ${({ theme }) => theme.primaryHover};
    }

    @media only screen and (max-width: 1170px) {
        width: 40vh;
        margin-top: 50%;
    }
`;
