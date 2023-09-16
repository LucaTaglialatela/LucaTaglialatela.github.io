import styled from 'styled-components';
import Button from './Button';

import { Draggable } from './utils/Draggable';

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
    padding-bottom: 1.2rem;
`;

// const HeroImg = styled.img`
//     position: absolute;
//     right: 0;
//     z-index: -1;
//     height: auto;
//     opacity: 0.4;
//     margin-right: 3.6rem;
// `;

// boxShadow: "inset 0px -.65rem 0px 0px #0aff9d"

function Hero() {
    return (
        <div style={{ marginBlock: "4.8rem" }}>
            {/* <HeroImg src="https://i.pinimg.com/originals/12/24/af/1224afc112018978863129363c423290.png" alt="Doraemon" /> */}
            {/* <HeroImg src="https://i.pinimg.com/1200x/ba/0c/4d/ba0c4dc5ff3448e28f295f92e6b97121.jpg" alt="Mushroom cat" /> */}
            <HeroTitle>Hello, I'm Luca<Draggable><span style={{ color: "var(--brand)" }}>.</span></Draggable></HeroTitle>
            <HeroSubtitle><span style={{ color: "var(--brand)", fontWeight: 200 }}>&#62;_</span> I like <span style={{ color: "var(--brand)", fontWeight: 900 }}>Software-</span> and <span style={{ color: "var(--brand)", fontWeight: 900 }}>Full-Stack Engineering</span>.</HeroSubtitle>
            <HeroAbout>I am a recent graduate with an MSc in Computer Science and Information Engineering. This page was built by myself from scratch, using Vite and React, and serves as a comprehensive introduction for those who are interested in my background and work. Please feel free to reach out!</HeroAbout>
            <Button href={"#contact"}>Contact me!</Button>
        </div>
    );
}

export default Hero;
