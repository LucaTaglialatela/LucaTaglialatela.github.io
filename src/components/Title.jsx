import styled from 'styled-components';

const TitleBox = styled.h1`
    font-size: 50px;
    padding: 0 10rem .65rem 0;
`;
// box-shadow: inset 0px -.65rem 0px 0px #0aff9d;
const SectionHeader = styled.div`
    position: relative;
    width: fit-content;
`;

function Title() {
    return <SectionHeader>okaya yes man</SectionHeader>
}

export default Title;
