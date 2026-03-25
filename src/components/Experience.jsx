import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience">
      <h4>Work Experience</h4>
      <hr></hr>
      <div>
        <p>
          Frontend developer intern, Afrimit Digitech <i>02/2024–03/2025</i>
        </p>
        <ul>
          <li>
            Developed and maintained user-facing websites using HTML, CSS,
            JavaScript, and ReactJS.
          </li>
          <li>
            Modified existing software to correct errors, adapt to new hardware
            or upgrade interfaces.
          </li>
          <li>
            Collaborated with other software developers on design, development
            and testing of programs
          </li>
          <li>
            Created UI components with reusable codes for a better user
            experience.
          </li>
        </ul>
      </div>

      <div className="experience">
        <p>
          Front End Developer Intern, STX Technologies <i>06/2025–present</i>
        </p>
        <ul>
          <li>
            Developed reusable components for future use in other projects.
          </li>
          <li>
            Created and maintained dynamic frontend experiences using HTML, CSS,
            JavaScript, and React
          </li>
          <li>
            Collaborated with other software developers on design, development
            and testing of programs
          </li>
          <li>
            Provided technical support for users experiencing issues with
            webpages or applications.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
