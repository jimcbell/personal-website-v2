export default function Skills() {
  return (
    <>
      <h2 className="section-title">My Expertise</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <span className="skill-icon">⚛️</span>
          <h3 className="skill-title">Frontend Development</h3>
          <p className="skill-desc">
            React, Angular, TypeScript, and modern CSS frameworks for responsive
            web applications
          </p>
          <div className="skill-card-content">
            <div className="dropdown-title">Technical Skills</div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>React</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "90%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>TypeScript</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "85%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>CSS/SCSS</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "95%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>Angular</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "75%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <span className="skill-icon">🛠️</span>
          <h3 className="skill-title">Backend Development</h3>
          <p className="skill-desc">
            Node.js, .NET, databases, and API development for scalable server
            solutions
          </p>
          <div className="skill-card-content">
            <div className="dropdown-title">Backend Skills</div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>.NET / C#</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "95%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>Node.js</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "90%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>SQL Server</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "90%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>MongoDb</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "80%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="skill-card">
          <span className="skill-icon">☁️</span>
          <h3 className="skill-title">Cloud & DevOps</h3>
          <p className="skill-desc">
            Azure, AWS, Docker, CI/CD pipelines, and modern deployment
            strategies
          </p>
          <div className="skill-card-content">
            <div className="dropdown-title">Cloud & DevOps Skills</div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>Azure</span>
                <span className="skill-percentage">95%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "95%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>Docker</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "85%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>AWS</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "70%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
            <div className="skill-bar-item">
              <div className="skill-name">
                <span>CI/CD Scripting</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{ "--skill-width": "75%" } as React.CSSProperties}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
