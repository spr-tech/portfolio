import "./css/EducationAndSkills.css";

const EducationAndSkills = () => {
  const skillsData = [
    {
      title: "Programming Languages",
      items: ["TypeScript", "JavaScript"],
    },
    {
      title: "Frameworks & Libraries",
      items: ["React", "Bootstrap", "Tailwind", "Next.js", "Vite"],
    },
    {
      title: "Software & Tools",
      items: ["Jira", "GitHub"],
    },
    {
      title: "Methodologies",
      items: ["Code Review", "Remote Collaboration"],
    },
    {
      title: "Operating Systems",
      items: ["Mac/iOS", "Windows"],
    },
  ];

  const softSkillsData = [
    {
      title: "Leadership & Mentorship",
      items: [
        "Conflict Resolution",
        "Code Review",
        "Training and Development",
        "Mentoring",
        "Empathy and Patience",
      ],
    },
    {
      title: "Execution & Strategy",
      items: [
        "Practical Problem Solving",
        "Prioritization",
        "Iterative Development",
        "User-Focused Thinking",
        "Resourcefulness",
      ],
    },
    {
      title: "Adaptability",
      items: [
        "Flexibility",
        "Growth Mindset",
        "User-Focused Thinking",
        "Remote Team Collaboration",
      ],
    },
  ];

  return (
    <div>
      {/* Technical Skills */}
      <section className="skills">
        <h4>Technical Skills</h4>
        <hr />

        {skillsData.map((skill, index) => (
          <div className="other-skill-wrapper-outer" key={index}>
            <h5>{skill.title}</h5>
            <div className="other-skill">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Soft Skills */}
      <section className="skills">
        <h4>Soft Skills</h4>
        <hr />

        {softSkillsData.map((skill, index) => (
          <div className="other-skill-wrapper-outer" key={index}>
            <h5>{skill.title}</h5>
            <div className="other-skill">
              {skill.items.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default EducationAndSkills;
