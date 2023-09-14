import styled from 'styled-components';

const HeroTitle = styled.h1`
    font-size: 9.6rem;
    font-weight: 900;
    margin: auto;
    padding-bottom: 1.2rem;
`;

const HeroSubtitle = styled.h2`
    font-size: 2.4rem;
    font-weight: 400;
    margin: auto;
    padding-bottom: 0.6rem;
`;

const HeroAbout = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    margin: auto;
`;

const HeaderLine = styled.div`
    width: 100%;
    height: 1px;
    background: #ebecf3;
    opacity: .3;
`;

// boxShadow: "inset 0px -.65rem 0px 0px #0aff9d"

function Hero() {
    return (
        <div>
            <HeroTitle>Hello, I'm Luca</HeroTitle>
            <HeroSubtitle>and i'm very <span style={{ color: "#0aff9d", fontWeight: 900 }}>stoopid</span></HeroSubtitle>
            <HeroAbout>I am a recent graduate with a degree in CSIE. This website serves as a landing page for new connections and recruiters that are interested in my background and my work.</HeroAbout>
        </div>
    );
}

export default Hero;
