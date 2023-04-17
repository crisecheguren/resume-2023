import styled from "styled-components";

export const StyledWrapper = styled.div`
    background-color: ${({ theme }) => theme.navColor3};
    height: 100vh;
    position: relative;
    


    @media only screen and (max-width: 1170px) {
        height: 100%;
        padding-bottom: .5rem;
    }
`;

export const StyledContainer = styled.div`
  
  max-width: 1300px;
  width: 100%;
  
  margin: auto;
  padding-right: 1rem;
  padding-left: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-width: 1170px) {
    height: 100%;
    display: flex;
    flex-direction: column;
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
        color: ${({ theme }) => theme.navColor3};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
        }

    }
`;

export const AboutWrapper = styled.div`
    display: flex;
    gap: 3rem;
    margin-top: 7rem;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 1300px;

    .left {
        width: 100%;
        max-width: 650px;
        margin-top: 2%;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        
    }

    .right {
        width: 100%;
        max-width: 650px;
        margin-top: 3%;
        padding: 1rem;
        background-color: ${({ theme }) => theme.secondaryLight};
        border-radius: 8px;

        p {
            text-indent: 2rem;
        }
    }

    @media only screen and (max-width: 1170px) {
        
        flex-direction: column;
        gap: 0;
        justify-content: center;
        align-items: center;
        margin-top: 0;
        img {
            width: 300px;

        }

    }

    img {
        max-width: 450px;
        border-radius: 45%;
        margin-top: 1rem;

    }
`;






export const StyledHeader = styled.h1`
    font-size: 8em;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryDark};
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    padding-top: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    @media only screen and (max-width: 1170px) {
        font-size: 2rem;
    }
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

  @media only screen and (max-width: 768px) {
    position: relative;
    }
`;