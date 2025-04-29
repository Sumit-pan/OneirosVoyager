// ProjectsPage.jsx
import { useState } from 'react';
import '../styles/project.css';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'Pariwartan',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A community project aimed at developing an education system for students in a rural area. The project leverages basic Node to create an accessible and user-friendly platform, enhancing educational opportunities and resources for the community. The project was aimed to target the issues the students, teachers and the school faced.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">My Projects</h1>
          <div className="title-underline"></div>
        </div>

        {/* Filter Categories */}
        <div className="filter-container">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button 
            className={`filter-button ${filter === 'app' ? 'active' : ''}`}
            onClick={() => setFilter('app')}
          >
            App
          </button>
          <button 
            className={`filter-button ${filter === 'design' ? 'active' : ''}`}
            onClick={() => setFilter('design')}
          >
            Design
          </button>
          <button 
            className={`filter-button ${filter === 'data' ? 'active' : ''}`}
            onClick={() => setFilter('data')}
          >
            Data
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoLink} className="project-link">
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                    <a href={project.codeLink} className="project-link">
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}