import styled from 'styled-components';
import { LinkedIn, GitHub, Orcid } from './utils/SvgComponent';
import Resume from '../assets/documents/Luca_Taglialatela_Resume__0923.pdf'
import Button from './Button';

const Headerbox = styled.header`
    display: flex;
    top: 0;
    justify-content: space-between;
    align-items: center;
    height: calc(40px + 3.6rem);
    padding: 0 3.6rem;
    position: sticky;
    backdrop-filter: blur(10px);
    z-index: 20;
`;

const Socials = styled.div`
    display: flex;
    gap: 2.4rem;
`;

function Header() {
    return (
        <Headerbox>
            <Socials>
                <a href="https://www.linkedin.com/in/lucataglialatela">
                    <LinkedIn />
                </a>
                <a href="https://github.com/LucaTaglialatela">
                    <GitHub />
                </a>
                <a href="https://orcid.org/0009-0000-2048-6691">
                    <Orcid />
                </a>
            </Socials>
            <Button href={Resume}>My Resume</Button>
        </Headerbox>
    );
}

export default Header;
