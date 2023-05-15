import React from 'react'
import {
    FaAt,
    FaCodepen,
    FaGithub,
    FaLinkedin
} from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from './FooterElements';


const Footer = () => {
    return(
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">La Casa Mia by mgcode</SocialLogo>
                        <SocialIcons>
                        <SocialIconLink 
                            href="/" target="_blank" aria-label="Email" rel="noopener noreferrer">
                                <FaAt />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://codepen.io/martageraldo" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                <FaCodepen />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://github.com/MGBrave" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink 
                            href="https://www.linkedin.com/in/martageraldo/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                <FaLinkedin />
                            </SocialIconLink>                            
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;