import styled from 'styled-components';
import { LinkedIn, GitHub, Orcid } from './SvgComponent';

const Headerbox = styled.header`
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: calc(45px + 3.6rem);
    padding: 0 3.6rem;
    position: sticky;
    backdrop-filter: blur(10px);
    z-index: 20;
`;

const Socials = styled.div`
    display: flex;
    gap: 1rem;
`;

const Icon = styled.svg`
    height: 2.4rem;
    width: 2.4rem;
    color: #ebecf3;

    &:hover {
        color: #0aff9d;
    }
`;

const Resume = styled.div`
  justify-content: right;
`;

function Header() {
    return (
        <Headerbox>
            <Socials>
                <a href="https://www.linkedin.com/in/lucataglialatela">
                    <Icon><LinkedIn /></Icon>
                </a>
                <a href="https://github.com/LucaTaglialatela">
                    <Icon><GitHub /></Icon>
                </a>
                <a href="https://orcid.org/0009-0000-2048-6691">
                    <Icon><Orcid /></Icon>
                </a>
            </Socials>
            <Resume><a href="./Luca_Taglialatela_Resume__0923.pdf">Resumeeeee</a></Resume>
        </Headerbox>
    );
}

export default Header;
