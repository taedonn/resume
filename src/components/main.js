import YouTube from 'react-youtube';
import ScrollEvent from './ScrollEvent';
import '../css/main.css';

function Main() {
  return (
    <div className="main_index">
      <div className='index_fixed'>
        <div className='index_video_wrap'></div>
        <YouTube
          className='index_video' 
          videoId='sbioGKKKa6w' 
          opts={{
            playerVars: {
              autoplay: 1,
              controls: 0,
              loop: 1,
              rel: 0,
              playlist: 'sbioGKKKa6w'
            }
          }}
          onReady={(e) => { e.target.mute(); e.target.playVideo(); }} 
          onError={(e) => e.target.reload() }
        />
        <ScrollEvent/>
      </div>
      <div className='index_scroll_event'>
        <section className='index_vision_wrap'>
          <div className='index_vision'>
            <h2>VISION</h2>
            <h3>이태호(Tae Lee) | Web Development Portfolio</h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;