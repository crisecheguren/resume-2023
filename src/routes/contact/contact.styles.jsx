import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.navColor5};
    height: 100vh;

    @media only screen and (max-width: 1180px) {
        height: 100%;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    max-width: 1300px;
    width: 100%;
    margin: auto;
    
    
    .socialWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
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
        color: ${({ theme }) => theme.navColor5};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        }

    }

`;

export const StyledHeader = styled.h1`
    font-size: 8em;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryDark};
    margin: 0;
    padding-top: 1rem;
    margin-bottom: 1rem;
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
        flex-direction: column;
        margin-top: 1rem;
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
    @media only screen and (max-width: 768px) {
        
        flex-direction: column;
        margin-top: 1rem;
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

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.primaryDark};
    font-weight: 400;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;

  @media only screen and (max-width: 1180px) {
    position: relative;
    }
`;
