import styled from "styled-components";

const StyledButton = styled.button`
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 4px;
    padding: 1.2rem 2.4rem;
    background: var(--brand);
    color: var(--background);
    position: relative;
    overflow: hidden;
    transition: opacity .2s;

    &:hover {
        opacity: .85;
    }
`;

function Button({ children }) {
    return (
        <form action="./Luca_Taglialatela_Resume__0923.pdf">
            <StyledButton type="submit" >{children}</StyledButton>
        </form>
    );
}

export default Button;
