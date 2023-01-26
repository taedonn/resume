import { useRef, useEffect } from 'react';

// GSAP
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function ScrollEvent() {
    // GSAP 타임라인
    const master = useRef(null);

    useEffect(() => {
        const size = {
            width : window.innerWidth,
            height : window.innerHeight
        }
        window.addEventListener('load', () => { });
        window.addEventListener('resize', () => {
            size.width = window.innerWidth;
            size.width = window.innerHeight;
        });

        // VISION 타임라인
        master.current = gsap.timeline({
            scrollTrigger: {
                trigger:'.index_scroll_event', // 트리거 객체
                pin:true, // 트리거 객체를 만났을 때 고정/비고정
                scrub:0, // 뷰포트에 요소가 있을때만 애니메이션 실행 활성화/비활성화
                start:'top top', // 트리거가 시작하는 위치
                end:'bottom bottom' // 트리거가 끝나는 위치
            }
        });
        master.current
        .add(tl_1())
        .add(tl_2(),'<')
        .add(tl_5());
        
        function tl_1() { // 제목 : 16
            let tl_1 = gsap.timeline()
            .fromTo('.index_vision h2',{scale:3},{scale:1,duration:4})
            .fromTo({},{},{duration:4})
            .fromTo('.index_vision h2',{opacity:1,scale:1},{opacity:0,scale:3,duration:4})
            .fromTo({},{},{duration:4});
            return tl_1;
        }
        
        function tl_2() { // 소제목
            let tl_2 = gsap.timeline()
            .fromTo('.index_vision h3',{opacity:0,scale:1,y:30},{opacity:1,scale:1,y:0,duration:4})
            .fromTo({},{},{duration:4})
            .fromTo('.index_vision h3',{opacity:1,y:0},{opacity:0,y:30,duration:4})
            .fromTo({},{},{duration:4});
            return tl_2;
        }
        
        function tl_5() { // 텍스트 줌인/줌아웃 : 40
            let tl_5 = gsap.timeline()
            .fromTo({},{},{duration:40});
            return tl_5;
        }

        // UNMOUNT 시 타임라인 제거
        return () => { master.current.kill(); }
    }, []);

    return (
        <div id='ScrollEvent'></div>
    );
}

export default ScrollEvent;