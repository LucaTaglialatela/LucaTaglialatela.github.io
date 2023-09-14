import Experience from "./Experience"

function ExperienceSection() {
    return (
        <div>
            <Experience
                company={"National Taiwan University"}
                jobTitle={"Research Assistant"}
                duration={"02/2022 - 08/2023"}
                location={"Taipei, Taiwan"}
                description={"Led multiple research projects, with teams of up to ten, resulting in publications in top tier conferences."}
            />
            <Experience
                company={"MetHer"}
                jobTitle={"Full-Stack Engineering Intern"}
                duration={"06/2022 - 08/2022"}
                location={"Taipei, Taiwan"}
                description={"Developed React components to automate data flows and improve the company website's membership system. Collaborated closely with front- and backend teams."}
            />
            <Experience
                company={"Vrije Universiteit Amsterdam"}
                jobTitle={"Teaching Assistant"}
                duration={"09/2019 - 06/2021"}
                location={"Amsterdam, The Netherlands"}
                description={"Taught seminar-style classes and assisted students during practical sessions."}
            />
        </div>
    );
}

export default ExperienceSection;
