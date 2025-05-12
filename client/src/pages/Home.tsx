// HomePage.jsx
import '../styles/Homepage.scss';
import  profileImage  from "../assets/s.jpeg";

export default function Home() {
  return (
    <div className="homepage">
      {/* Noise Background */}
<div className="bg"> </div>

      {/* Hero Section */}
      <div className="container">
        <div className="hero-section">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Hi, I'm <span className="highlight">Sumit Pandey</span>
              </h1>
              <h2 className="hero-subtitle">
                Full Stack Developer & Designer
              </h2>
              <p className="hero-text">
                I build responsive web applications with modern technologies.
                Passionate about creating beautiful user experiences and solving real-world problems with code.
              </p>
              <div className="hero-buttons">
                <a href="/projects" className="button primary">
                  View Projects
                </a>
                <a href="/contact" className="button secondary">
                  Contact Me
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="profile-image-container">
              <div className="profile-image-wrapper">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <p className="stat-number">2+</p>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">10+</p>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">20+</p>
              <p className="stat-label">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}