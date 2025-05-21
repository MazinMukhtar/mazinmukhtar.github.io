import React, { useState } from 'react';
import './App.css';
import profileImage from './Picture.jpeg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface ExperienceDetail {
  text: string;
  url?: string;
  subtext?: string;
}

interface ExperienceItem {
  id: string;
  title: string;
  details: ExperienceDetail[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'journalism',
    title: 'Freelance Journalism (June 2023 - Present)',
    details: [
      { text: 'Guest Host on the Managing Madrid Podcast (Dec 2024)', url: 'https://www.youtube.com/watch?v=eYAY1CczULA', 
        subtext: 'Discussed Real Madrid\'s revitalized title race and the increasing margin of error in LaLiga.' },
      { text: 'Guest Host on the Managing Madrid Podcast (Oct 2024)', url: 'https://www.youtube.com/watch?v=fWrc-KniYBc&ab_channel=ManagingMadrid',
        subtext: 'A continuation of the discussion from August 2024—discussed Madrid\'s struggle to adapt to Kylian Mbappé and the post Toni-Kroos era.'
      },
      { text: 'Guest Host on the Managing Madrid Podcast (Aug 2024)', url: 'https://www.youtube.com/watch?time_continue=2&v=uTtx4c63lAE&embeds_referring_euri=https%3A%2F%2Fmazinmukhtar.notion.site%2F&source_ve_path=MjM4NTE',
        subtext: 'Discussed the nuances of Real Madrid\'s evolving dynamics with the addition of Kylian Mbappé and the departure of Toni Kroos.'
       },
      { text: 'Guest Writer for MadridXtra (June 2023)', url: 'https://gegenpress.substack.com/p/jude-bellingham-scouting-report',
        subtext: 'Analyzed Jude Bellingham\'s profile and potential fit for Real Madrid.'
      }
    ]
  },
  {
    id: 'infrastructure-dev',
    title: 'Infrastructure Developer @ UTMIST (Oct 2024 - April 2024)',
    details: [
      { text: 'Member of the Machine Learning Software Research Team'},
      { text: 'Conducted preliminary research on semantic clone detection using code analysis techniques'}
    ]
  },
  {
    id: 'high-school-tutor',
    title: 'High School Tutor @ TDSB (Sept 2023 - May 2024)',
    details: [
      { text: 'Supported students in developing effective study strategies for tests and assignments'}, 
      { text: 'Tutored primarily in mathematics and physics, emphasizing conceptual understanding and problem-solving'}
    ]
  },
  {
    id: 'video-scout',
    title: 'Remote Video Scout @ Dinamo Tbilisi (Aug 2023 - Nov 2023)',
    details: [
      { text: 'Managed and maintained a database of over 100 players scouted' }, 
      { text: 'Contributed to expanding the club\'s player database' },
      { text: 'Demonstrated analytical skills in evaluating player performance through video analysis'},
      { text: 'Contact via email for sample work.'}
    ]
  },
  {
    id: 'web-designer',
    title: 'Web Designer @ BrandEQ (Jul 2023 - Aug 2023)',
    details: [
      { text: 'Demonstrated proficient use of WordPress and front-end languages' },
      { text: 'Showcased the ability to work with clients in a timely manner' }
    ]
  }
];

const writings = [
  { title: 'Jude Bellingham — Scouting Report', url: 'https://gegenpress.substack.com/p/jude-bellingham-scouting-report' },
  { title: 'The anatomy of a dribbler — Vinicius Junior', url: 'https://mazinmukhtar.beehiiv.com/p/anatomy-dribbler-vincius-jnior' },
  { title: 'Dominik Szoboszlai’s elite but lacking ball-striking', url: 'https://mazinmukhtar.beehiiv.com/p/dominik-szoboszlais-elite-lacking-ballstriking' }, 
  { title: 'Part 1: How to Press in a 4-2-3-1 vs 4+2 Build-up', url: 'https://gegenpress.substack.com/p/part-1-how-to-press-in-a-4-2-3-142'}, 
  { title: 'Football is about progression', url: 'https://mazinmukhtar.substack.com/p/football-is-about-progression'}
];

const openPR = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
};

const openCDS = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
};

const openModelling = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
}

// Footer component
const Footer: React.FC = () => (
    <footer className="site-footer" id="contact">
      <h3>Mazin Mukhtar</h3>
      <div className="social-links">
        <a href="https://github.com/MazinMukhtar" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/mazin-mukhtar-120227292/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:mazin.abdelgalil@gmail.com">Email</a>
        <a href="https://x.com/MazinMuk" target="_blank" rel="noopener noreferrer">X (Formely Twitter)</a>
      </div>
      <p>Site last updated on May 20, 2025</p>
    </footer>
)

// HomePage component
const HomePage: React.FC = () => {
  const [showCoursework, setShowCoursework] = useState(false);
  const [visibleExperiences, setVisibleExperiences] = useState<Record<string, boolean>>({});

  const toggleExperience = (id: string) => {
    setVisibleExperiences(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="app">
      <title>Mazin Mukhtar</title>

      <main className="home-page" id="home">
        <section className="about-me-education">
          <img src={profileImage} className="profile-image" alt="profile" />
          <div className="about-me">
            <h1>Hello World!</h1>
            <p>
              I’m Mazin Mukhtar, an Electrical and Computer Engineering student at the University of Toronto with experience in the sports industry. I’m passionate about the intersection of technology with both sports and education. I am actively seeking research opportunities that use software to improve accessibility to learning environments and/or sports analytics. I’m always looking to connect with like-minded individuals and professionals who share these interests. 
            </p>
          </div>
          <div className="education">
            <h1>Education</h1>
            <p><strong>University of Toronto</strong> - BASc in Electrical Engineering (2024-2029)</p>
          </div>  
        </section>

        <section className="skills" id="skills"> 

        </section>

          <section className="experience-pair" id="experience-past-writings">
            <div className="experience" id="experience">
              <h1>Experience</h1>
              {experiences.map(item => (
                <div key={item.id} className="experience-item">
                  <button className="experience-toggle" onClick={() => toggleExperience(item.id)}>
                    {item.title}
                  </button>
                  {visibleExperiences[item.id] && (
                    <ul className="experience-detail">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="mb-2">
                          {detail.url ? (
                            <a href={detail.url} target="_blank" rel="noopener noreferrer" className="font-medium text-blue-500 hover:underline">
                              {detail.text}
                            </a>
                          ) : (
                            <span className="font-medium">{detail.text}</span>
                          )}
                          {detail.subtext && (
                            <p className="text-sm text-gray-500 mt-1 ml-2">{detail.subtext}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          <div className="past-writings" id="past-writings">
            <h1>Past Writings</h1>
            <ul>
              {writings.map((w, i) => (
                <li key={i}>
                  <a href={w.url} target="_blank" rel="noopener noreferrer">{w.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );

}

// ProjectsPage component
const ProjectsPage: React.FC = () => (

  <div className="app"> 
    <title>Mazin Mukhtar — Projects</title>

    <main className="projects-page">
      <section className="APS112">
        <h1>Managing the Risks of Lithium-Ion Micro-Mobility Devices Within the Shelter System</h1>
        <p>
          <strong>Problem Description</strong>: This project was worked on with the City of Toronto as part of the <a href="https://www.engineering.utoronto.ca/engineering-strategies-practice/" target="_blank" rel="noopener noreferrer">University of Toronto's Engineering Strategies and Practice program</a>. The goal of the project was to identify the risks associated with lithium-ion batteries in micro-mobility devices within the Toronto Shelter System and mitigate them.
        </p>
        <p>
          <strong>Solution</strong>: Working on...
        </p>
        <h2>Project Documents</h2>
        <p>
          <button className="aps112-doc" onClick={openPR}>Project Requirements</button>
        </p>
        <p>
          <button className="aps112-doc" onClick={openCDS}>Conceptual Design Specifications</button>
        </p>
        <p>
          <button className="aps112-doc" onClick={openModelling}>Modelling</button>
        </p>
      </section>
    </main>
  </div>
);

function App() {
  return (
    <Router>
      <div className="app">
        <header className="site-header">
          <div className="site-header__branding">
            <img src={profileImage} alt="Profile" className="header-profile-image" />
            <span className="site-header__logo">Mazin Mukhtar</span>
          </div>
          <nav className="site-header__nav">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/featured-writings">Featured Writings</Link>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          {/* Add route for Featured Writings if needed */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;