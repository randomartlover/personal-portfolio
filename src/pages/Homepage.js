import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Avatar from '../components/Avatar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import televison from '../assets/images/retro-television.png';
import funnyGif from '../assets/images/IT-gif.gif';
import mapToDreams from '../assets/images/map-to-dreams.svg';
import gameOnCover from '../assets/images/projects/gameOn/game-on-cover.png';
import Footer from '../components/Footer';
import FullWidthImage from '../components/FullWidthImage';

function HomePage() {
  return (
    <Banner>
      <Navbar />
      <div className="banner-container">
        <LeftPanel>
          <div className='home-header'>
            <div className='television-container'>
              <div className='img-container'>
                <img src={funnyGif} alt="gif" />
              </div>
              <img src={televison} alt="televison" />
            </div>
            <div className='home-headline'>
              <h2>Technology</h2>
              <p>A portal to a world of</p>
              <h3>POSSIBILITIES</h3>
            </div>
          </div>
          <div className='container container-flex'>
            <div>
              <h3>Passionate about analytical thinking</h3>
              <p>Did someone say japanese puzzles?!?</p>
              <h3>Passionate about singing and dancing</h3>
              <p>Pretty good from feedbacks gotten</p>
              <h3>Passionate about adventures</h3>
              <p>So much to see...so little time...</p>
            </div>
            <img src={mapToDreams} alt="map" width="40%"/>
          </div>
          <div className="container">
            <h2 className='underline-fit'>WHAT TO EXPECT</h2>
            <p>Find out what drives Alexandra. Her journey so far and her plans. Also get to know about her personal life, what she does for fun.</p>
            <p>Included are some of her works so far. Such as <a target="_blank" rel="noopener noreferrer" href="http://www.gameonhost.co.uk/">GameOn!</a> The ideal application that handles game party hosting so you can focus on having fun with your friends.</p>
            <FullWidthImage source={gameOnCover}/>
          </div>
        </LeftPanel>
        <div className='rule-vertical'></div>
        <RightPanel>
          <div className="bookmark-ribbon">
            <h2>EXHIBITIONS</h2>
          </div>
          <p>Explore works done by Alexandra Okoro. Do you want to be the best game party host? Have life stories you want to keep track of and maybe share with the world? These and more adventures await.</p>
          <div className="bookmark-ribbon">
            <h2>VACANCIES</h2>
          </div>
          <p>Grab these amazing oppurtunities while you still can. Candidate open to learning new tech stacks.</p>
          <br/>
          <p><strong>Preferred locations:</strong> Switzerland, Germany, Ireland, United Kingdom. Open to other locations.</p>
          <h3>BACKEND DEVELOPER</h3>
          <p>Experience with Ruby on Rails, NodeJS. Love for database design.</p>
          <h3>FRONTEND DEVELOPER</h3>
          <p>Over 2 years working with React, state management tools such as Redux, CSS. </p>
          <h3>FULLSTACK DEVELOPER</h3>
          <p>Experience with end-to-end application development. Interested in learning more about DevOps.</p>
          <div className="bookmark-ribbon">
            <h2>CREDITS</h2>
          </div>
          <Avatar />
          <p className='credit'>DESIGNED BY ALEXANDRA</p>
          <p className='credit'>Email: <a href="mailto:alex.nnenna.okoro@gmail.com">alex.nnenna.okoro@gmail.com</a> </p>
          <p className='credit'>Phone number: <a href="tel:+44758-518-7051">+44 - 758 - 518 - 7051</a></p>
        </RightPanel>
      </div>
      <Footer />
    </Banner>
  );
}

export default HomePage;
