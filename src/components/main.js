import '../css/main.css';
import pixelArt from '../img/pixel_art.gif';

function Main() {
  return (
    <div className="main_index">
      <div className='index_left'>
        <img src={pixelArt} alt='픽셀 캐릭터'></img>
        <span className='copyright'>© WallpaperAccess {new Date().getFullYear()}</span>
      </div>
      <div className='index_right'>
        <div className='title'>
          이태호<span>@xxDevBosa</span>
          <a href='https://github.com/xxdevbosa' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>
        </div>
        <h2>
          <span>#프론트엔드 개발자</span>
          <span>#ISTJ</span>
          <span>#서울</span>
          <span>#용산</span>
          <span>#게이머</span>
          <span>#LOL</span>
          <span>#맛집</span>
        </h2>
        <div className='title'>프로그램/언어</div>
        <div className='skills_list'>
          <span>HTML</span>
          <span>CSS</span>
          <span>SCSS</span>
          <span>SASS</span>
          <span>JavaScript</span>
          <span>jQuery</span>
          <span>GSAP</span>
          <span>Three.js</span>
          <span>Node.js</span>
          <span>React</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>SourceTree</span>
          <span>VSCode</span>
        </div>
        <div className='title'>(주) 아이클레이브<span>2021 ~ 2023</span></div>
        <div className='career_list'>
          <p>홈페이지 리뉴얼</p>
        </div>
      </div>
    </div>
  );
}

export default Main;