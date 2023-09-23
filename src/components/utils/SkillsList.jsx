import styled from "styled-components";

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;    
`;

const Chip = styled.span`
    font-size: var(--text-s);
    background: #232323;
    padding: 0.2rem 0.8rem;
    border-radius: 999px;
`;

function SkillsList(props) {
    const skills = props.skills.map((skill, idx) => {
        return (
            <Chip key={skill}>{skill}</Chip>
        );
    });

    return ( <Skills>{skills}</Skills> );
}

export default SkillsList;
