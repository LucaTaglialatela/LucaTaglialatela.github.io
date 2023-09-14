import styled from 'styled-components';

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

function Contact() {
    return (
        <ContactSection>
            <ContactTitle>Contact</ContactTitle>
            <ContactAbout>Please email me.</ContactAbout>
        </ContactSection>
    );
}

export default Contact;
