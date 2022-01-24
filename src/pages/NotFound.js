import React from 'react';
import LeftPanel from '../components/LeftPanel';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function NotFound(props) {
  return (
    <Banner>
      <Navbar />
        <LeftPanel>
          <div className="not-found vh-100">
            NotFound
          </div>
        </LeftPanel>
      <Footer />
    </Banner>
  );
}

export default NotFound;
