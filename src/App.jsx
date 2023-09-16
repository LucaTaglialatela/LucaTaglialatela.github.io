import React, { useEffect, useState, useRef } from 'react'
import './App.css';
import styled from 'styled-components';

// Sections
import Header from './components/Header';
import Hero from './components/Hero';
import Title from './components/Title';
import Greeting from './components/Greeting';
import About from './components/About';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import Contact from './components/Contact';

// Utility Components
import { Reveal } from './components/utils/Reveal';
import HLine from './components/utils/HLine';
import { ProgressBar } from './components/utils/ProgressBar';

const Home = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
`;

const Sidebar = styled.div`
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #080808;
`;

const Logo = styled.div`
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 4px;
    margin: 1.8rem 0;
    background: var(--text);
    color: var(--background);
    font-size: 1.2rem;
    font-weight: 900;
`;

const NavbarLink = styled.a`
    text-decoration: none;
    color: var(--text);
    writing-mode: vertical-lr;
    margin-bottom: 2.4rem;
    font-size: 1.2rem;
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
    // overflow: hidden;
    // display: block;
`;

const HeroImg = styled.img`
    position: absolute;
    right: 0;
    opacity: 0.4;
    translate: 0% -15%;
`;

/* About -> Project -> Experience -> Education -> Contact */

/* Vite, React, Styled Components, Framer Motion */

function App() {
    const [highlightedSection, setHighlightedSection] = useState("");
    const sectionsRef = useRef([]);

    // Function to handle intersection changes
    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setHighlightedSection(entry.target.id);
            }
        });
    };

    useEffect(() => {
        // Initialize the Intersection Observer
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.8 });

        // Observe each section
        sectionsRef.current.forEach((section) => { observer.observe(section) });

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, [highlightedSection]);

    // Styles the currently active navbar link
    const isActive = (sectionId) => { return { opacity: sectionId === highlightedSection ? 1.0 : 0.3 } };

    // Sections by title and corresponding objects for dynamically generating React Components
    const sectionTitles = ['Greeting', 'About', 'Projects', 'Experience', 'Education', 'Contact'];
    const sectionComponents = {
        // 'Greeting': Greeting,
        "About": About,
        "Projects": ProjectsSection,
        'Experience': ExperienceSection,
        'Education': EducationSection,
        'Contact': Contact
    };
    
    // Dynamically generate React Components for each section
    const sections = sectionTitles.map((sectionTitle, index) => {
        return (
            <SectionWrapper key={sectionTitle} id={sectionTitle.toLowerCase()} ref={(ref) => (sectionsRef.current[index + 1] = ref)}>
                <Reveal>
                    {!(['Hero', 'Greeting', 'Contact'].includes(sectionTitle)) ? <Title content={sectionTitle} /> : null}
                    {(sectionTitle in sectionComponents) ? React.createElement(sectionComponents[sectionTitle], null) : null}
                </Reveal>
            </SectionWrapper>
        );
    });

    return (
        <Home>
            <Sidebar>
                <div style={{ marginBottom: "2.4rem" }}>
                    <Logo>^_~</Logo>
                    <HLine />
                </div>
                <NavbarLink href="#about" style={ isActive('about') }>About</NavbarLink>
                <NavbarLink href="#projects" style={ isActive('projects') }>Projects</NavbarLink>
                <NavbarLink href="#experience" style={ isActive('experience') }>Experience</NavbarLink>
                <NavbarLink href="#education" style={ isActive('education') }>Education</NavbarLink>
                <NavbarLink href="#contact" style={ isActive('contact') }>Contact</NavbarLink>
            </Sidebar>
            <Main>
                <Header />
                <ProgressBar />
                <SectionWrapper ref={(ref) => (sectionsRef.current[0] = ref)}>
                    <HeroImg src="https://i.pinimg.com/1200x/ba/0c/4d/ba0c4dc5ff3448e28f295f92e6b97121.jpg" alt="Mushroom cat" />
                    <Reveal>
                        <Hero />
                    </Reveal>
                </SectionWrapper>
                {sections}
                <div style={{ display: "block", textAlign: "center", fontSize: "1.2rem", marginBottom: "3.6rem" }}>
                    Built by me with ❤️ <br/>
                    &#169;2023 Luca Taglialatela
                </div>
            </Main>
        </Home>
    )
}

export default App
