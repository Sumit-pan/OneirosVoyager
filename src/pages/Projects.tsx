// ProjectsPage.jsx
import { useState } from 'react';
import '../styles/project.css';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A full-featured e-commerce platform built with React, Node.js, and MongoDB. Includes user authentication, product management, shopping cart, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'app',
      image: '/api/placeholder/400/300',
      description: 'A task management application with drag-and-drop interface. Features include task categorization, due dates, and collaboration tools.',
      technologies: ['Vue.js', 'Firebase', 'Vuex', 'SCSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      category: 'web',
      image: '/api/placeholder/400/300',
      description: 'A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses OpenWeatherMap API.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'API Integration'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Recipe Finder Mobile App',
      category: 'app',
      image: '/api/placeholder/400/300',
      description: 'A mobile application that helps users find recipes based on ingredients they have. Includes filtering options and favorites functionality.',
      technologies: ['React Native', 'Redux', 'Firebase'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Company Website Redesign',
      category: 'design',
      image: '/api/placeholder/400/300',
      description: 'Complete redesign of a company website focusing on improved user experience, accessibility, and modern design principles.',
      technologies: ['Figma', 'HTML5', 'CSS3', 'JavaScript'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      category: 'data',
      image: '/api/placeholder/400/300',
      description: 'An interactive dashboard for visualizing complex data sets. Features include dynamic charts, filtering, and exportable reports.',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
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