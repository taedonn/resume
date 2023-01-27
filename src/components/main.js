import '../css/main.css';
import "nes.css/css/nes.min.css";
import pixelCharacter from '../img/pixel_character_ex.webp';

function Main() {
  return (
    <div className="main_index">
      <div className='index_left'>
        <img src={pixelCharacter} alt='픽셀 캐릭터'></img>
      </div>
      <div className='index_right'>
        <div className='character nes-container with-title'>
          <p className='title'>Character</p>
          <p className='text'>이태호 <span>@xxDevBosa</span></p>
          <p className='hashtag'>
            <div className='nes-container is-rounded'><p>#프론트엔드 개발자</p></div>
            <div className='nes-container is-rounded'><p>#ISTJ</p></div>
            <div className='nes-container is-rounded'><p>#서울</p></div>
            <div className='nes-container is-rounded'><p>#게이머</p></div>
          </p>
        </div>
        <div className='skill nes-container with-title'>
          <p className='title'>Skills</p>
          <p className='skill_list'>
            <p class="badge">html</p>
            <p class="badge">CSS</p>
            <p class="badge">SCSS</p>
            <p class="badge">Git</p>
            <p class="badge">GitHub</p>
            <p class="badge">JavaScript</p>
            <p class="badge">jQuery</p>
            <p class="badge">Node.js</p>
            <p class="badge">React</p>
          </p>
        </div>
        <div className='works nes-container with-title'>
          <p className='title'>Works</p>
          <p className='works_list'>
            <button className='nes-btn'>@Vision Project</button>
            <button className='nes-btn'>@RoboMD</button>
            <button className='nes-btn'>@Astell&Kern</button>
            <button className='nes-btn'>@Solaseado</button>
            <button className='nes-btn'>@JejuAir</button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main;