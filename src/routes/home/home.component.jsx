import React from 'react';
import { LogoContainer, SocialIconsContainer, StyledContainer, StyledLogo, StyledSocialIcon } from "./home.styles";
import TypedComponent from '../../components/typed/typed.component';
import socialMediaLinks from '../../data/social'
import Toggle from '../../components/toggle-theme/toggle-theme.component';

const Home = ({ toggleTheme, isDarkMode }) => {

  return (
        <div>
            <StyledContainer>
                <Toggle onToggle={toggleTheme} isDarkMode={isDarkMode} />
                <LogoContainer>           
                    <StyledLogo />
                </LogoContainer>
                <div className='title'>
                    <TypedComponent loop={false} idName='name' strings={['Cris Echeguren']}/>
                    <div className='story'>
                        <TypedComponent cursor={true} loop={true} idName='stuff' strings={["Web Designer","Web Developer","Support Manager","Jazz Musician","Lightweaver"]}/>
                    </div>
                </div>
                <SocialIconsContainer>
                    {socialMediaLinks.map((link, index) => (
                        <StyledSocialIcon key={index} Icon={link.Icon} url={link.url} />
                  ))}
                </SocialIconsContainer>
            </StyledContainer>
            
        </div>
    );
}

export default Home;