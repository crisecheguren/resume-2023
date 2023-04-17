import { AboutWrapper, SocialIconsContainer, StyledContainer, StyledHeader, StyledWrapper } from "./about-me.styles";
import Image from "../../assets/PXL_20230402_154551933.jpg";
import SocialIcon from "../../components/social-icon/social-icon.component";
import socialMediaLinks from '../../data/social'
import about from '../../data/about'

const AboutMe = ({onClick}) => {
    return (
        
        <StyledWrapper>
            <StyledContainer onClick={onClick}>
                <StyledHeader>About Me</StyledHeader>
                <AboutWrapper>
                    <div className="left">
                        <p>
                            <img src={Image} alt="Cris Echeguren" />
                        </p>
                    </div>
                    <div className="right">
                        {about.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </AboutWrapper>
                <SocialIconsContainer>
                    {socialMediaLinks.map(({ Icon, url }, index) => (
                        <SocialIcon key={index} Icon={Icon} url={url} className="socialMediaBtn" />
                    ))}
                </SocialIconsContainer>
            </StyledContainer>
        </StyledWrapper>
    );
};

export default AboutMe;