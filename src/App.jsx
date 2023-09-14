// import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Title from './components/Title';
import Contact from './components/Contact';

import { Reveal } from './components/utils/Reveal';
import styled from 'styled-components';
import ExperienceSection from './components/ExperienceSection';
import HLine from './components/HLine';
import EducationSection from './components/EducationSection';

const Home = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #080808;
    position: sticky;
`;

const Main = styled.div`
    display: block;
    padding: 0;
    margin: 0;
`;

const SectionWrapper = styled.section`
    position: relative;
    max-width: 1150px;
    margin: auto;
    padding: 9.6rem;
    overflow: hidden;
    display: block;
`;

const Logo = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 4px;
    margin: 1.8rem 0;
    background: var(--text);
    color: var(--background);
    font-size: 1.2rem;
    font-weight: 900;
`;

/* About -> Project -> Experience -> Education -> Contact */

function App() {
    return (
        <Home>
            <Sidebar>
                <div style={{ marginBottom: "2.4rem" }}>
                    <Logo>^_~</Logo>
                    <HLine />
                </div>
                <div style={{ writingMode: "vertical-lr", marginBottom: "2.4rem", fontSize: "1.2rem" }}>About</div>
                <div style={{ writingMode: "vertical-lr", marginBottom: "2.4rem", fontSize: "1.2rem" }}>Projects</div>
                <div style={{ writingMode: "vertical-lr", marginBottom: "2.4rem", fontSize: "1.2rem" }}>Experience</div>
                <div style={{ writingMode: "vertical-lr", marginBottom: "2.4rem", fontSize: "1.2rem" }}>Education</div>
                <div style={{ writingMode: "vertical-lr", marginBottom: "2.4rem", fontSize: "1.2rem" }}>Contact</div>
            </Sidebar>
            <Main>
                <Header />
                <SectionWrapper>
                    <Reveal>
                        <Hero />
                    </Reveal>
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal>
                        <Greeting />
                    </Reveal>
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal>
                        <Title content="About" />
                    </Reveal>
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal>
                        <Title content="Projects" />
                    </Reveal>
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal>
                        <Title content="Experience" />
                        <ExperienceSection />
                    </Reveal>
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal>
                        <Title content="Education" />
                        <EducationSection />
                    </Reveal>
                </SectionWrapper>
                <SectionWrapper id="contact">
                    <Reveal>
                        <Contact />
                    </Reveal>
                </SectionWrapper>
                <div style={{ display: "block", textAlign: "center", fontSize: "1.2rem", marginBottom: "3.6rem" }}>
                    Built by me with ❤️ <br/>
                    &#169;2023 Luca Taglialatela
                </div>
            </Main>
        </Home>
    )
}

export default App
