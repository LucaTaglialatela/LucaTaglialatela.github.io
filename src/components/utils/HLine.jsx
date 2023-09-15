import styled from "styled-components";

const Line = styled.div`
    flex-grow: 1;
    height: 1px;
    background: #ebecf3;
    opacity: .3;
`;

function HLine() {
    return <Line />
}

export default HLine;
