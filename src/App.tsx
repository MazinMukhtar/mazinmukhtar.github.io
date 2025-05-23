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
    title: 'Infrastructure Developer @ UTMIST (Oct 2024 - April 2025)',
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
      { text: 'Designed client websites using WordPress and front-end technologies (HTML/CSS/JavaScript)' }
    ]
  }
];

const writings = [
  { title: 'Jude Bellingham — Scouting Report', url: 'https://gegenpress.substack.com/p/jude-bellingham-scouting-report' },
  { title: 'The anatomy of a dribbler — Vinícius Júnior', url: 'https://mazinmukhtar.beehiiv.com/p/anatomy-dribbler-vincius-jnior' },
  { title: 'Dominik Szoboszlai’s elite but lacking ball-striking', url: 'https://mazinmukhtar.beehiiv.com/p/dominik-szoboszlais-elite-lacking-ballstriking' }, 
  { title: 'Part 1: How to Press in a 4-2-3-1 vs 4+2 Build-up', url: 'https://gegenpress.substack.com/p/part-1-how-to-press-in-a-4-2-3-142'}, 
  { title: 'Football is about progression', url: 'https://mazinmukhtar.substack.com/p/football-is-about-progression'}
];

const openPR = () => {
    window.open('/PR.pdf', '_blank', 'noopener,noreferrer');
};

const openCDS = () => {
    window.open('/CDS.pdf', '_blank', 'noopener,noreferrer');
};

const openFP = () => {
    window.open('/FP.pdf', '_blank', 'noopener,noreferrer');
}

const openRepo = () => {
    window.open('https://github.com/MazinMukhtar/Reversi-Terminal-Game', '_blank', 'noopener,noreferrer');
};

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
      <p>Site last updated on May 21, 2025 (Site still a work in progress).</p>
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
          <strong>Project Description:</strong> This project was worked on with the City of Toronto as part of the <a href="https://www.engineering.utoronto.ca/engineering-strategies-practice/" target="_blank" rel="noopener noreferrer">University of Toronto's Engineering Strategies and Practice program</a>. The goal of the project was to identify the risks associated with lithium-ion batteries in micro-mobility devices within the Toronto Shelter System and mitigate them.
        </p>
        <p>
          <h3>Problem Definition</h3>
          <ul>
            <li>
              <strong>Problem Statement:</strong> The Toronto Shelter System has experienced over 10 lithium-ion fires in recent years due to modified micro-mobility devices. Lithium-ion battery-related fires may result from physical stress, improper battery installation, or high-temperature environments. A ban on ownership of these devices cannot be considered due to their value to the residents.
            </li>
            <li>
              <strong>Client Gap:</strong> Lack of a safe and secure storage system for lithium-ion batteries belonging to micro-mobility devices for residents in the Toronto Shelter System.
            </li>
            <li>
              <strong>Client Need:</strong> A design to safely and securely store lithium-ion batteries belonging to micro-mobility devices for residents in the Toronto Shelter System.
            </li>
            <li>
              <strong>Scope of Project:</strong> The project involved all locations within the Toronto Shelter System. However, the design presented was based on the shelter located at 545 Lake Shore Blvd West, Toronto, ON.
            </li>
          </ul>
        </p>
        <p>
          <h3>Project Requirements</h3>
          <ul>
            <li>
              <strong>Functions of Design</strong>
              <ul>
                <li>Store lithium-ion batteries belonging to micro-mobility devices</li>
                <li>Charge lithium-ion batteries belonging to micro-mobility devices</li>
                <li>Regulate temperature of stored lithium-ion batteries</li>
                <li>Secure and release lithium-ion battery to user</li>
              </ul>
            </li>
            <li>
              <strong>Objectives of Design</strong>
              <ul>
                <li>Maximize theft-resistance</li>
                <li>Maximize resistance to deformation</li>
                <li>Maximize withstandable temperature</li>
                <li>Minimize weight</li>
                <li>Minimize space per device</li>
              </ul>
            </li>
            <li>
              <strong>Constraints of Design</strong>
              <ul>
                <li>Must achieve an ANSI security grade of level 2</li>
                <li>Must withstand 0.47 kPA of hourly wind pressure</li>
                <li>Must withstand 1.2 kPa of snow load</li>
                <li>Must withstand 0.16 kPa of driving rain pressure</li>
                <li>Must comply with all relevant safety codes</li>
                <li>Must comply with the City of Toronto's land use laws</li>
                <li>Must contain the device at temperatures between -20℃ and 60℃</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          <h3>Proposed Conceputal Design</h3>
          <strong>Proposed Solution:</strong> The design we proposed to the client was a double-locker solution which allows for the storage of micro-mobility devices as well as the charging of the lithium-ion batteries. Each locker is 0.838 m wide, 1.27 m high and 1.92 meters long. The locker is made of 12 guage grade 316 stainless steel. Each locker is provided with a 5V outlet and secured with an ANSI grade 1 mortise lock. 
        </p>
        <p>
          <strong>Performance Against Objectives</strong>
          <table className="data-table">
            <thead>
              <tr>
                <th>Objective</th>
                <th>Performance</th>
                <th>Meets Goal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Maximize Theft-Resistance</td>
                <td>Achieved an ANSI security grade of level 1</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Maximize Resistance to Deformation</td>
                <td>Grade 316 stainless steel has a yield strength of 310 MPa</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Maximize Withstandable Temperature</td>
                <td>Grade 316 stainless steel has an ignition temperature of 1400℃</td>
                <td>Yes</td>
              </tr>
              <tr>
                <td>Minimize Weight</td>
                <td>Weight of locker is 292 kg</td>
                <td>No</td>
              </tr>
              <tr>
                <td>Minimize Space per Device</td>
                <td>Takes up 0.825 squared meters per device</td>
                <td>Yes</td>
              </tr>
            </tbody>
          </table>
        </p>
        <p>
          <h3>Personal Contributions</h3>
          <ul>
            <li>
              Project Requirements
              <ul>
                <li>
                  Constraints of Design
                  </li>
              </ul>  
            </li>
            <li>
              Conceptual Design Specifications
              <ul>
                <li>
                  Constraints of Design
                </li>
                <li>
                  Proposed Solution 3: Detachable Battery Drawer
                </li>
              </ul>
            </li>
            <li>
              Final Presentation
              <ul>
                <li>
                  Project Next Steps (Pages 13-14)
                </li>
                <li>
                  Project Takeaway (Page 15)
                </li>
              </ul>  
            </li>
          </ul>
        </p>
        <h3>Project Documents</h3>
        <p>
          <button className="aps112-doc" onClick={openPR}>Project Requirements</button>
        </p>
        <p>
          <button className="aps112-doc" onClick={openCDS}>Conceptual Design Specifications</button>
        </p>
        <p>
          <button className="aps112-doc" onClick={openFP}>Final Presentation</button>
        </p>
      </section>
      <section className="APS105">
        <h1>Reversi Terminal Game with Optimized Computer Opponent</h1>
        <p>
          <strong>Project Description:</strong> As part of an APS105 lab (University of Toronto — Computer Fundamentals), I developed a terminal Reversi game that allows a user to play against an optimized computer opponent.
        </p>
        <p>
          <strong>Solution:</strong> The project was developed using C and standard C libraries. The computer opponent was optimized using the Minimax algorithm with a depth 4—the lab restricted computer moves to taking a maximum of 1 second. The algorithm was further optimized by manually altering the weights of the board to put an emphasis on corner and edge pieces while also preventing the user from taking corner pieces.
        </p>
        <p>
          <strong>Project GitHub Repository</strong>
        </p>
        <p>
          <button className="aps105-repo" onClick={openRepo}>GitHub Repo</button>
        </p>
      </section>
    </main>
  </div>
);

// FeaturedWritingsPage component
const FeaturedWritingsPage: React.FC = () => ( 
  <div className="app">
    <title>Mazin Mukhtar — Featured Writings</title>
    <main className="featured-writings-page">
      <h1>The anatomy of a dribbler — Vinícius Júnior</h1>
      <p>
        Some weeks ago, within a private circle of mine, HP (X: <a href="https://x.com/MinimumWidth" target="_blank" rel="noopener noreferrer">@minimumwidth</a>) raised a point about Vini Jr.’s dribbling: he doesn’t need central access to buy time and space. This observation sparked my curiosity, and in the weeks since, I’ve embarked on an investigative journey to understand this further.
      </p>
      <p>
        This article builds on some ideas I shared in a previous tweet: <a href="https://x.com/MazinMuk/status/1814072285747184111" target="_blank" rel="noopener noreferrer">https://x.com/MazinMuk/status/1814072285747184111</a>
      </p>
      <p>
        In the tweet, I alluded to five key contributing factors (six in the tweet, which I have mitigated to five) to Vini Jr.’s lack of reliance on central access. Each of these factors will headline a part of the case study:
      </p>
      <ul>
        <li>Vini Jr.'s physical profile and frame.</li>
        <li>Vini Jr.'s touch variety.</li>
        <li>Vini Jr.'s touch selection.</li>
        <li>Vini Jr.'s dis-marking movements.</li>
        <li>Vini Jr.'s comfort in initiating duels or reacting to defending movements</li>
      </ul>
      <h3>Vini Jr.'s Physical Profile and Frame</h3>
      <ul>
        <li>
          <strong>Height & Weight:</strong> 176 cm & 73 kg
        </li>
        <li>
          <strong>Frame:</strong>
        </li> 
        <li>
          One aspect of Vini’s profile that aids his ball-carrying/dribbling qualities is his ability to accelerate/decelerate quickly. He is also able to adequately do this with a variety of stride lengths and types. This gives him an advantage that helps create separation within a(n approximately) five-meter radius. He can also generate power to accelerate from a standing start and while already in motion.
        </li>
        <li>Vini is strong at riding backside challenges due to his excellent arm use. This, along with his acceleration, gives him a large circle of control (adopted from <a href="https://www.ballerzbantz.com/" target="_blank" rel="noopener noreferrer">Baller Bantz</a> in an article by <a href="joel A. A. (@JoelAdejola) / X" target="_blank" rel="noopener noreferrer">Joel A. Adejola</a>). However, he can struggle with body-to-body contact from the back; he doesn’t possess the same glute strength as Messi or Hazard.
        </li>
        <li>
          His upper body, core strength, and balance allow him to ride shoulder-to-shoulder duels.
        </li>
        <li>
          Vini seamlessly shifts weight to and from both sides of his body. He can also transfer energy without altering his strides, effectively maintaining his momentum.
        </li>
        <li>
          One thing that stands out about Vini is how much of a straight-line athlete he is. For instance, Vini’s range of hip motion can let him down when changing his line of motion—he doesn’t possess the hyper-flexibility that wingers like Neymar and Ousmane Dembélé, which perhaps is why he’s developed this trait.
        </li>
        <li>
          Another notable thing about Vini is his comfort in exploding off his weaker (left) foot. Given that he plays on the left, which naturally means his initial explosion would funnel play toward the center due to footedness, having the ability to explode off both legs gives Vini direct access to the baseline without central access.
        </li>
      </ul>
      <h3>Vini Jr.'s Touch Variety</h3>
      <ul>
        <li>
          Vini’s variety in touches when dribbling in a straight line is outstanding. With his ability to maintain momentum and effectively ride backside and shoulder-to-shoulder challenges, Vini can approach attacking duels from various situations. He’s also able to create these situations effectively. Compared to a player who lacks variety in approaches and touches in attacking duels, it’s more challenging to force Vini into uncomfortable situations and to the inside.
        </li>
      </ul>
      <h3>Vini Jr.'s Touch Selection</h3>
      <ul>
        <li>
          One recurring theme with Vini’s dribbling in wide areas is his ability to leverage his touch selection to impose the threat of accessing the middle of the pitch. Vini’s most effective touch is the outside right, with his body oriented slightly toward the goal. Due to his constant improvements in striking the ball with the outside of the foot, he can now leverage the threat of accessing Rodrygo or Bellingham, making a depth run in the left half-space (presumably Mbappé in weeks to come) or a cross into the far post.
        </li>
        <li>
          The most impressive attribute of Vini’s touch selection is that he almost always picks the right touch. This is notable when he attacks the baseline—<a href="https://x.com/idoxvi/status/1811797180639797369" target="_blank" rel="noopener noreferrer">his second-leg performance vs Bayern showcases this</a>. While most wingers subconsciously force more comfortable touches, leaving the ball unprotected or making the final action challenging, Vini is adept at using his left foot at the baseline when required.
        </li>
        <li>
          Vini Jr’s step (adopted from <a href="https://x.com/ahmedmoall" target="_blank" rel="noopener noreferrer">Ahmed Moallin</a>) count is another aspect that aids him. Even when turning or accelerating/decelerating, Vini can maintain close steps to the ball when desired, hiding his intent and the direction he wants to shift toward.
        </li>
      </ul>
      <h3>Vini Jr.'s Dis-marking Movements</h3>
      <ul>
        <li>
          These are more of the situations that Madrid creates to platform Vini rather than his dis-marking movements; however, after re-watching some of Vini’s ball-carrying sequences throughout the 2023-2024 season, I have realized how much Madrid uses Rodrygo and Bellingham to engage the defence and push the line up. This, in turn, creates space (approximately 20-30 meters) for Vini to use his abovementioned advantages as a straight-line athlete and attack the byline.
        </li>
        <li>
          Though Vini often uses double movements (on an individual level) or counter-movements (on a group level), his physical advantages (explosiveness, ability to maintain and transfer momentum, ability to ride challenges) and intelligent attacking movements allow him to create separation before reception. This separation will enable him to build up enough momentum before attacking the last line, giving him an advantage in straight-line duels. It’s no coincidence that most of his dis-marking movements are double-/counter-movements—particularly if you also consider the threat he offers behind the last line. It should also be noted that Ancelotti’s work to platform Vini in these situations, particularly with the horizontal freedom given to Bellingham and Rodrygo, prevents the last line from engaging on Vini’s movements.
        </li>
      </ul>
      <h3>Vini Jr.'s Comfort in Initiating Duels or Reacting to Defending Movements</h3>
      <ul>
        <li>
          The variety of approaches in Vini’s attacking duels is astonishing. He’s comfortable approaching duels from either side with various touches, steps, and strides. This makes Vini’s attacking duels unpredictable, allowing him to dictate the duel. Another aspect of Vini’s approach is the angle at which he attacks defenders. He nearly always approaches a duel right down the middle, keeping both the inside and outside angle (and the potential to recycle play if required) while hiding his intent, enabling him to initiate the duel, if needed, late into the approach.
        </li>
        <li>
          Vini’s deceptiveness in stand-still situations, namely due to his physical profile (upright posture, flexible knees, ability to explode off both feet), allows him to generate separation even in stand-still situations. He also has the mental capacity to wait for defender movements if the opportunity to create separation doesn’t arise.
        </li>
        <li>
          One thing that gives Vini control over his approaches' unpredictability is his control over his upper body, particularly his posture. This control allows him to hide his intent even in unnatural body positions.
        </li>
        <li>
          The speed of Vini’s footwork is also extremely impressive. Of course, this gives him many possibilities with his step count, particularly with the time between each step. However, beyond our typical discussions about step placement in football, Vini’s quick feet open the possibility for late adjustments in duels, allowing him to maintain a straight(ish) line of motion even when required to compromise.
        </li>
        <li>
          Vini’s cognitive processing and reading of situations are also imperative. When paired with them, his quick feet allow him to alter his movements in the last second if necessary.
        </li>
      </ul>
      <h3>Building a Framework to Spot Future Exhibitors</h3>
      <p>
        After analyzing the five significant factors to Vini Jr.’s ability to generate time and space without central access, we are now able to curate a framework to help identify current and up-and-coming footballers who may have similar capacities:
      </p>
      <ul>
        <li>
          Physical Profile and Frame
          <ul>
            <li>
              Uses their arms well to increase their circle of control. Since central access isn’t craved, they will also need the ability to withstand backside and shoulder-to-shoulder duels to maintain a primarily straight line of motion.
            </li>
            <li>
              The ability to seamlessly shift weight from and to both sides of the body is necessary. Since motion is mainly along a straight line, the ability to maintain momentum, even under pressure, is desired. Furthermore, the ability to explode on both legs helps access inside and outside angles.
            </li>
          </ul>
        </li>
        <li>
          Touch Variety
          <ul>
            <li>
              They have enough variety in their touches and a wide range of comfortability to approach duels from various angles. This creates unpredictability, making it difficult for opposition players to force the ball carrier into uncomfortable situations.
            </li>
          </ul>
        </li>
        <li>
          Touch Selection
          <ul>
            <li>
              Can leverage the threat of accessing the middle through their touches, ball-striking capacity, and/or passing range.
            </li>
            <li>
              The intelligence to nearly always pick the correct touch, and more importantly, the comfortability to take a variety of touches on both feet, particularly when attacking the baseline.
            </li>
            <li>
              Possesses a deceptive step count and deceptive strides to hide intent.
            </li>
          </ul>
        </li>
        <li>
          Dis-marking Movements
          <ul>
            <li>
              Dis-marking techniques depend more on a player's physical and technical traits and a team’s overall dis-marking and lane-creation methods.
            </li>
          </ul>
        </li>
        <li>
          Comfortability in Attacking Duels
          <ul>
            <li>
              Can attack duels from either side from various touches, steps, and strides, giving the ball carrier the leeway to dictate the duel.
            </li>
            <li>
              Quick footwork and cognitive processing to make last-second alterations within a duel if necessary.
            </li>
          </ul>
        </li>
      </ul>
    </main>
  </div>
)

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
          <Route path="/featured-writings" element={<FeaturedWritingsPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;