// import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Title from './components/Title';
import Contact from './components/Contact';

import { Reveal } from './components/utils/Reveal';
import styled from 'styled-components';
import Experience from './components/Experience';

const Home = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
`;

const Sidebar = styled.div`
    background-color: #080808;
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

/* About -> Project -> Experience -> Education -> Contact */

function App() {
  return (
    <Home>
        <Sidebar></Sidebar>
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
                    <Experience />
                </Reveal>
            </SectionWrapper>
            <SectionWrapper>
                <Reveal>
                    <Title content="Education" />
                </Reveal>
            </SectionWrapper>
            <SectionWrapper>
                <Reveal>
                    <Contact />
                </Reveal>
            </SectionWrapper>
        </Main>
    </Home>
  )
}

export default App
