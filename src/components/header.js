import { useWindowSize } from './useWindowSize';
import { useState } from 'react';
import '../css/header.css';

function Header() {
  // 리사이징
  const [width] = useWindowSize();

  // 햄버거 버튼 클릭 이벤트
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (e) => {
    if(e.target.checked) { setIsChecked(true); }
    else { setIsChecked(false); }
  }

  return (
    <header>
      {
        // 1080 이상일 때 PC
        width > 1080
        ?
          <div className='header fade_down'>
            <ul className='gnb gnb_left'>
              <li><a className='gnb_menu' href='/portfolio_react'>포트폴리오</a></li>
              <li><a className='gnb_menu' href='/portfolio_react'>스킬</a></li>
            </ul>
            <a href="/portfolio_react"><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 179.23"><defs><style></style></defs><path className="logo" d="M262.38,.42c-69.12-.72-49.53-5.77-80.64,52.58,.91,.57,1.83,1.14,2.74,1.71,11.34-13.75,20.13-31.89,33.32-43.38,6.4-.72,12.93-.26,18.13-.26-35.46,35.47-70.95,70.96-107.14,107.15-13.41-15.38-32.46-29.28-41.05-48.91-10.12-21.14-20.78-42.02-31.43-62.9-1.18-2.32-3.65-5.62-5.59-5.67C33.52,.29,16.3,.48,0,.48,44.08,44.54,88.14,88.6,133.31,133.75c4.09-4.69,8.95-10.27,13.81-15.85,.53,.37,1.06,.74,1.59,1.11-5.78,11.56-11.57,23.12-17.13,34.24-9.76-11.82-18.8-22.78-27.85-33.73-.75,.5-1.49,1.01-2.24,1.51,9.49,18.97,18.97,37.93,29.11,58.2,18.01-31.29,29.22-65.78,50.36-94.83,28.43-26.01,52.67-58.44,84-80.43-.86-1.19-1.72-2.37-2.57-3.56ZM23.67,11.08c8.19,1.31,18.91-3.45,24.35,3.34,6.86,13.37,13.54,26.84,21.31,42.36-15.9-15.92-30.3-30.32-45.66-45.7Z"/></svg></h1></a>
            <ul className='gnb gnb_right'>
              <li><a className='gnb_menu' href='/portfolio_react'>커리어</a></li>
              <li><a className='gnb_menu' href='/portfolio_react'>연락처</a></li>
            </ul>
          </div>
        // 1080 이하일 때 모바일
        :
          <div className='header_m'>
            <a href="/portfolio_react"><h1><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.96 179.23"><defs><style></style></defs><path className="logo" d="M262.38,.42c-69.12-.72-49.53-5.77-80.64,52.58,.91,.57,1.83,1.14,2.74,1.71,11.34-13.75,20.13-31.89,33.32-43.38,6.4-.72,12.93-.26,18.13-.26-35.46,35.47-70.95,70.96-107.14,107.15-13.41-15.38-32.46-29.28-41.05-48.91-10.12-21.14-20.78-42.02-31.43-62.9-1.18-2.32-3.65-5.62-5.59-5.67C33.52,.29,16.3,.48,0,.48,44.08,44.54,88.14,88.6,133.31,133.75c4.09-4.69,8.95-10.27,13.81-15.85,.53,.37,1.06,.74,1.59,1.11-5.78,11.56-11.57,23.12-17.13,34.24-9.76-11.82-18.8-22.78-27.85-33.73-.75,.5-1.49,1.01-2.24,1.51,9.49,18.97,18.97,37.93,29.11,58.2,18.01-31.29,29.22-65.78,50.36-94.83,28.43-26.01,52.67-58.44,84-80.43-.86-1.19-1.72-2.37-2.57-3.56ZM23.67,11.08c8.19,1.31,18.91-3.45,24.35,3.34,6.86,13.37,13.54,26.84,21.31,42.36-15.9-15.92-30.3-30.32-45.66-45.7Z"/></svg></h1></a>
            <input type='checkbox' id='gnb_menu_btn' onChange={handleChange}/>
            <label htmlFor='gnb_menu_btn'>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <div className={`gnb_menu_all ${isChecked ? 'visible_y' : 'visible_n'}`}>
              <div className='gnb_menu'>
                <h2><a href='/portfolio_react'>포트폴리오</a></h2>
                <span></span>
              </div>
              <div className='gnb_menu'>
                <h2><a href='/portfolio_react'>스킬</a></h2>
                <span></span>
              </div>
              <div className='gnb_menu'>
                <h2><a href='/portfolio_react'>커리어</a></h2>
                <span></span>
              </div>
              <div className='gnb_menu'>
                <h2><a href='/portfolio_react'>연락처</a></h2>
                <span></span>
              </div>
            </div>
          </div>
      }
    </header>
  );
}

export default Header;