import React from 'react';
import { LogoContainer, StyledContainer, StyledLogo } from "./home.styles";
import TypedComponent from '../../components/typed/typed.component';


const Home = () => {
    
  return (
        <div>
            <StyledContainer>
                <LogoContainer>           
                    <StyledLogo />
                </LogoContainer>
                    <TypedComponent loop={false} idName='name' strings={['Cris Echeguren']}/>
                    <TypedComponent loop={true} idName='stuff' strings={['Web Designer','Web Developer','Support Manager','Jazz Musician','Lightweaver']}/>
            </StyledContainer>
            
        </div>
    );
}

export default Home;