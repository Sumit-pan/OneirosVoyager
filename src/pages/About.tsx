// AboutPage.tsx
import { JSX } from 'react';
import '../styles/about.css'; // Adjust the path as necessary
import { FileText, Download } from 'lucide-react';
import AboutImage from "../assets/nav.jpeg";

// Sample resume PDF path - replace with your actual file path when deploying
const resumePath = "./assets/pdf.pdf"; // Adjust the path as necessary

interface SkillGroup {
  category: string;
  items: string[];
}

export default function About(): JSX.Element {
  const skills: SkillGroup[] = [
    { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Ruby on Rails'] },
    { category: 'Database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Figma', 'Adobe XD', 'VS Code'] }
  ];

  // Function to handle PDF viewing in new tab
  const viewResume = (): void => {
    window.open(resumePath, '_blank');
  };

  // Function to handle PDF download
  const downloadResume = (): void => {
    // Create an anchor element and set the href to the file
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = "Your_Name_Resume.pdf"; // The name the file will be downloaded as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="about-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">About Me</h1>
          <div className="title-underline"></div>
        </div>

        {/* Personal Info Section */}
        <section className="about-section">
          <div className="about-grid">
            <div className="about-image-container">
              <img src={AboutImage} alt="Profile" className="about-image" />
            </div>
            <div className="about-content">
              <h2 className="section-title">Who I Am</h2>
              <p className="about-text">
                I'm a passionate full-stack developer with expertise in building modern web applications. 
                With over 2 years of experience, I've worked on a variety of projects 
                from small business websites to complex enterprise applications.
              </p>
              <p className="about-text">
                My approach combines clean code practices with user-centered design principles to create 
                solutions that are both technically sound and intuitive to use.
              </p>
              <div className="personal-info">
                <div className="info-item">
                  <span className="info-label">Name:</span>
                  <span className="info-value">Sumit Pandey</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Email:</span>
                  <span className="info-value">pandey.sum123@gmail.com</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Location:</span>
                  <span className="info-value">Long Beach, California, USA</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Availability:</span>
                  <span className="info-value">Open to opportunities</span>
                </div>
              </div>
              <div className="resume-download">
                <button onClick={viewResume} className="button primary">
                  <FileText size={18} />
                  <span>View Resume</span>
                </button>
                <button onClick={downloadResume} className="button secondary">
                  <Download size={18} />
                  <span>Download CV</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* PDF Embed Section - Shows on larger screens */}
        <section className="resume-preview-section">
          <h2 className="section-title">Resume Preview</h2>
          <div className="resume-preview-container">
            <object
              data={resumePath}
              type="application/pdf"
              className="resume-preview"
            >
              <div className="fallback-message">
                <p>Your browser doesn't support PDF embedding or the file couldn't be loaded.</p>
                <button onClick={downloadResume} className="button primary">
                  <Download size={18} />
                  <span>Download Instead</span>
                </button>
              </div>
            </object>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3 className="category-title">{skillGroup.category}</h3>
                <div className="skills-list">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill-item">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="time-period">Oct,2022 - June,2026</div>
                <h3 className="position">Bachelor's Degree in Information Technology</h3>
                <p className="company">Westcliff University</p>
                <p className="description">
                  Cybersecurity, game development, web development, algorithms, and data structures.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="time-period">Feb,2023 - Aug,2023</div>
                <h3 className="position">Full Stack Developer (Internship)</h3>
                <p className="company">Sunai Ltd.</p>
                <p className="description">
                  Developed and maintained multiple client websites and applications.
                  Collaborated with design and marketing teams to deliver complete solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}