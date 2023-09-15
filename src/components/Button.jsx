import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 1.2rem 2.4rem;
    background: var(--brand);
    color: var(--background);
    font-size: 1.6rem;
    position: relative;
    overflow: hidden;
    transition: opacity .2s;

    &:hover {
        opacity: .85;
    }

`;

function Button({ children, href }) {
    return (
        <a href={href}><StyledButton type="button">{children}</StyledButton></a>
    );
}

export default Button;
