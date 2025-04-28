import { Github, Linkedin} from 'lucide-react';
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      {/* Social Links */}
      <div className="footer-content">
        <h2>Connect with Me</h2>
        <p>Feel free to reach out through any of the platforms below.</p>

        <div className="social-section">
          <a href="https://github.com/Sumit-pan" className="social-link">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/sumit-pandeyy" className="social-link">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}