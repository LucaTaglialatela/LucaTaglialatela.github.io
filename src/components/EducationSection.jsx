import Experience from "./Experience"

function EducationSection() {
    return (
        <div>
            <Experience
                company={"National Taiwan University"}
                jobTitle={"MSc Computer Science and Information Engineering (GPA: 4.1/4.3)"}
                duration={"09/2021 - 08/2023"}
                location={"Taipei, Taiwan"}
                description={<>
                    <span style={{ fontWeight: "200", color: "var(--brand)" }}>&#62;_</span> Conducted research in the <a href="https://mikechen.com">Human-Computer Interaction laboratory</a> under advisorship of Mike Y. Chen, resulting in multiple publications at top tier conferences.<br/>
                    <span style={{ fontWeight: "200", color: "var(--brand)" }}>&#62;_</span> Attended <a href="https://s2023.siggraph.org">SIGGRAPH 2023</a> from August 6-11 in Los Angeles, USA to present our award winning project <a href="https://s2023.siggraph.org/presentation/?id=gensub_141&sess=sess205">Alice in Gravityland</a>.
                </>}
            />
            <Experience
                company={"Vrije Universiteit Amsterdam"}
                jobTitle={"BSc Computer Science (GPA: 9.1/10.0, Rank: 3/180)"}
                duration={"09/2018 - 07/2021"}
                location={"Amsterdam, The Netherlands"}
                description={<>
                    <span style={{ fontWeight: "200", color: "var(--brand)" }}>&#62;_</span> Participated in and helped organize the <a href="https://nxpcup.nxp.com">EMEA NXP Cup</a> (2020 and 2021) at the Vrije Universiteit.<br/>
                    <span style={{ fontWeight: "200", color: "var(--brand)" }}>&#62;_</span> Placed first in the Amsterdam Algorithm Programming Junior Event.
                </>}
            />
        </div>
    );
}

export default EducationSection;
