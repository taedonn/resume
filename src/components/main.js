import { useState } from 'react';
import YouTube from 'react-youtube';
import Cube from './animationCube';
import '../css/main.css';

function Main() {
  // 큐브 애니메이션 클릭 이벤트
  const [isChecked, setIsChecked] = useState([true,false,false])
  const handleChange = e => {
    let isCheckedCopy = [false,false,false];
    isCheckedCopy[e.target.value] = true;
    setIsChecked(isCheckedCopy);
  }

  return (
    <div className="main_index">
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
      <div className='scroll_animation fade_up'>
        <p><span></span>스크롤하기</p>
      </div>
      <div className='cube_all'>
        <input id='cube_input_1' type='radio' name='cube_input' value={0} onChange={handleChange} defaultChecked={true}/>
        <label htmlFor='cube_input_1'>
          <div className='cube cube_1'><Cube click={isChecked[0]}></Cube><span>비전</span></div>
        </label>
        <input id='cube_input_2' type='radio' name='cube_input' value={1} onChange={handleChange}/>
        <label htmlFor='cube_input_2'>
          <div className='cube cube_2'><Cube click={isChecked[1]}></Cube><span>소개</span></div>
        </label>
        <input id='cube_input_3' type='radio' name='cube_input' value={2} onChange={handleChange}/>
        <label htmlFor='cube_input_3'>
          <div className='cube cube_3'><Cube click={isChecked[2]}></Cube><span>포트폴리오</span></div>
        </label>
      </div>
      <div className='index_scrollable'>
        <section className='index_vision_wrap'>
          <div className='index_vision'>
            <h2>VISION</h2>
            <h3>이태호(Tae Lee) | Web Design & Development Portfolio</h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Main;