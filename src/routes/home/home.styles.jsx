import styled from "styled-components";
import SocialIcon from "../../components/social-icon/social-icon.component";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.navColor1};
    padding-top: 13%;

    @media only screen and (max-width: 1170px) {
        padding-top: 0%;
    }

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

`;




export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    
`;

export const StyledLogo = styled(Logo)`
  width: 40vh;
  border-radius: 10px;
  fill: ${({ theme }) => theme.primaryDark};
  transition: fill 1s linear, background 1s linear;

  &:hover {
    fill: ${({ theme }) => theme.navColor1};
    background-image: radial-gradient(
      ${({ theme }) => theme.primaryDark} 20%,
      ${({ theme }) => theme.primaryLight} 
    );
  }


    @media only screen and (max-width: 1170px) {
        width: 40vh;
        margin-top: 50%;
    }
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding-bottom: 1.5rem;
`;

export const StyledSocialIcon = styled(SocialIcon)`
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
    color: ${({ theme }) => theme.navColor1};
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;