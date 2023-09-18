import Experience from "./Experience"

function ExperienceSection() {
    return (
        <div>
            <Experience
                company={"National Taiwan University"}
                jobTitle={"Research Assistant"}
                duration={"02/2022 — 08/2023"}
                location={"Taipei, Taiwan"}
                description={"Led multiple research projects, with teams of up to ten, resulting in publications in top tier conferences."}
                skills={[ "Python", "JavaScript", "Unity", "C#", "Arduino", "G-Code", "AutoCAD", "Git", "Slack", "Trello" ]}
            />
            <Experience
                company={"MetHer"}
                jobTitle={"Full-Stack Engineering Intern"}
                duration={"06/2022 — 08/2022"}
                location={"Taipei, Taiwan"}
                description={"Developed React components to automate data flows and improve the company website's membership system. Collaborated closely with front- and backend teams."}
                skills={[ "JavaScript", "HTML", "CSS", "React", "Redux", "SQL", "Node.js", "Git", "Notion" ]}
            />
            <Experience
                company={"Vrije Universiteit Amsterdam"}
                jobTitle={"Teaching Assistant"}
                duration={"09/2019 — 06/2021"}
                location={"Amsterdam, The Netherlands"}
                description={"Taught seminar-style classes and assisted students during practical sessions. Courses taught include:"}
                skills={["Advanced Programming", "Data Structures and Algorithms", "Networks and Graphs (x2)", "Logic and Sets (x2)", "web Technology (x2)", "Computational Thinking", "Pervasive Computing (x2)", "and some more..."]}
            />
        </div>
    );
}

export default ExperienceSection;
