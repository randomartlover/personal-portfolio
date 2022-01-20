import './assets/stylesheets/App.scss';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import { Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <Route render={({location})=> (
        <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={30000}
              appear
              in
              classNames="page-transition"
            >
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about" component={AboutMe} />
                <Route path="/projects" component={Projects} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
    </div>
  );
}

export default App;
