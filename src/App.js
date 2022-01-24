import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import './assets/stylesheets/App.scss';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import AboutMe from './pages/AboutMe';
import gameOn from './assets/images/projects/gameOn/game-on-cover.png';
import { gameOnImages } from './assets/images/projects/gameOn/';
import storybook from './assets/images/projects/storybooks/StoryBooks-cover.png';
import petHub from './assets/images/projects/petHub/petHub-cover.png';
import NotFound from './pages/NotFound';
const Project = React.lazy(() => import('./pages/Project'));
const PROJECTS = [
  {
    title: "GameOn!",
    url: "gameon",
    imgUrl: gameOn,
    tools: [
      "Ruby on Rails",
      "PostgreSQL",
      "Embedded RuBy",
      "Heroku"
    ],
    links: {
      gitHub: "https://github.com/ojimoh21/GameOn",
      website: "http://www.gameonhost.co.uk/"
    },
    caption: "GameOn! Being a legendary host is that easy...",
    description: "Game On is a party organiser. It takes away the pain of planning a party so you can focus on being a great host. Choose the date, time and place of your party. Select your guests. Have pre-party chat. Included in app is a game selection feature. Let your guests know ahead of time the games to expect with voting feature to know which games are crowd favorites.",
    imgUrls: gameOnImages,
    favoriteAspects: [""],
    challenges: [""],
  },
  {
    title: "PetHub",
    url: "pethub",
    imgUrl: petHub,
    tools: [
      "Ruby on Rails",
      "PostgreSQL",
      "Embedded RuBy",
      "Heroku"
    ],
    links: {
      gitHub: "https://github.com/randomartlover/storyBooks",
      website: "https://github.com/randomartlover/storyBooks"
    },
    caption: "PetHub connects pet lovers to pet owners..",
    description: "the rain in spain",
    imgUrls: [""],
    favoriteAspects: [""],
    challenges: [""],
  },
  {
    title: "StoryBooks",
    url: "storybooks",
    imgUrl: storybook,
    tools: [
      "Node.js",
      "Express",
      "MongoDB",
      "Express-handlebar",
      "Heroku"
    ],
    links: {
      gitHub: "https://github.com/randomartlover/storyBooks",
      website: "https://github.com/randomartlover/storyBooks"
    },
    caption: "Keep life stories with you forever...",
    description: "Create public and private stories from your life. It is a node.js application using google authentication, with all CRUD actions implemented. StoryBooks helps keep track of your life stories with features to make stories public or private.",
    imgUrls: [""],
    favoriteAspects: [""],
    challenges: [""],
  }
]

function App() {
  return (
    <div className="App">
      <Route render={({location})=> (
        <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              appear
              in
              classNames="page-transition"
            >
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/about" component={AboutMe} />
                <Route exact path="/projects" component={Projects} />
                <Suspense fallback={<div>Loading...</div>}>
                  {
                    PROJECTS.map(project => {
                      return (
                        <Route
                          exact
                          path={`/projects/${project.url}`}
                          name={project.url}
                          key={project.url}
                          render={props => <Project {...props} {...project} />}
                        />
                      )
                    })
                  }
                </Suspense>
                <Route component={NotFound} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
    </div>
  );
}

export default App;
