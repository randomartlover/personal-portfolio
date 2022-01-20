import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import gameOn from '../assets/images/projects/gameOn/game-on-cover.png'
import storybook from '../assets/images/projects/storybooks/StoryBooks-cover.png'
import petHub from '../assets/images/projects/petHub/petHub-cover.png'

const PROJECTS = [
  {
    projectName: "GameOn!",
    description: "Game On is a party organiser. It takes away the pain of planning a party so you can focus on being a great host. Choose the date, time and place of your party. Select your guests. Have pre-party chat. Included in app is a game selection feature. Let your guests know ahead of time the games to expect with voting feature to know which games are crowd favorites.",
    source: gameOn,
    tools: [
      "Ruby on Rails",
      "PostgreSQL",
      "Embedded RuBy",
      "Heroku"
    ]
  },
  {
    projectName: "PetHub",
    description: "PetHub connects pet lovers to pet owners. Want to have a pet for a day or more? PetHub gives you this option. Famous pets available for play dates on our application. Want to know what it's like to hang out with royalty for a day? Book your next play date with the Royal corgis.",
    source: petHub,
    tools: [
      "Ruby on Rails",
      "PostgreSQL",
      "Embedded RuBy",
      "Heroku"
    ]
  },
  {
    projectName: "StoryBooks",
    description: "Create public and private stories from your life.It is a node.js application using google authentication, with all CRUD actions implemented. StoryBooks helps keep track of your life stories with features to make stories public or private.",
    source: storybook,
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "Express-handlebar",
      "Heroku"
    ]
  },
]

function Projects() {
  return (
    <Banner>
      <Navbar />
      <div className="banner-container projects">
        <LeftPanel>
          <h1 className="container">
            Showroom
          </h1>
          {
            PROJECTS.map((project, index) => {
              const { projectName, description, source } = project;
              return (
                      <Card
                        reverse={index%2 ? true : false}
                        key={ projectName }
                      >
                        <img src={source} alt={`${projectName}-cover`} />
                        <div>
                          <h3>
                            <Link to={`projects/${projectName}`}>
                              {projectName}
                            </Link>
                          </h3>
                          <p>{description}</p>
                        </div>
                        </Card>
                      )
            })
          }
        </LeftPanel>
        <div className='rule-vertical'></div>
        <RightPanel>
          <div className="bookmark-ribbon">
            <h2>Tech Stacks</h2>
          </div>
            {
              PROJECTS.map( project => {
                return (
                  <div key = { project.projectName }>
                    <h3> { project.projectName } </h3>
                    <ul>
                    {
                      project?.tools?.map(tool => {
                        return <li key = { tool }> { tool } </li>
                      })
                    }
                    </ul>
                  </div>
                )
              })
            }
        </RightPanel>
      </div>
    </Banner>
  );
}

export default Projects;
