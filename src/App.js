import './assets/stylesheets/App.scss';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className="App">
      <Banner>
        <Navbar />
        <div className='container'>
          <Homepage />
          <AboutMe />
        </div>
      </Banner>
    </div>
  );
}

export default App;
