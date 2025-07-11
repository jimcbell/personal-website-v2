import "../styles/About.css";
export default function About() {
  return (
    <>
      <div className="profile-mockup"></div>
      <div className="about-content">
        <h2>About Me</h2>
        <p className="about-text">
          I'm a passionate full-stack developer with 5+ years of experience
          creating innovative digital solutions. I specialize in modern web
          technologies and have a keen eye for design.
        </p>
        <p className="about-text">
          When I'm not coding, I enjoy staying active through recreational sports leagues and cycling,
          exploring the city on foot, or relaxing with a good book or game of chess.
        </p>
        <a className="about-text chess-link" target="_blank" href="https://link.chess.com/friend/rrPTQn">
          Add me on Chess.com ♟️
        </a>
      </div>
    </>
  );
}
