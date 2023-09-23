import styled from "styled-components";
import HLine from "./utils/HLine";
import SkillsList from "./utils/SkillsList";

const ResponsiveHeader = styled.div`
    display: flex;
    justify-content: space-between;
    line-height: 3.6rem;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

function Experience(props) {
    return (
        <div style={{ marginTop: "2.4rem" }}>
            <ResponsiveHeader>
                <div style={{ fontSize: "var(--text-l)", fontWeight: "700"}}>
                    {props.company}
                </div>
                <div style={{ fontSize: "var(--text-m)" }}>
                    {props.duration}
                </div>
            </ResponsiveHeader>
            <ResponsiveHeader style={{ fontSize: "var(--text-m)"  }}>
                <div style={{ fontWeight: "700", color: "var(--brand)" }}>
                    {props.jobTitle}
                </div>
                <div>
                    {props.location}
                </div>
            </ResponsiveHeader>
            <div style={{ fontSize: "var(--text-m)", fontWeight: "200" }}>
                {props.description}
            </div>
            <br/>
            <SkillsList skills={props.skills}/>
            <div style={{ marginTop: "2.4rem", opacity: ".3" }}>
                <HLine />
            </div>
        </div>
    );
}

export default Experience;
