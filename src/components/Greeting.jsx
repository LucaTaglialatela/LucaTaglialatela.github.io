import styled from 'styled-components';

const Filler = styled.h1`
    font-family: Georgia;
    font-size: 2.4rem;
    font-weight: 100;
    line-height: 2.4;
    // min-height: 500px;
`;

function Greeting() {
    return (
        <Filler>&quot;I must not fear.<br/>
        Fear is the mind-killer.<br/>
        Fear is the little-death that brings total obliteration.<br/>
        I will face my fear.<br/>
        I will permit it to pass over me and through me.<br/>
        And when it has gone past, I will turn the inner eye to see its path.<br/>
        Where the fear has gone there will be nothing.<br/>
        Only I will remain.&quot;</Filler>
    );
}

export default Greeting;
