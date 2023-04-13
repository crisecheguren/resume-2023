import React from 'react';
import { LogoContainer, StyledContainer, StyledLogo } from "./home.styles";
import TypedComponent from '../../components/typed/typed.component';
import SocialIcon from '../../components/social-icon/social-icon.component';
import socialMediaLinks from '../../data/social'

const Home = ({onClick}) => {

  return (
        <div onClick={onClick}>
            <StyledContainer>
                <LogoContainer>           
                    <StyledLogo />
                </LogoContainer>
                <div className='title'>
                    <TypedComponent loop={false} idName='name' strings={['Cris Echeguren']}/>
                    <div className='story'>
                        <TypedComponent cursor={true} loop={true} idName='stuff' strings={["Web Designer","Web Developer","Support Manager","Jazz Musician","Lightweaver"]}/>
                    </div>
                </div>
                <div>
                    {socialMediaLinks.map((link, index) => (
                        <SocialIcon key={index} Icon={link.Icon} url={link.url} className="socialMediaBtn" />
                  ))}
                </div>
            </StyledContainer>
            
        </div>
    );
}

export default Home;