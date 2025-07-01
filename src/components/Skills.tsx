export default function Skills() {
  return (
    <>
      <h2 className="section-title">My Expertise</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <span className="skill-icon">⚛️</span>
          <h3 className="skill-title">Frontend Development</h3>
          <p className="skill-desc">
            React, Vue.js, TypeScript, and modern CSS frameworks for responsive
            web applications
          </p>
        </div>
        <div className="skill-card">
          <span className="skill-icon">🛠️</span>
          <h3 className="skill-title">Backend Development</h3>
          <p className="skill-desc">
            Node.js, Python, databases, and API development for scalable server
            solutions
          </p>
        </div>
        <div className="skill-card">
          <span className="skill-icon">🎨</span>
          <h3 className="skill-title">UI/UX Design</h3>
          <p className="skill-desc">
            User-centered design, prototyping, and creating intuitive digital
            experiences
          </p>
        </div>
        <div className="skill-card">
          <span className="skill-icon">☁️</span>
          <h3 className="skill-title">Cloud & DevOps</h3>
          <p className="skill-desc">
            AWS, Docker, CI/CD pipelines, and modern deployment strategies
          </p>
        </div>
      </div>
    </>
  );
}
