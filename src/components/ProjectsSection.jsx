import styled from "styled-components";
import Project from "./Project";
import { AliceImg, RoboticsImg, DrivingVibeImg, PortfolioImg } from "../assets/images";
import { GitHub, Youtube, Doi } from "./utils/SvgComponent";

const ProjectList = styled.div`
    display: grid;
    gap: 3.2rem;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;

function ProjectsSection() {
    return (
        <ProjectList>
            <Project
                title={"Portfolio Page"}
                image={PortfolioImg}
                links={[
                    {svg: <GitHub />, href: "https://github.com/LucaTaglialatela/LucaTaglialatela.github.io"},
                ]}
                summary={"I have built this portfolio page by myself from scratch, using Vite and React. It is statically built and deployed on GitHub pages using GitHub Actions."}
                skills={[ "React", "Vite", "JavaScript", "Framer", "CI/CD", "Git" ]}
                description={[
                    "I have built this portfolio page by myself from scratch, using Vite and React. It is statically built and deployed on GitHub pages using GitHub Actions.",
                    "It took me a little less than a week to put everything together, although I still like to make changes here and there and refactor the code.",
                    "Styling and animations were particularly exciting to implement using Styled Components and the Framer Motion library."
                ]}
            />
            <Project
                title={"Alice in Gravityland"}
                image={AliceImg}
                links={[
                    {svg: <GitHub />, href: "https://github.com/bwyanyuuu/AliceInGravityland"},
                    {svg: <Youtube />, href: "https://youtu.be/U06KPKcVk9s?si=-GZoW3lbnEUrCLMy"},
                    {svg: <Doi />, href: "https://dl.acm.org/doi/10.1145/3588027.3595591"}
                ]}
                summary={"Alice in Gravityland is an award-winning virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion."}
                skills={[ "Unity", "C#", "Arduino", "C++", "Git" ]}
                description={[
                    "Alice in Gravityland is an award-winning virtual reality experience exploring gravity with novel, around-the-head vibrotactile feedback using illusory tactile motion. The haptic feedback helps improve players\’ sense of directionality to increase their level of immersion. Inspired by Lewis Carroll\’s Alice\’s Adventures in Wonderland (1865), this multi-sensory adventure invites players to alter gravity to solve puzzles and experience gravity in a unique way.",
                    "As the project lead, I am proud that Alice in Gravityland has been accepted to, and presented at SIGGRAPH 2023, which is the premier conference for Computer Graphics and Interactive Techniques, after having won first place in the Cross-Domain Category at the 2023 Vision Get Wild competition in Kaohsiung, Taiwan.",
                    "The tech stack consists of Unity/C# for the VR component and Arduino/C++ for the hardware component. The headband connects to the VR application via the WiFi driver of a NodeMCU-32S platform, while the vibrotactile motors are controlled individually by DRV2605L drivers."
                ]}
            />
            <Project
                title={"DrivingVibe"}
                image={DrivingVibeImg}
                links={[
                    {svg: <Doi />, href: "https://dl.acm.org/doi/10.1145/3604253"}
                ]}
                summary={"DrivingVibe explores vibrotactile feedback designs around the head to enhance VR driving."}
                skills={[ "Unity", "C#", "Arduino", "C++", "Git" ]}
                description={[
                    "DrivingVibe explores vibrotactile feedback designs around the head to enhance VR driving. It will be presented at MobileHCI, a leading series of academic conferences in Human-Computer interaction, from September 26-29 in Athens, Greece.",
                    "We compared a mirroring approach versus a 3D inertia-based approach for the design of the vibrotactile feedback, using a 360-degree vibrotactile headband. The mirroring approach extends the vibrotactile patterns of handheld controllers to actuate the entire headband uniformly. The 3D inertia-based approach uses the acceleration telemetry data that driving games/simulators export to motion platforms to generate directional vibration patterns, including: centrifugal forces, horizontal acceleration/deceleration, and vertical motion due to rough terrain.",
                    "A 24-person user experience evaluation in both passive passenger mode and active driving mode revealed that both designs significantly improved realism, immersion, and enjoyment, with a 2:1 preference for 3D inertia-based vs. mirroring designs.",
                    "The tech stack consists of virtual applications built using Unity/C# and the vibrotactile headband built using Arduino/C++."
                ]}
            />
            <Project
                title={"Hand Me An Arm"}
                image={RoboticsImg}
                links={[
                    {svg: <GitHub />, href: "https://github.com/LucaTaglialatela/Robotics_CV_project"},
                    {svg: <Youtube />, href: "https://youtu.be/cay1oBsF7R0"}
                ]}
                summary={"Hand Me An Arm is a term project combining Robotics and Computer Vision to create 3-dimensional structures from 2-dimensional template images."}
                skills={[ "Python", "OpenCV", "Ubuntu", "Git" ]}
                description={[
                    "Hand Me An Arm is a term project combining Robotics and Computer Vision to create 3-dimensional structures from 2-dimensional template images.",
                    "The system consists of a 6-DoF TM5-900 robotic arm, with a camera mounted onto its gripper, and a GUI for creating 2-dimensional template images.",
                    "Through Computer Vision, implemented using the OpenCV library, the system is able to detect the color, shape and orientation of a set of available building blocks. After providing a 2-dimensional template image as input, the system recreates a 3-dimensional copy of the template using the building blocks."
                ]}
            />
        </ProjectList>
    );
}

export default ProjectsSection;
