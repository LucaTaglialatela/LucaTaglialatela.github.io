import { Fragment } from "react";
import { motion } from "framer-motion"
import styled from "styled-components";
import { Cross } from "./SvgComponent";
import HLine from "./HLine";

const StyledBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    z-index: 100000000;
    backdrop-filter: blur(12px);
    overflow-y: scroll;
    padding: 4.8rem 1.2rem;
`;

const StyledModal = styled(motion.div)`
    width: clamp(50%, 700px, 90%);
    height: fit-content;
    overflow: hidden;
    background: #232323;
    border-radius: 1.2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, .1);
    cursor: auto;
`;

const Icon = styled.svg`
    position: absolute;
    top: 0;
    right: 0;
    margin: 1.2rem;
    height: 2.4rem;
    width: 2.4rem;
    color: #ebecf3;

    &:hover {
        color: var(--brand);
        cursor: pointer;
    }
`;

const ResponsiveHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: var(--text-xl);
    font-weight: 700;

    @media (max-width: 800px) {
        flex-direction: column;
        align-items: start;
        gap: 0.6rem;
    }
`;

const ResponsiveLinks = styled.div`
    display: inherit;
    gap: inherit;
    
    @media (max-width: 800px) {
        display: flex;
        gap: 1.2rem;
        margin-bottom: 0.6rem;
    }    
`;

const BackDrop = ({ children, onClick }) => {
    return (
        <StyledBackdrop
            onClick={onClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </StyledBackdrop>
    );
}

const DropIn = {
    hidden: {
        y: "100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: "1",
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 35,
            stiffness: 600
        }
    },
    exit: {
        opacity: 0
    },
}

function Modal(props) {
    const projectLinks = props.links.map((link, index) => {
        return (
            <a key={index} href={link.href} style={{ display: "flex", alignItems: "center" }}>
                {link.svg}
            </a>
        );
    });

    const projectDescriptions = props.description.map((paragraph, index) => {
        return (<Fragment key={index}>
            {(index > 0) && <br/>}
            <p>{paragraph}</p>
        </Fragment>);
    });
    
    return (
        <BackDrop onClick={props.handleClose}>
            <Icon onClick={props.handleClose}><Cross /></Icon>
            <StyledModal
                onClick={(e) => e.stopPropagation()}
                variants={DropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <img src={props.image} alt="" style={{ width: "100%" }} />
                <div style={{ padding: "2.4rem", lineHeight: "3.6rem" }}>
                    <ResponsiveHeader>
                        {props.title}
                        <HLine />
                        <ResponsiveLinks>{projectLinks}</ResponsiveLinks>
                    </ResponsiveHeader>
                    <div style={{ fontSize: "var(--text-s)", color: "var(--brand)", marginBlock: "0.6rem" }}>
                        {props.skills.join(" • ")}
                    </div>
                    <div style={{ fontSize: "var(--text-s)", lineHeight: "2.4rem" }}>
                        {projectDescriptions}
                        {/* {props.description} */}
                    </div>
                </div>
            </StyledModal>
        </BackDrop>
    );
}

export default Modal;
