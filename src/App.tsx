import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import profileImage from './Picture.jpeg';

function App() {
  const [showCoursework, setShowCoursework] = useState(false);

  return (
    <div className="app">
      <header className="site-header"> 
        <div className="site-header__branding">
          <img src={profileImage} alt="Profile" className="header-profile-image" />
          <span className="site-header__logo">Mazin Mukhtar</span>
        </div>
        <nav className="site-header__nav">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#featured-writings">Featured Writings</a>
          <a href="#resume">Resume</a>
        </nav>
      </header>

      <main className="home-page" id="home">
        <img src={profileImage} className="profile-image" alt="profile" />
        <div className="about-me">
          <h1>About Me</h1>
          <p>
              Hello world! I’m Mazin Mukhtar, an Electrical and Computer Engineering student at the University of Toronto with experience in the sports industry. I’m passionate about the intersection of technology with both sports and education. I am actively seeking research opportunities that use software to improve accessibility to learning environments and/or sports analytics. I’m always looking to connect with like-minded individuals and professionals who share these interests. 
          </p>
        </div>
        <div className="education">
          <h1>Education</h1>
          <h2>University of Toronto - BASc in Electrical Engineering (2024-2029)</h2>

          <button
            className="coursework-toggle"
            onClick={() => setShowCoursework(prev => !prev)}
          >
            {showCoursework ? 'Hide Courses' : 'Show Courses'}
          </button>

          {showCoursework && (
            <div className="coursework">
              <ul>
                <li>Calculus 1</li>
                <li>Calculus 2</li>
                <li>Linear Algebra</li>
                <li>Engineering Chemistry & Materials Science</li>
                <li>Electrical Fundamentals</li>
                <li>Computer Fundamentals</li>
                <li>Mechanics</li>
                <li>Dynamics</li>
                <li>Engineering Strategies & Practices 1</li>
                <li>Engineering Strategies & Practices 2</li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <footer className="site-footer" id="contact">
        <h3>Mazin Mukhtar</h3>
        <div className="social-links">
          <a href="https://github.com/MazinMukhtar" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/mazin-mukhtar-120227292/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:mazin.mukhtar@mail.utoronto.ca">Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;