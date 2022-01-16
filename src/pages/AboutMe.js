import React from 'react';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';

function AboutMe() {
  return (
      <Banner>
        <Navbar />
        <div className="container">
          <LeftPanel>
            About me
          </LeftPanel>
          <div className='rule-vertical'></div>
          <RightPanel>
            <p>
              Tristique senectus et netus et malesuada fames ac. Sit amet porttitor eget dolor morbi non arcu. Feugiat vivamus at augue eget arcu dictum varius duis. Posuere lorem ipsum dolor sit. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Nibh venenatis cras sed felis eget. Magna fermentum iaculis eu non diam phasellus. Leo urna molestie at elementum. Quam pellentesque nec nam aliquam sem et tortor consequat id. Amet nisl purus in mollis nunc sed id. Diam quam nulla porttitor massa id. Tincidunt id aliquet risus feugiat in ante metus dictum at. Pretium quam vulputate dignissim suspendisse in est ante in. Sit amet porttitor eget dolor morbi non arcu risus quis. Non enim praesent elementum facilisis leo vel fringilla. Consectetur adipiscing elit ut aliquam purus sit amet. Augue lacus viverra vitae congue eu consequat. Eget mauris pharetra et ultrices neque.
            </p>
          </RightPanel>
        </div>
      </Banner>
  );
}

export default AboutMe;
