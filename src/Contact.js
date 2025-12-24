import React, { useState } from 'react';
import './Contact.css';
import './App.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setNotification({
        type: 'error',
        heading: 'Please fill in all fields before submitting.',
      });
      return;
    }

    setNotification({
      type: 'success',
      heading: 'Thanks for the feedback!',
      name: formData.name,
      details: {
        email: formData.email,
        message: formData.message,
      },
    });

    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setNotification(null), 5000);
  };

  const handleCloseNotification = () => setNotification(null);

  return (
    <>
      
      <div className="background-section">
       
        {notification && (
          <div className={`notification-message ${notification.type}`}>
            <button className="close-btn" onClick={handleCloseNotification}>
              &times;
            </button>
            <p className="notification-heading">{notification.heading}</p>
            {notification.name && (
              <p className="notification-name">{notification.name}</p>
            )}
            {notification.details && (
              <div className="notification-details">
                <p>Email: {notification.details.email}</p>
                <p>Message: {notification.details.message}</p>
              </div>
            )}
          </div>
        )}

        <div className="contact-container">
          <div className="social-links-container">
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/amruta-kadam-6b3bbb312"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/KadamAmruta03"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/_amrutakadam?t=6lfeO5Ej6q9ZSJv0hT4vkQ&s=08"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="mailto:kadamamruta0555@gmail.com"
                aria-label="Email Me"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="contact-header">
            <h1 className="contact-title">Get in Touch</h1>
            <p className="contact-intro">
              If you have a project in mind, a question, or just want to say
              hello, feel free to reach out. I'd love to hear from you!
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        
      </div>
    </>
  );
};

export default Contact;

