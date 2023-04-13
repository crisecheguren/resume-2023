import React from 'react';
import { LogoContainer, StyledContainer, StyledLogo } from "./home.styles";
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import TypedComponent from '../../components/typed/typed.component';
import SocialIcon from '../../components/social-icon/social-icon.component';


const Home = () => {
    
  return (
        <div>
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
                    <SocialIcon Icon={FaGithub} url="https://github.com/crisecheguren" className="socialMediaBtn" />
                    <SocialIcon Icon={FaLinkedin} url="https://www.linkedin.com/in/crisecheguren/" className="socialMediaBtn" />
                    <SocialIcon Icon={FaYoutube} url="https://www.youtube.com/channel/UCbM9B6NScahVeBjXBVe2ZIQ" className="socialMediaBtn" />
                </div>
            </StyledContainer>
            
        </div>
    );
}

export default Home;