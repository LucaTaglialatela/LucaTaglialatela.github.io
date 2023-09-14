import styled from 'styled-components';
import HeaderLine from './HLine';

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`;

const SectionTitle = styled.h3`
    font-size: 5.6rem;
`;

function Title(props) {
    return (
        <SectionHeader>
            <SectionTitle><span style={{ color: "var(--brand)", marginLeft: ".2rem"}}>/ </span>{props.content}</SectionTitle>
            <HeaderLine />
        </SectionHeader>
    );
}

export default Title;
