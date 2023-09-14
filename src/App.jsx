// import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Greeting from './components/Greeting';
import Title from './components/Title';
import { Reveal } from './components/utils/Reveal';

import styled from 'styled-components';

const Home = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
`;

const Sidebar = styled.div``;

const Main = styled.div`
    display: block;
    padding: 0;
    margin: 0;
`;

const Content = styled.div`
    // background-color: #2c2c2c;
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
            <Content>
                <SectionWrapper>
                    <Reveal><Hero /></Reveal>    
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal><Greeting /></Reveal>
                </SectionWrapper>
                <SectionWrapper>
                    <Reveal><Title /></Reveal>
                </SectionWrapper>
            </Content>
        </Main>
    </Home>
  )
}

export default App
