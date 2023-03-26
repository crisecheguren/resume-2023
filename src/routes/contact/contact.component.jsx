import { MdEmail, MdLocalPhone } from "react-icons/md";
import ContactForm from "../../components/contact-form/contact-form.component";
import ContactItem from "../../components/contact-item/contact-item.component";
import { ContactWrapper, StyledContainer, StyledHeader } from "./contact.styles";

const Contact = () => {
    return (
        <StyledContainer>
            <StyledHeader>contact</StyledHeader>
                <ContactWrapper>
                    <div className="left">
                        <ContactItem 
                            icon={<MdLocalPhone/>}
                            text="954-647-8339"
                        />
                        <ContactItem
                            icon={<MdEmail/>}
                            text="cris.echeguren@gmail.com"    
                        />
                        <ContactItem 
                            text="Gainesville, FL"
                        />
                    </div>
                    <div className="right">
                        <ContactForm/>
                    </div>
            </ContactWrapper>
        </StyledContainer>
    );
};

export default Contact;