import styled from 'styled-components';

const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
`;

const SectionTitle = styled.h3`
    font-size: 5.6rem;
`;

const HeaderLine = styled.div`
    flex-grow: 1;
    height: 1px;
    background: #ebecf3;
    opacity: .3;
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
