import React, { Fragment } from 'react';
import { LogoContainer, StyledLogo } from "./home.styles";
import TypedComponent from '../../components/typed/typed.component';


const Home = () => {
    
  return (
        <Fragment>
        <LogoContainer>           
            <StyledLogo />
        </LogoContainer>
            <TypedComponent loop={false} idName='name' strings={['Cris Echeguren']}/>
            <TypedComponent loop={true} idName='stuff' strings={['Web Designer','Web Developer','Support Manager','Jazz Musician','Lightweaver']}/>
        </Fragment>
    );
}

export default Home;