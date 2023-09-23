import styled from 'styled-components';
import HeaderLine from './utils/HLine';

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`;

const SectionTitle = styled.h3`
    font-size: var(--text-2xl);
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
