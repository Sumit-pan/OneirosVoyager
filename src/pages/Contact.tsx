import { useState, ChangeEvent, FormEvent } from 'react';
import '../styles/contact.css';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the form data to a server
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="connect-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Connect With Me</h1>
          <div className="title-underline"></div>
        </div>

        <div className="connect-grid">
          {/* Contact Information */}
          <div className="contact-info">
            <h2 className="section-title">Get In Touch</h2>
            <p className="contact-text">
              I'm always open to new opportunities, collaborations, or just a friendly chat. 
              Feel free to reach out through any of the channels below.
            </p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">Email</h3>
                  <p className="info-detail">pandey.sum123@gmail.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <Phone size={20} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">Phone</h3>
                  <p className="info-detail">+1 (657) 616-4630</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div className="info-content">
                  <h3 className="info-title">Location</h3>
                  <p className="info-detail">Long Beach, California, USA</p>
                </div>
              </div>
            </div>
            
            <div className="social-links">
              <h3 className="social-title">Find Me On</h3>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <Linkedin size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Github size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-icon">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 className="section-title">Send Me A Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your Message"
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="form-button">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
