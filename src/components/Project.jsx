import styled from "styled-components";
import HLine from "./utils/HLine";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Modal from "./utils/Modal";

const ProjectTitle = styled.h2`
    font-size: var(--text-l);
    font-weight: 700;
`;

const ProjectImg = styled.div`
    width: 100%;
    aspect-ratio: 16/9;
    background: #232323;
    cursor: pointer;
    position: relative;
    border-radius: 0.8rem;
    overflow: hidden;
    margin-block: 1.6rem;
`;

const CustomLink = styled.span`
    color: var(--brand);
    font-weight: 400;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const ResponsiveHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: start;
    }
`;

const ResponsiveLinks = styled.div`
    all: inherit;

    @media (max-width: 800px) {
        display: flex;
        gap: 1.2rem;
        margin-bottom: 1.2rem;
    }    
`;

function Project(props) {
    const [modalOpen, setModalOpen] = useState(false);

    const closeModal = () => {
        setModalOpen(false);
    }

    const openModal = () => {
        setModalOpen(true);
    }

    useEffect(() => {
        const disableBodyScroll = modalOpen ? 'hidden' : 'unset';
        document.body.style.overflow = disableBodyScroll;
      }, [modalOpen]);

    const projectLinks = props.links.map((link, index) => {
        return (
            <a key={index} href={link.href} style={{ display: "flex", alignItems: "center" }}>
                {link.svg}
            </a>
        );
    });

    return (
        <div style={{ lineHeight: "3.6rem" }}>
            <ProjectImg>
                <motion.img
                    src={props.image}
                    alt="Mushroom cat"
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    whileTap={{ scale: 0.9, rotate: 2 }}
                    onClick={() => modalOpen ? closeModal() : openModal()}
                    style={{
                        width: "85%",
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        translate: "-50% 15%",
                        borderRadius: "0.4rem",
                    }}
                />
                {modalOpen &&
                    <Modal
                        {...props}
                        modalOpen={modalOpen}
                        handleClose={closeModal}
                    />
                }
            </ProjectImg>
            <ResponsiveHeader>
                <ProjectTitle>{props.title}</ProjectTitle>
                {(window.innerWidth > 800) && <HLine />}
                <ResponsiveLinks>{projectLinks}</ResponsiveLinks>
            </ResponsiveHeader>
            <div style={{ fontSize: "var(--text-s)", color: "var(--brand)" }}>
                {props.skills.join(" • ")}
            </div>
            <div style={{ fontSize: "var(--text-s)", fontWeight: "200", lineHeight: "3.2rem" }}>
                {props.summary}
                <br/>
                &#32;
                <CustomLink onClick={() => modalOpen ? closeModal() : openModal()}>
                    Learn more...
                </CustomLink>
                {/* &#9193; */}
            </div>
        </div>
    );
}

export default Project;
