import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        font-size: 2rem;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .story {
        font-size: 1.5rem;
        font-weight: 400;
        display: inline;
        align-items: center;
        justify-content: center;
    }

    .socialMediaBtn {
        margin-top: 1.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
        width: 75px;
        height: 40px;
        color: ${({ theme }) => theme.primaryDark};
        background-color: transparent;
        border: none;
        border-radius: 15px;
        cursor: pointer;

        &:hover {
        background-color: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        }

    }

    
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
