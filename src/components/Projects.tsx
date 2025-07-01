export default function Projects() {
  return (
    <>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">🚀</div>
          <div className="project-content">
            <h3 className="project-title">E-Commerce Platform</h3>
            <p className="project-desc">
              A full-stack e-commerce solution with modern payment integration,
              real-time inventory, and advanced analytics dashboard.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDB</span>
              <span className="tag">Stripe</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">📱</div>
          <div className="project-content">
            <h3 className="project-title">Task Management App</h3>
            <p className="project-desc">
              A collaborative project management tool with real-time updates,
              team chat, and advanced project tracking features.
            </p>
            <div className="project-tags">
              <span className="tag">Vue.js</span>
              <span className="tag">Socket.io</span>
              <span className="tag">PostgreSQL</span>
              <span className="tag">Docker</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">🎯</div>
          <div className="project-content">
            <h3 className="project-title">Analytics Dashboard</h3>
            <p className="project-desc">
              A comprehensive business intelligence dashboard with interactive
              charts, real-time data visualization, and custom reporting.
            </p>
            <div className="project-tags">
              <span className="tag">D3.js</span>
              <span className="tag">Python</span>
              <span className="tag">FastAPI</span>
              <span className="tag">Redis</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
