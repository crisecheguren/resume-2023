import { AboutWrapper, StyledContainer, StyledHeader } from "./about-me.styles";
import Image from "../../assets/PXL_20230402_154551933.jpg";
import SocialIcon from "../../components/social-icon/social-icon.component";
import socialMediaLinks from '../../data/social'

const AboutMe = ({onClick}) => {
    return (
        <StyledContainer onClick={onClick}>
            <StyledHeader>About Me</StyledHeader>
            <AboutWrapper>
                <div className="left">
                    <p>
                        <img src={Image} alt="Cris Echeguren" />
                    </p>
                </div>
                <div className="right">
                    <p>
                    I embarked on a career in the technology industry in 2012 as a repair technician for PCs, laptops, and cell phones in Portland, Oregon. Since then, I have cultivated a deep passion for technology and I've had the privilege of working with distinguished companies such as Extensis, Altavian, SharpSpring, and Constant Contact, progressing from the role of Tech Support Engineer to Support Manager. Throughout this journey, I've refined my troubleshooting and critical thinking skills, evolving into a compassionate and effective leader. Notably, I've achieved these managerial positions without formal education in the field, demonstrating my unwavering dedication to never giving up, no matter how difficult the path ahead.  With a growing enthusiasm for technology, I recently decided to further my education by pursuing a degree in Computer Science, setting my sights on a future as a software engineer.
                    </p>
                    
                    <p>
                     To display my expanding range of technical projects and development skills, I have developed this website as a comprehensive portfolio. 
                     </p>
                     <p>
                     Beyond my professional pursuits, I am a skilled jazz pianist with classical training from the age of five. My interests also include challenging roguelike games, such as DCSS and Nethack, and a passion for science fiction and fantasy literature, with the entire cosmere series under my belt. This diverse blend of critical thinking, leadership, and creativity has shaped a well-rounded and rewarding career in the technology industry.
                    </p>
                </div>
            </AboutWrapper>
            <div className="socialWrapper">
                {socialMediaLinks.map((link, index) => (
                    <SocialIcon key={index} Icon={link.Icon} url={link.url} className="socialMediaBtn" />
                ))}
            </div>
        </StyledContainer>
    );
};

export default AboutMe;