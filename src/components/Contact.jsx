import styled from 'styled-components';
import { Mail } from './utils/SvgComponent';

const ContactSection = styled.div`
    text-align: center;
`;

const ContactTitle = styled.h1`
    font-size: 9.6rem;
    font-weight: 900;
    margin: auto;
    padding-bottom: 1.2rem;
`;

const ContactAbout = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    margin: auto;
`;

const Email = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin: auto;
    font-size: 2rem;
    transition: color .25s;
`;

function Contact() {
    return (
        <ContactSection>
            <ContactTitle>Contact<span style={{ color: "var(--brand)" }}> :</span></ContactTitle>
            <ContactAbout>
                If you're interested in working with me, please send an email or connect with me via <a href="https://www.linkedin.com/in/lucataglialatela">LinkedIn</a> (●'◡'●)
            </ContactAbout>
            <br />
            <a href="mailto:luca.taglialatela@gmail.com">
                <Email>
                    <Mail style={{ color: "var(--brand)" }} />
                    <span>luca.taglialatela@gmail.com</span>
                </Email>
            </a>
        </ContactSection>
    );
}

export default Contact;
