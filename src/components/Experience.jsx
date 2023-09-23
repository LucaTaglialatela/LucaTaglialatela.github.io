import HLine from "./utils/HLine";
import SkillsList from "./utils/SkillsList";


function Experience(props) {
    return (
        <div style={{ marginTop: "2.4rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", lineHeight: "3.6rem" }}>
                <div style={{ fontSize: "var(--text-l)", fontWeight: "700" }}>
                    {props.company}
                </div>
                <div style={{ fontSize: "var(--text-m)" }}>
                    {props.duration}
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "var(--text-m)", lineHeight: "3.6rem"  }}>
                <div style={{ fontWeight: "700", color: "var(--brand)" }}>
                    {props.jobTitle}
                </div>
                <div>
                    {props.location}
                </div>
            </div>
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
