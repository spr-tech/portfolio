import "./css/Experience.css";

const NetlifyIcon = ({ size = 20, color = "rgb(150, 148, 148)" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Netlify</title>
    <path d="M7.529 1.246L6.641 2.134 5.304 3.471 3.967 4.808 3.079 5.696l.888.888L1.246 9.305l-.888.888.888.888 2.721 2.721 2.721 2.721.888.888.888-.888 2.721-2.721 2.721-2.721.888-.888-.888-.888 2.721-2.721.888-.888-.888-.888L14.695 3.079l-.888-.888-.888.888-2.721 2.721-2.721 2.721-.888.888-.888-.888 2.721-2.721.888-.888-.888-.888L7.529 1.246zM22.754 1.246l-.888.888-2.721 2.721-2.721 2.721-.888.888.888.888-2.721 2.721-.888.888.888.888 2.721 2.721 2.721 2.721.888.888.888-.888 2.721-2.721 2.721-2.721.888-.888-.888-.888 2.721-2.721.888-.888-.888-.888L22.754 1.246zM12.001 22.754l-.888-.888-2.721-2.721-2.721-2.721-.888-.888.888-.888-2.721-2.721-.888-.888.888-.888 2.721 2.721 2.721 2.721.888.888.888-.888 2.721-2.721 2.721-2.721.888-.888-.888-.888 2.721-2.721.888-.888-.888-.888L12.001 22.754z" />
  </svg>
);

const GitHubIcon = ({ size = 20, color = "rgb(150, 148, 148)" }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const Experience = () => {
  const workExperience = [
    {
      role: "Frontend Developer Intern",
      company: "RWA Inc | Development & Internship",
      period: "04/2026–Present",
      responsibilities: [
        "Undergoing onboarding and learning company development workflow",
        "Collaborating with the team to understand frontend architecture and best practices",
        "Preparing to contribute to responsive UI development using React",
        "Participating in training sessions and development discussions",
      ],
    },
    {
      role: "Frontend Developer Intern",
      company: "STX Technologies",
      period: "05/2025–11/2025",
      responsibilities: [
        "Developed reusable components for future projects",
        "Built and maintained dynamic frontend experiences using HTML, CSS, JavaScript, and React",
        "Collaborated with developers on design, development, and testing of programs",
        "Provided technical support for users experiencing issues with webpages or applications",
      ],
    },
  ];

  const projects = [
    {
      name: "Faraway App",
      live: "https://farawayapplication.netlify.app/",
      code: "https://github.com/spr-tech/react-far-away-app",
      description: [
        "Built an interactive travel list application to manage and organize trip items",
        "Implemented dynamic state management for adding, updating, and deleting items",
        "Designed a clean and responsive UI for seamless user interaction",
        "Utilized reusable React components to improve scalability and maintainability",
        "Applied conditional rendering to enhance user experience and feedback",
      ],
    },
    {
      name: "Bill Split App",
      live: "https://billspiltapp.netlify.app/",
      code: "https://github.com/spr-tech/Bill-split",
      description: [
        "Developed a bill-splitting application to calculate and manage shared expenses",
        "Implemented logic for tracking balances and splitting costs between users",
        "Managed application state to handle real-time updates and user inputs",
        "Designed reusable components for better code structure and efficiency",
        "Focused on intuitive UI to simplify financial interactions for users",
      ],
    },
  ];

  return (
    <div className="experience">
      <h4>Work Experience</h4>
      <hr />

      {workExperience.map((job, index) => (
        <div key={index} className="job">
          <p>
            <strong>{job.role}</strong>, {job.company} <i>{job.period}</i>
          </p>
          <ul>
            {job.responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}

      <h4>Selected Personal Projects</h4>
      <hr />

      {projects.map((project, index) => (
        <div key={index} className="project">
          <div className="project-header">
            <p>
              <strong>{project.name}</strong>
            </p>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <NetlifyIcon />
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </div>
          </div>
          <ul>
            {project.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
