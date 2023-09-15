import Experience from "./Experience"

function EducationSection() {
    const bullet = <span style={{ fontWeight: "200", color: "var(--brand)" }}>&#62;_</span>;

    return (
        <div>
            <Experience
                company={"National Taiwan University"}
                jobTitle={"MSc Computer Science and Information Engineering (GPA: 4.1/4.3)"}
                duration={"09/2021 — 08/2023"}
                location={"Taipei, Taiwan"}
                description={<>
                    {bullet} Conducted research in the <a href="https://mikechen.com">Human-Computer Interaction laboratory</a>, under advisorship of Mike Y. Chen, resulting in multiple publications at top tier conferences.<br/>
                    {bullet} Awarded the <span style={{ fontStyle: "italic" }}>Outstanding International Graduate Student Scholarship</span> by the College of Electrical Engineering and Computer Science.<br/>
                    {bullet} Attended <a href="https://s2023.siggraph.org">SIGGRAPH 2023</a> from August 6-11 in Los Angeles, USA to present our award winning project <a href="https://s2023.siggraph.org/presentation/?id=gensub_141&sess=sess205">Alice in Gravityland</a>.
                </>}
                skills={[]}
            />
            <Experience
                company={"Vrije Universiteit Amsterdam"}
                jobTitle={"BSc Computer Science (GPA: 9.1/10.0, Rank: 3/180)"}
                duration={"09/2018 — 07/2021"}
                location={"Amsterdam, The Netherlands"}
                description={<>
                    {bullet} Participated in and helped organize the <a href="https://nxpcup.nxp.com">EMEA NXP Cup</a> (2020 and 2021) at the Vrije Universiteit.<br/>
                    {bullet} Placed first in the Amsterdam Algorithm Programming Junior Event.
                </>}
                skills={[]}
            />
        </div>
    );
}

export default EducationSection;
