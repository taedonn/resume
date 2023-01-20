import { useState } from 'react';
import YouTube from 'react-youtube';
import Cube from './animationCube';
import Galaxy from './Galaxy';
import '../css/main.css';

function Main() {
  // 큐브 애니메이션 클릭 이벤트
  const [isChecked, setIsChecked] = useState([true, false, false]);
  const handleChange = e => {
    let isCheckedCopy = [false, false, false];
    isCheckedCopy[e.target.value] = true;
    setIsChecked(isCheckedCopy);
  }

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
        <div className='scroll_animation fade_up'>
          <p><span></span>스크롤하기</p>
        </div>
        <div className='cube_all fade_left'>
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
      </div>
      <div className='index_scrollable'>
        <section className='index_vision_wrap'>
          <div className='index_vision'>
            <h2>VISION</h2>
            <h3>이태호(Tae Lee) | Web Design & Development Portfolio</h3>
          </div>
        </section>
        <section className='index_intro_wrap'>
          <div className='index_intro'>
            <Galaxy></Galaxy>
            <div className='index_intro_txt_wrap'>
              <div className='index_intro_txt'>
                <div className='index_intro_txt_1'>
                  <h2>I AM <span>DEVELOPER.</span></h2>
                  <h3>"단순함은 궁극적인 정교함이다."</h3>
                  <h4>
                    장문의 글을 요약하는 것, 핵심을 하나의 문장으로 설명하는 것과 같이, 복잡한 내용을 <br/>
                    단순하고 정교하게 만드는 것이 웹 개발자로서 최고의 미덕이라고 생각합니다.
                  </h4>
                </div>
              </div>
              <div className='index_intro_txt'>
                <div className='index_intro_txt_2'>
                  <h2>I AM <span>DESIGNER.</span></h2>
                  <h3>"강점은 닮음이 아닌 다름에서 발휘된다."</h3>
                  <h4>
                    독특한 개성을 가진 디자이너만이 갖고 있는 독창적인 감성이 <br/>
                    디자이너로서 가질 수 있는 최고의 강점이라고 생각합니다.
                  </h4>
                </div>
              </div>
              <div className='index_intro_txt'>
                <div className='index_intro_txt_3'>
                  <h2>I AM <span>TAE LEE.</span></h2>
                  <h3>"복잡함에서 단순함, 단순함에서 정교함으로."</h3>
                  <h4>
                    개발과 디자인 각각의 역할에 대한 핵심을 파악하고, 단순함을 유지하며, <br/>
                    정교한 제품/서비스를 만드는게 제품이 궁극적으로 가야할 방향성이라고 생각합니다.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className='index_portfolio_wrap'>
          <div className='index_portfolio_title'>
            <h2>Port<span>folio</span></h2>
            <h3>
              웹 개발, 제품 디자인, 일러스트 등의 작업을 통해, <br/>
              코딩, 공간, 컬러&매치에 대한 이해도가 높습니다.
            </h3>
            <h4>
              <input type='radio' id='portfolio_skill_1' name='portfolio_skill' defaultChecked={true}/>
              <label htmlFor='portfolio_skill_1'>웹 개발</label>
              <input type='radio' id='portfolio_skill_2' name='portfolio_skill'/>
              <label htmlFor='portfolio_skill_2'>제품 디자인</label>
              <input type='radio' id='portfolio_skill_3' name='portfolio_skill'/>
              <label htmlFor='portfolio_skill_3'>일러스트/사진</label>
            </h4>
          </div>
          <div className='index_portfolio'>
            {/* 스크린샷 [ PC:1920X1080 / 모바일:500X900 ] */}
            <div className='index_portfolio_web'></div>
            <div className='index_portfolio_product'></div>
            <div className='index_portfolio_ai'></div>
          </div>
        </section>
    </div>
  );
}

export default Main;