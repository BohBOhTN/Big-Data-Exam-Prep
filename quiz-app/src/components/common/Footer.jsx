import { Github } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          Made By <strong>BohBOhTN</strong> © {new Date().getFullYear()}
        </p>
        <a 
          href="https://github.com/BohBOhTN/Big-Data-Exam-Prep" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          <Github size={20} />
          <span>Contribuer sur GitHub</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
