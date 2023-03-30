import React from 'react';
import { LogoContainer, StyledContainer, StyledLogo } from "./home.styles";
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TypedComponent from '../../components/typed/typed.component';


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
                    <Link to="https://github.com/crisecheguren" target='_blank'>
                        <FaGithub className='socialMediaBtn'/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/crisecheguren/" target="_blank">
                        <FaLinkedin className='socialMediaBtn'/>
                    </Link>
                    <Link to="https://www.youtube.com/channel/UCbM9B6NScahVeBjXBVe2ZIQ" target="_blank">
                        <FaYoutube className='socialMediaBtn'/>
                    </Link>
                </div>
            </StyledContainer>
            
        </div>
    );
}

export default Home;