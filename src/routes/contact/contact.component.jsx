import { MdEmail, MdLocalPhone } from "react-icons/md";
import socialMediaLinks from '../../data/social'
import ContactForm from "../../components/contact-form/contact-form.component";
import ContactItem from "../../components/contact-item/contact-item.component";
import SocialIcon from "../../components/social-icon/social-icon.component";
import { ContactWrapper, StyledContainer, StyledHeader, StyledLink, StyledWrapper } from "./contact.styles";

const Contact = ({onClick}) => {
    return (

        <StyledWrapper>
            <StyledContainer onClick={onClick}>
                <StyledHeader>contact</StyledHeader>
                    <ContactWrapper>
                        <div className="left">
                            <StyledLink to="tel:9546478339" target="_blank">
                                <ContactItem
                                    icon={<MdLocalPhone/>}
                                    text="954-647-8339"
                                />
                            </StyledLink>
                            <StyledLink to="mailto:cris.echeguren@gmail.com" target="_blank">
                                <ContactItem
                                    icon={<MdEmail/>}
                                    text="cris.echeguren@gmail.com"
                                />
                            </StyledLink>
                            <StyledLink to="https://goo.gl/maps/YeSU9w2nUpsBee2w5" target="_blank">
                                <ContactItem
                                    text="Gainesville, FL"
                                />
                            </StyledLink>
                        </div>
                        <div className="right">
                            <ContactForm/>
                        </div>
                    </ContactWrapper>
                    <div className="socialWrapper">
                        {socialMediaLinks.map((link, index) => (
                            <SocialIcon key={index} Icon={link.Icon} url={link.url} className="socialMediaBtn" />
                    ))}
                    </div>
            </StyledContainer>
        </StyledWrapper>
        

    );
};

export default Contact;