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
            Hello world! My name is Mazin Mukhtar and I am an Electrical and Computer Engineering student at the University of Toronto with a background in football scouting. My passion lies in intersection of technology and sports. I am actively seeking research opportunities in AI to explore its applications in engineering and sports. With a solid educational foundation, I possess robust problem-solving skills that I apply in my studies and practical endeavours. I am eager to engage with like-minded individuals and professionals who share my interests in the convergence of sports and engineering.
          </p>
        </div>
        <div className="education">
          <h1>Education</h1>
          <h2>University of Toronto - BASc in Electrical Engineering (2024-2029)</h2>

          <button
            className="coursework-toggle"
            onClick={() => setShowCoursework(prev => !prev)}
          >
            {showCoursework ? 'Hide Coursework' : 'Show Coursework'}
          </button>

          {showCoursework && (
            <div className="coursework">
              <h3>Coursework</h3>
              <ul>
                <li>Calculus 1 (MAT186)</li>
                <li>Calculus 2 (MAT187)</li>
                <li>Linear Algebra (MAT188)</li>
                <li>Engineering Chemistry & Materials Science (APS110)</li>
                <li>Electrical Fundamentals (ECE110)</li>
                <li>Computer Fundamentals (APS105)</li>
                <li>Mechanics (CIV100)</li>
                <li>Dynamics (MIE100)</li>
                <li>Engineering Strategies & Practices 1 (APS111)</li>
                <li>Engineering Strategies & Practices 2 (APS112)</li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <section className="experience" id="experience">
        <h1>Experience</h1>
      </section>
    </div>
  );
}

export default App;