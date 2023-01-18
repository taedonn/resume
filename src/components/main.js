import { useState } from 'react';
import YouTube from 'react-youtube';
import Cube from './animationCube';
import '../css/main.css';

function Main() {
  // 큐브 애니메이션 클릭 이벤트
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    if(e.target.checked) { setIsChecked(true); }
    else { setIsChecked(false); }
  }

  return (
    <div className="main_index">
      <div className='main_video_wrap'></div>
      <YouTube
        className='main_video' 
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
      <div className='scroll_animation fade_up'>
        <p><span></span>스크롤하기</p>
      </div>
      <div className='cube_all'>
        <input id='cube_input_1' type='radio' name='cube_input' onChange={handleChange}/>
        <label htmlFor='cube_input_1'>
          <div className='cube cube_1'><Cube></Cube><span>비전</span></div>
        </label>
        <input id='cube_input_2' type='radio' name='cube_input' onChange={handleChange}/>
        <label htmlFor='cube_input_2'>
          <div className='cube cube_2'><Cube></Cube><span>소개</span></div>
        </label>
        <input id='cube_input_3' type='radio' name='cube_input' onChange={handleChange}/>
        <label htmlFor='cube_input_3'>
          <div className='cube cube_3'><Cube></Cube><span>포트폴리오</span></div>
        </label>
      </div>
    </div>
  );
}

export default Main;