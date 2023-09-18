import styled from "styled-components";
import Project from "./Project";
import { AliceImg, RoboticsImg, DrivingVibeImg } from "../assets/images";
import { Doi, GitHub } from "./utils/SvgComponent";

const ProjectList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;
`;

function ProjectsSection() {
    return (
        <ProjectList>
            <Project
                title={"Alice in Gravityland"}
                image={AliceImg}
                links={[
                    {svg: <GitHub />, href: "https://github.com/bwyanyuuu/AliceInGravityland"},
                    {svg: <Doi />, href: "https://dl.acm.org/doi/10.1145/3588027.3595591"}
                ]}
                summary={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion."}
                skills={[ "Unity", "C#", "Arduino", "Git" ]}
                description={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic feedback helps improve players\’ sense of directionality to increase their level of immersion. Inspired by Lewis Carroll\’s Alice\’s Adventures in Wonderland (1865), this multi-sensory adventure invites players to alter gravity to solve puzzles and experience gravity in a unique way."}
            />
            <Project
                title={"Hand Me An Arm"}
                image={RoboticsImg}
                links={[
                    {svg: <GitHub />, href: "https://github.com/LucaTaglialatela/Robotics_CV_project"}
                ]}
                summary={"Project Description"}
                skills={[ "Python", "OpenCV", "Ubuntu", "Git" ]}
                description={""}
            />
            <Project
                title={"DrivingVibe"}
                image={DrivingVibeImg}
                links={[]}
                summary={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion."}
                skills={[ "Unity", "C#", "Arduino", "Git" ]}
                description={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic feedback helps improve players\’ sense of directionality to increase their level of immersion. Inspired by Lewis Carroll\’s Alice\’s Adventures in Wonderland (1865), this multi-sensory adventure invites players to alter gravity to solve puzzles and experience gravity in a unique way."}
            />
            <Project
                title={"Alice in Gravityland"}
                image={AliceImg}
                links={[]}
                summary={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion."}
                skills={[ "Unity", "C#", "Arduino", "Git" ]}
                description={"Alice in Gravityland is a virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic feedback helps improve players\’ sense of directionality to increase their level of immersion. Inspired by Lewis Carroll\’s Alice\’s Adventures in Wonderland (1865), this multi-sensory adventure invites players to alter gravity to solve puzzles and experience gravity in a unique way."}
            />
        </ProjectList>
    );
}

export default ProjectsSection;
