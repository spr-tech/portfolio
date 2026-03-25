import "./EducationAndSkills.css";

const EducationAndSkills = () => {
  return (
    <div>
      <div className="education">
        <h4>Education</h4>
        <hr></hr>
        <p>
          Bachelor of Science in Education (B.Sc. Ed.) in Business Education
        </p>
        <i>Oct 2023</i>
        <span>University of Ilorin, Kwara State, Nigeria</span>
      </div>

      <div className="skills">
        <h4>Technical Skills</h4>
        <hr></hr>
        <div className="skill-1">
          <h5>Programming Languages</h5>
          <span>TypeScript</span>
          <span>JavaScript</span>
        </div>

        <div className="other-skill">
          <h5>Frameworks & Libraries</h5>
          <span>React</span>
          <span>Bootstap</span>
          <span>Tailwind</span>
          <span>Next.js</span>
          <span>Vite</span>
        </div>

        <div className="other-skill">
          <h5>Software & Tools</h5>
          <span>Jira</span>
          <span>Github</span>
        </div>

        <div className="other-skill">
          <h5>Methodologies</h5>
          <span>Code Review</span>
          <span>Remote Collaboration</span>
        </div>

        <div className="other-skill">
          <h5>Operating Systems</h5>
          <span>Mac/iOS</span>
          <span>Windows</span>
        </div>
      </div>

      <h4>Soft skills</h4>
      <hr />
      <div className="skills">
        <div className="other-skill">
          <h5>Leadership & Mentorship</h5>
          <span>Conflict Resolution</span>
          <span>Code Review</span>
          <span>Training and Development</span>
          <span>Mentoring</span>
          <span>Empathy and Patience</span>
        </div>

        <div className="other-skill">
          <h5>Execution & Strategy</h5>
          <span>Practical Problem Solving</span>
          <span>Prioritization</span>
          <span>Iterative Development </span>
          <span>User-Focused Thinking</span>
          <span>Resourcefulness</span>
        </div>

        <div className="other-skill">
          <h5>Adaptability</h5>
          <span>Flexibility</span>
          <span>Growth Mindset</span>
          <span>User-Focused Thinking</span>
          <span>Remote Team Collaboration</span>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
