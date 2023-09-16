import styled from "styled-components";
import Project from "./Project";

const ProjectList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;
`;

function ProjectsSection() {
    const imgPath = "../public/";

    return (
        <ProjectList>
            <Project
                title={"Alice in Gravityland"}
                image={`${imgPath}alice_in_gravityland_teaser.png`}
                summary={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic feedback helps improve players\’ sense of directionality to increase their level of immersion. Inspired by Lewis Carroll\’s Alice\’s Adventures in Wonderland (1865), this multi-sensory adventure invites players to alter gravity to solve puzzles and experience gravity in a unique way."}
                skills={[ "Unity", "C#", "Arduino", "Git" ]}
                description={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic feedback helps improve players\’ sense of directionality to increase their level of immersion. Inspired by Lewis Carroll\’s Alice\’s Adventures in Wonderland (1865), this multi-sensory adventure invites players to alter gravity to solve puzzles and experience gravity in a unique way."}
            />
            <Project
                title={"Hand Me An Arm"}
                image={`${imgPath}robotics.png`}
                summary={"Project Description"}
                skills={[ "Python", "OpenCV", "Ubuntu", "Git" ]}
                description={""}
            />
        </ProjectList>
    );
}

export default ProjectsSection;
