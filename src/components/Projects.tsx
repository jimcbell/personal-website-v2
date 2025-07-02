export default function Projects() {
  return (
    <>
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <div className="project-image">🗑️</div>
          <div className="project-content">
            <h3 className="project-title">
              <a
                href="https://www.youtube.com/watch?v=NY3DGYBHPmM"
                target="_blank"
              >
                Gmail Cleaner 🔗
              </a>
            </h3>
            <p className="project-desc">
              Gmail Cleaner is a utility application allowing users to connect
              their gmail accounts to easily identify, remove, and unsubscribe
              from unwanted spam emails.
            </p>
            <div className="project-tags">
              <span className="tag">.NET</span>
              <span className="tag">OAuth</span>
              <span className="tag">SQL Server</span>
              <span className="tag">SMTP</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">🎙️</div>
          <div className="project-content">
            <h3 className="project-title">
              <a
                href="https://github.com/jimcbell/open-mic-finder"
                target="_blank"
              >
                Open Mic Finder 🔗
              </a>
            </h3>
            <p className="project-desc">
              Open Mic Finder helps you discover and review open mic events in
              your area, connecting performers and music lovers with local
              venues and upcoming shows.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">Node.js</span>
              <span className="tag">MongoDb</span>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">🗃️</div>
          <div className="project-content">
            <h3 className="project-title">
              <a href="https://www.filefreak.io" target="_blank">
                FileFreak.io 🔗
              </a>
            </h3>
            <p className="project-desc">
              A secure, scalable, web application allowing users to store and
              retrieve files in the cloud. Premium tier subscriptions available
              through Stripe integration.
            </p>
            <div className="project-tags">
              <span className="tag">React</span>
              <span className="tag">NodeJs</span>
              <span className="tag">SQL Server</span>
              <span className="tag">Docker</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
