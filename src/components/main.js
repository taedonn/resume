import '../css/main.css';
import pixelArt from '../img/pixel_art.gif';

function Main() {
  return (
    <div className="main_index">
      <div className='index_left'>
        <img src={pixelArt} alt='픽셀 캐릭터'></img>
        <span className='copyright'>© {new Date().getFullYear()} WallpaperAccess</span>
      </div>
      <div className='index_right'>
        <div className='title'>
          이태호<span>@xxDevBosa</span>
          <a href='https://github.com/xxdevbosa' target='_blank' rel='noreferrer'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg></a>
        </div>
        <h2>
          <span>#프론트엔드</span>
          <span>#개발자</span>
          <span>#ISTJ</span>
          <span>#서울</span>
          <span>#게이머</span>
          <span>#LOL</span>
        </h2>
        <div className='title'>프로그램/언어</div>
        <div className='skills_list'>
          <span>HTML</span>
          <span>CSS</span>
          <span>SASS</span>
          <span>SCSS</span>
          <span>Markdown</span>
          <span>JavaScript</span>
          <span>jQuery</span>
          <span>GSAP</span>
          <span>Three.js</span>
          <span>Node.js</span>
          <span>React.js</span>
          <span>AJAX</span>
          <span>JSON</span>
          <span>Jekyll</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>SourceTree</span>
          <span>VSCode</span>
        </div>
        <div className='title'>EXPERIENCE</div>
        <div className='company_list'>
          <div className='company'>
            <div className='company_name'>
              <div className='company_logo'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings-fill" viewBox="0 0 16 16"><path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V.5ZM2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-1 2v1H2v-1h1Zm1 0h1v1H4v-1Zm9-10v1h-1V3h1ZM8 5h1v1H8V5Zm1 2v1H8V7h1ZM8 9h1v1H8V9Zm2 0h1v1h-1V9Zm-1 2v1H8v-1h1Zm1 0h1v1h-1v-1Zm3-2v1h-1V9h1Zm-1 2h1v1h-1v-1Zm-2-4h1v1h-1V7Zm3 0v1h-1V7h1Zm-2-2v1h-1V5h1Zm1 0h1v1h-1V5Z"/></svg></div>
              <p>(주) 아이클레이브<span>2021.12 ~ 현재</span></p>
            </div>
            <ul className='company_info'>
              <li>온라인 서비스 운영
                <ul className='company_info_sub'>
                  <li>로보MD 사이트 운영 관리<span>2021.12 ~</span></li>
                  <li>로보MD 사이트 리뉴얼<span>2022.01 ~ 2022.03</span></li>
                  <li>로보MD 회원가입페이지 리뉴얼<span>2022.10 ~ 2022.11</span></li>
                </ul>
              </li>
              <li>자동 배너 제작 솔루션 운영
                <ul className='company_info_sub'>
                  <li>배너 템플릿 제작 관리<span>2021.12 ~</span></li>
                  <li>배너 스크립트 리팩토링<span>2023.01 ~ 2023.02</span></li>
                </ul>
              </li>
              <li>진열 자동운영 솔루션 개발 참여
                <ul className='company_info_sub'>
                  <li>진열 스크립트 개발<span>2022.03 ~ 2022.10</span></li>
                  <li>진열 관리자 페이지 제작<span>2022.03 ~ 2022.10</span></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='copyright'>
          Copyright {new Date().getFullYear()}. xxDevBosa, all rights reserved.<br/>
          <a href='https://github.com/xxdevbosa/resume' target='_blank' rel='noreferrer'>Check this repository on GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Main;