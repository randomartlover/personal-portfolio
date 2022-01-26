import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import AOT from '../assets/images/hobbies/AOT.jpg';
import birdy from '../assets/images/hobbies/birdy.jpeg';
import dailyLightUp from '../assets/images/hobbies/daily-light-up.png';
import Card from '../components/Card';

const EXPERIENCES = [
                      {
                        jobTitle: "Teaching Assistant",
                        company: "Le Wagon",
                        duration: "Jan 2022 - present",
                        roles: [
                          "Part-time teaching of programming concepts to a class of 30 students",
                          "Debugging students' code"
                        ],
                      },
                      {
                        jobTitle: "Full Stack Developer",
                        company: "Freelance",
                        duration: "Jan 2021 - Oct 2021",
                        roles: [
                          "Led the application's design prototype using Figma",
                          "Led the design, implementation and integration of an automated CV PDF generator service in a recruitment platform",
                          "Designed and co - implemented a public communication forum.This contains the timeline of all posts made on the platform with voting and commenting feature",
                          "Co - implemented a contact management system(NodeJS backend and React frontend)"
                        ],
                      },
                      {
                        jobTitle: "Full Stack Developer (Internship)",
                        company: "Netop Business Systems",
                        duration: "Oct 2019 - Feb 2021",
                        roles: [
                          "Assisted in mentoring interns on designing a user flow and prototyping on Figma.",
                          "Partnered in the development of warehouse billing application with C# backend and React frontend",
                        ],
                      }
                    ]

const EDUCATIONS = [
                    {
                      school: "Le Wagon",
                      degree: "Full Stack Developer",
                      fieldOfStudy: "Computer Programming",
                      duration: "Oct 2021 - Dec 2021",
                      description: "A 9-week full-time intensive coding bootcamp learning HTML, CSS, Bootstrap, JavaScript ES6, SQL, git, GitHub, Heroku and Ruby on Rails. Designed, implemented and shipped to production a clone of AirBnB. "
                    },
                    {
                      school: "University of Lagos",
                      degree: "Bachelor of Science",
                      fieldOfStudy: "Cell Biology and Genetics",
                      duration: "May 2014 - May 2018",
                      description: "The science of heredity. It is studied at the level of whole organisms (classical or transmission genetics), the DNA itself (molecular genetics), or whole populations (population and evolutionary genetics)."
                    }
                  ]

const SKILLS = [
                "Ruby ",
                "Ruby on Rails",
                "Redux",
                "Javascript",
                "NodeJS",
                "React",
                "Vue",
                "HTML / CSS",
                "Bootstrap",
                "SQL",
                "PostgreSQL",
                "C#",
                "API integration",
                "Ajax",
                "Git / Github",
                "Figma",
                "PrimeReact",
                "Stimulus",
              ]

const HOBBIES = [
                  {
                    source: AOT,
                    alt: "Attack on Titan",
                    url: "https://www.instagram.com/p/BZBrVILB6YQ/",
                    title: "Drawing and animation",
                    description: "A fan of anime, my favourite is Attack on Titan. I love drawing so here is my rendition of Eren Jaeger (left) in his titan form."
                  },
                  {
                    source: dailyLightUp,
                    alt: "Daily Light Up",
                    url: "https://www.brainbashers.com/showlightup.asp?date=0124&diff=Hard&size=20",
                    title: "Puzzles",
                    description: "Introduced to me by my mum, Brainbashers is my goto puzzle source with daily light up puzzle being my fave."
                  },
                  {
                    source: birdy,
                    alt: "Birdy",
                    url: "https://open.spotify.com/artist/2WX2uTcsvV5OnS0inACecP",
                    title: "Music and dance",
                    description: "My all time favourite musician is Birdy, she is such a talented composer. I really enjoy singing her songs. A close second would be Lana Del Rey. Of course the perfect pair to the love of music is the love of dancing."
                  },
                ]
function AboutMe() {
  return (
      <Banner>
        <Navbar />
        <div className="banner-container">
          <LeftPanel>
            <div className="container">
              <h1>THE ARTIST</h1>
              <p>
                I started out on the quest of finding myself by wanting to help people. This led me down the path of biological sciences. After soul searching, I came across programming and there is nothing as exciting as bridging the gap between everyday routine and the ease of technology.
              </p>
              <p>
                As a web developer, the world is at your fingertips and you can create more worlds with a few (or more) lines of code. I get to develop applications that make the lives of others easier thereby giving them more time. What could be more fulfilling than that?
              </p>
              <p>
                I additionally get to partake in a hobby of mine, puzzle solving. Each new application is a puzzle to find the most efficient and user-friendly approach. I am a Full Stack Web Developer.
              </p>
              <h3 className='underline-full'>Career goals</h3>
              <p>Writing clean, well tested and typescripted programs. I also want to confidently work with large data not at the expense of performance. After this, I would want to focus more on backend development and DevOps.</p>
              <p>I would eventually want to take on more leadership-oriented roles.</p>
              <h3 className='underline-full'>Personal goals</h3>
              <p>I had the opportunity to learn from others, I owe a lot to the open tech community and my friends. I would love to give back by being a mentor to someone and watching them grow.</p>
              <p>There is a saying <em><strong>Charity begins at home.</strong></em> With most of my life spent in Nigeria, I know firsthand that although it is a beautiful country with rich culture and ripe with potential, it is relatively untapped and most times, the citizens do not benefit from advancements as much as they should. It has led to many gifted individuals lacking the exposure to be groomed to their full potential. I would love to create a platform that puts such individuals in a better position to access oppurtunities.</p>
              <h3 className='underline-full'>Hobbies</h3>
            {
              HOBBIES.map((hobby, index) => {
                const { source, alt, url, title, description } = hobby
                return (
                  <Card
                    reverse={index % 2 ? true : false}
                    key={alt}
                  >
                    <img src={source} alt={alt} />
                    <div>
                      <h3>
                        <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                      </h3>
                      <p>{description}</p>
                    </div>
                  </Card>
                )
              })
            }
            </div>
          </LeftPanel>
          <div className='rule-vertical'></div>
          <RightPanel>
          <div className='bookmark-ribbon'>
            <h2>Experience</h2>
          </div>
          <div>
            {
              EXPERIENCES.map(experience => {
                const { jobTitle, company, duration, roles} = experience
                return (
                  <div key={ company }>
                    <h3>{ jobTitle }</h3>
                    <p><strong>{ company }</strong> | { duration }</p>
                    <ul>
                      { roles.map(role => {
                        return <li key={ role }>{ role }</li>
                      }) }
                    </ul>
                  </div>
                )
              })
            }
          </div>
          <div className='bookmark-ribbon'>
            <h2>Education</h2>
          </div>
            <div>
              {
                EDUCATIONS.map(education => {
                  const { school, degree, fieldOfStudy, duration, description } = education
                  return (
                    <div key={school}>
                      <h3>{ school }</h3>
                      <p><strong>{degree}</strong></p>
                      <p>{fieldOfStudy} | {duration}</p>
                      <br />
                      <p>{ description }</p>
                    </div>
                  )
                })
              }
            </div>
          <div className='bookmark-ribbon'>
            <h2>Skills</h2>
          </div>
            <div>
              <ul className='skills-grid'>
                {
                  SKILLS.map(skill => {
                    return <li key={ skill }>{ skill }</li>
                  })
                }
              </ul>
            </div>
          </RightPanel>
        </div>
        <Footer />
      </Banner>
  );
}

export default AboutMe;
