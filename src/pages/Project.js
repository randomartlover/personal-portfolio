import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FullWidthImage from '../components/FullWidthImage';

function Project(props) {
  console.log(props)
  const { title, caption, imgUrl, description, tools, links, imgUrls, favoriteAspects, challenges, gridNumber = 2 } = props;
  return (
    <Banner>
      <Navbar />
      <div className="banner-container project">
        <LeftPanel>
          <div className="container">
            <h1>{ title }</h1>
            <FullWidthImage source={imgUrl}/>
            <p className='project-caption'><em>{caption}</em></p>
            <h3 className='underline-full'>Description</h3>
            <p>{description}</p>
            <div className={`half-grid`}>
              <div className='container'>
                <h3 className='underline-full'>Favourite Parts</h3>
                <ul>
                  {
                    favoriteAspects.map((favAspect, index) => {
                      return <li key={`fav-${index}`}>{favAspect}</li>
                    })
                  }
                </ul>
              </div>
              <div className='container'>
                <h3 className='underline-full'>Challenges</h3>
                <ul>
                  {
                    challenges.map((challenge, index) => {
                      return <li key={`challenge-${index}`}>{challenge}</li>
                    })
                  }
                </ul>
              </div>

            </div>
          </div>
        </LeftPanel>
        <div className='rule-vertical'></div>
        <RightPanel>
            <div className="bookmark-ribbon">
              <h2>Links</h2>
            </div>
              <p><i className="fab fa-github-alt"></i> <a href={links.gitHub} target="_blank" rel="noopener noreferrer">GitHub Repository</a></p>
              <p><i className="fas fa-globe"></i> <a href={links.website} target="_blank" rel="noopener noreferrer">Website</a></p>
          <div className="bookmark-ribbon">
            <h2>Tech Stack</h2>
          </div>
          <ul className='skills-grid'>
            {
              tools.map(tool => {
                return <li key={tool}>{tool}</li>
              })
            }
          </ul>
          {
            imgUrls &&
            <>
              <div className="bookmark-ribbon">
                <h2>Photos</h2>
              </div>
                <div className={`image-grid-${gridNumber}`}>
                  {
                    imgUrls.map(img => {
                      return <img src={img} alt="" width="100%"/>
                    })
                  }
              </div>
            </>
          }
          </RightPanel>
      </div>
      <Footer />
    </Banner>
  );
}

export default Project;
