import './assets/stylesheets/App.scss';
import Banner from './components/Banner';
import FullWidthImage from './components/FullWidthImage';
import LeftPanel from './components/LeftPanel';
import Navbar from './components/Navbar';
import RightPanel from './components/RightPanel';
import gameon from './assets/images/gameon.png'
import storybook from './assets/images/StoryBooks-cover.png'
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Banner>
        <Navbar />
        <div className='container'>
          <LeftPanel>
            <FullWidthImage source={gameon} />
            <FullWidthImage source={storybook} />
              <Card>
                <img src={storybook} alt="storybook" />
                <div>
                  <h3>Project Name</h3>
                  <p>
                    Tristique senectus et netus et malesuada fames ac. Sit amet porttitor eget dolor morbi non arcu. Feugiat vivamus at augue eget arcu dictum varius duis. Posuere lorem ipsum dolor sit. Sollicitudin tempor id
                  </p>
                </div>
              </Card>
              <Card reverse={true}>
                <img src={gameon} alt="storybook" />
                <div>
                  <h3>Project Name</h3>
                  <p>
                    Tristique senectus et netus et malesuada fames ac. Sit amet porttitor eget dolor morbi non arcu. Feugiat vivamus at augue eget arcu dictum varius duis. Posuere lorem ipsum dolor sit. Sollicitudin tempor id
                  </p>
                </div>
              </Card>
              <div className='leftPanel-info'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem. Adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum. Malesuada nunc vel risus commodo viverra maecenas accumsan. Id diam maecenas ultricies mi eget mauris. Ipsum faucibus vitae aliquet nec. Tincidunt lobortis feugiat vivamus at augue. Egestas diam in arcu cursus euismod. Ut tellus elementum sagittis vitae. Nibh sed pulvinar proin gravida hendrerit lectus a. Ac turpis egestas sed tempus. Praesent tristique magna sit amet. Aenean pharetra magna ac placerat vestibulum lectus mauris.

                  Pulvinar etiam non quam lacus. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Amet risus nullam eget felis eget nunc. Mauris ultrices eros in cursus turpis massa tincidunt dui. Tellus id interdum velit laoreet id donec ultrices. Fringilla est ullamcorper eget nulla. Odio facilisis mauris sit amet massa vitae tortor condimentum. Sit amet cursus sit amet dictum sit amet justo donec. Vel pharetra vel turpis nunc eget lorem dolor. Ultricies mi eget mauris pharetra et. Scelerisque varius morbi enim nunc faucibus a pellentesque. Elementum facilisis leo vel fringilla. Vestibulum lorem sed risus ultricies tristique nulla aliquet. Nunc sed blandit libero volutpat sed cras ornare arcu dui.

                  Vulputate eu scelerisque felis imperdiet proin. Egestas sed tempus urna et. Lacus vestibulum sed arcu non odio euismod. Nisl vel pretium lectus quam id leo. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Ultricies mi eget mauris pharetra. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Malesuada bibendum arcu vitae elementum curabitur. Vitae auctor eu augue ut. Interdum varius sit amet mattis. Sit amet luctus venenatis lectus magna fringilla. Aliquet eget sit amet tellus. Nulla facilisi cras fermentum odio.

                  Vel fringilla est ullamcorper eget nulla facilisi etiam. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Elementum facilisis leo vel fringilla est ullamcorper. Tortor aliquam nulla facilisi cras fermentum odio. Dolor magna eget est lorem. Aliquam ut porttitor leo a diam sollicitudin tempor. Nisl rhoncus mattis rhoncus urna neque viverra justo. Sit amet tellus cras adipiscing enim. Facilisi nullam vehicula ipsum a arcu cursus vitae congue. Elit ut aliquam purus sit amet luctus venenatis lectus. Morbi tristique senectus et netus et malesuada. Venenatis tellus in metus vulputate eu. Euismod lacinia at quis risus sed vulputate odio. Consequat ac felis donec et. Enim nunc faucibus a pellentesque sit amet porttitor eget. At volutpat diam ut venenatis tellus.

                  Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Pharetra vel turpis nunc eget lorem dolor sed. Maecenas ultricies mi eget mauris. Urna molestie at elementum eu facilisis sed odio morbi quis. Pretium nibh ipsum consequat nisl vel pretium lectus. Quisque egestas diam in arcu cursus. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Diam donec adipiscing tristique risus nec feugiat. Netus et malesuada fames ac turpis. Vitae semper quis lectus nulla at volutpat diam ut. Purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor morbi non.

                  Donec massa sapien faucibus et molestie ac. Id consectetur purus ut faucibus pulvinar elementum integer enim. Ac auctor augue mauris augue neque gravida in fermentum. Aliquam ultrices sagittis orci a. Duis ultricies lacus sed turpis tincidunt. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Vitae purus faucibus ornare suspendisse sed. Augue lacus viverra vitae congue eu consequat ac felis. Enim blandit volutpat maecenas volutpat blandit. Consectetur purus ut faucibus pulvinar elementum integer enim. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. In fermentum et sollicitudin ac. Semper viverra nam libero justo laoreet sit. Tellus elementum sagittis vitae et.

                  Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Tellus id interdum velit laoreet id donec. Sociis natoque penatibus et magnis dis. Enim nulla aliquet porttitor lacus luctus. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Enim ut sem viverra aliquet eget sit amet tellus cras. Sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Neque gravida in fermentum et. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Sit amet dictum sit amet. Senectus et netus et malesuada. Semper eget duis at tellus at. Et malesuada fames ac turpis. Dolor sit amet consectetur adipiscing. Adipiscing at in tellus integer feugiat scelerisque varius. Lobortis elementum nibh tellus molestie nunc non blandit.
                </p>
              </div>
          </LeftPanel>
          <div className='rule'></div>
          <RightPanel>
            <p>
              Tristique senectus et netus et malesuada fames ac. Sit amet porttitor eget dolor morbi non arcu. Feugiat vivamus at augue eget arcu dictum varius duis. Posuere lorem ipsum dolor sit. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Nibh venenatis cras sed felis eget. Magna fermentum iaculis eu non diam phasellus. Leo urna molestie at elementum. Quam pellentesque nec nam aliquam sem et tortor consequat id. Amet nisl purus in mollis nunc sed id. Diam quam nulla porttitor massa id. Tincidunt id aliquet risus feugiat in ante metus dictum at. Pretium quam vulputate dignissim suspendisse in est ante in. Sit amet porttitor eget dolor morbi non arcu risus quis. Non enim praesent elementum facilisis leo vel fringilla. Consectetur adipiscing elit ut aliquam purus sit amet. Augue lacus viverra vitae congue eu consequat. Eget mauris pharetra et ultrices neque.
            </p>
          </RightPanel>
        </div>
      </Banner>
    </div>
  );
}

export default App;
