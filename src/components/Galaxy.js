import { useRef, useEffect } from 'react';

// GSAP
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// THREE
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

gsap.registerPlugin(ScrollTrigger);

function Galaxy() {
    // GSAP 타임라인
    const master = useRef(null);

    useEffect(() => {
        // 파라미터
        const parameters = {};
        parameters.count = 5000;
        parameters.size = 0.01;
        parameters.radius = 30;
        parameters.branches = 3;
        parameters.spin = 1;
        parameters.randomness = 0.2;
        parameters.randomnessPower = 3;
        parameters.insideColor = '#CCD1FE';
        parameters.outsideColor = '#9FAAE5';

        // 장면 생성
        const scene = new THREE.Scene();

        // 은하수 생성
        const generateGalaxy = () => {
            // Geometry
            const geometry = new THREE.BufferGeometry();
            const positions = new Float32Array(parameters.count * 3);

            // Colors
            const colors = new Float32Array(parameters.count * 3);
            const colorInside = new THREE.Color(parameters.insideColor);
            const colorOutside = new THREE.Color(parameters.outsideColor);

            for (let i = 0; i < parameters.count; i++) {
                const i3 = i * 3;
                const radius = Math.random() * parameters.radius;
                const spinAngle = radius * parameters.spin;
                const branchAngle =
                ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

                const randomX =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius;
                const randomY =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius;
                const randomZ =
                Math.pow(Math.random(), parameters.randomnessPower) *
                (Math.random() < 0.5 ? 1 : -1) *
                parameters.randomness *
                radius;

                positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
                positions[i3 + 1] = randomY;
                positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

                const mixedColor = colorInside.clone();
                mixedColor.lerp(colorOutside, radius / parameters.radius);
                colors[i3] = mixedColor.r;
                colors[i3 + 1] = mixedColor.g;
                colors[i3 + 2] = mixedColor.b;
            }
            geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

            // Material
            const material = new THREE.PointsMaterial({
                size: parameters.size,
                sizeAttenuation: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
                vertexColors: true,
            });

            // Points
            const points = new THREE.Points(geometry, material);
            scene.add(points);

            return;
        };
        generateGalaxy();

        // 리사이징
        const sizes = { width: window.innerWidth, height: window.innerHeight };

        window.addEventListener('resize', () => {
            // 업데이트 - 크기
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            // 업데이트 - 카메라
            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            // 업데이트 - 렌더링
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // 카메라
        let camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);

        // 컨트롤
        let galaxy = document.getElementById('galaxy');
        let controls = new OrbitControls(camera, galaxy);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
        controls.enabled = false;

        // 렌더링 설정
        let renderer = new THREE.WebGLRenderer({
            galaxy,
            antialias: true,
            alpha: true // 투명도
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // 렌더링
        let check;
        let render = () => {
            if(check === true) {
                // OrbitControls
                controls.update();

                // Render
                renderer.render(scene, camera);
                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                window.requestAnimationFrame(render); // 한 틱에 60초
            }
            else{ return; }
        };
        render();

        // 로딩 완료 시 업데이트 - ScrollTrigger AutoRefresh 방지
        function blockRefresh() {
            ScrollTrigger.config({ autoRefreshEvents: 'visibilitychange, DOMContentLoaded, load, resize' });
            ScrollTrigger.refresh();
            return;
        }
        blockRefresh();
        window.addEventListener('load', () => { blockRefresh(); })

        // VISION 타임라인
        master.current = gsap.timeline({
            scrollTrigger: {
                trigger:'.index_scrollable', // 트리거 객체
                pin:true, // 트리거 객체를 만났을 때 고정/비고정
                scrub:0, // 뷰포트에 요소가 있을때만 애니메이션 실행 활성화/비활성화
                start:'top top', // 트리거가 시작하는 위치
                end:'bottom bottom' // 트리거가 끝나는 위치
            }
        });
        master.current
        .add(tl_1())
        .add(tl_2(),'<')
        .add(tl_3(),'<')
        .add(tl_4())
        .add(tl_5(),'<')
        .add(tl_6(),'<');
        
        function tl_1() { // 제목
            let tl_1 = gsap.timeline()
            .fromTo('.index_vision h2',{scale:3},{scale:1,duration:4})
            .fromTo({},{},{duration:4})
            .fromTo('.index_vision h2',{opacity:1,scale:1},{opacity:0,scale:3,duration:4})
            .fromTo({},{},{duration:4});
            return tl_1;
        }
        
        function tl_2() { // 소제목
            let tl_2 = gsap.timeline()
            .fromTo('.index_vision h3',{opacity:0,scale:1,y:20},{opacity:1,scale:1,y:0,duration:4})
            .fromTo({},{},{duration:4})
            .fromTo('.index_vision h3',{opacity:1,y:0},{opacity:0,y:20,duration:4})
            .fromTo({},{},{duration:4});
            return tl_2;
        }
        
        function tl_3() { // 배경 투명도
            let tl_3 = gsap.timeline()
            .fromTo('.index_video_wrap',{opacity:1},{opacity:0.4,duration:4})
            .fromTo({},{},{duration:12});
            return tl_3;
        }

        function tl_4() { // 3D OBJECT 카메라 포지션
            let tl_4 = gsap.timeline()
            .fromTo(camera.position,{x:0,y:0,z:-8},{x:0,y:0.2,z:8,duration:8})
            .fromTo({},{},{duration:4})
            .fromTo(camera.position,{x:0,y:0.2,z:8},{x:-2,y:2.2,z:8,duration:6})
            .fromTo({},{},{duration:4})
            .fromTo(camera.position,{x:-2,y:2.2,z:8},{x:2,y:-2.2,z:8,duration:6})
            .fromTo({},{},{duration:4})
            .fromTo(camera.position,{x:2,y:-2.2,z:8},{x:0,y:0.2,z:-8,duration:8});
            return tl_4;
        }
        
        function tl_5() { // 전체 배경 투명도
            let tl_5 = gsap.timeline()
            .fromTo('#galaxy',{opacity:0,scale:0.5},{opacity:1,scale:1,duration:1})
            .fromTo({},{},{duration:37})
            .fromTo('#galaxy',{opacity:1,scale:1},{opacity:0,scale:0.5,duration:2});
            return tl_5;
        }
        
        function tl_6() { // 텍스트 줌인/줌아웃
            let tl_6 = gsap.timeline()
            .fromTo('.index_intro_txt_1',{opacity:0,scale:0.5},{opacity:1,scale:1,duration:8})
            .fromTo({},{},{duration:4})
            .fromTo('.index_intro_txt_1',{opacity:1,scale:1},{opacity:0,scale:0.5,duration:3})
            .fromTo('.index_intro_txt_2',{opacity:0,scale:0.5},{opacity:1,scale:1,duration:3})
            .fromTo({},{},{duration:4})
            .fromTo('.index_intro_txt_2',{opacity:1,scale:1},{opacity:0,scale:0.5,duration:3})
            .fromTo('.index_intro_txt_3',{opacity:0,scale:0.5},{opacity:1,scale:1,duration:3})
            .fromTo({},{},{duration:4})
            .fromTo('.index_intro_txt_3',{opacity:1,scale:1},{opacity:0,scale:0.5,duration:6})
            .fromTo({},{},{duration:2});
            return tl_6;
        }

        // GSAP 트리거 만났을 때 실행할 함수
        function updateTrigger(n) {
            // 트리거 만났을 때 canvas 실행
            if (n === 2) { check = true; }
            else { check = false; }

            // 라디오 체크
            document.getElementById('cube_input_'+n).checked = true;

            // 라디오 체크 시 큐브 활성화
            document.getElementsByClassName('cube_1')[0].getElementsByClassName('scene')[0].classList.remove('scene-hover');
            document.getElementsByClassName('cube_2')[0].getElementsByClassName('scene')[0].classList.remove('scene-hover');
            document.getElementsByClassName('cube_3')[0].getElementsByClassName('scene')[0].classList.remove('scene-hover');
            document.getElementsByClassName('cube_'+n)[0].getElementsByClassName('scene')[0].classList.add('scene-hover');
        }

        // UNMOUNT 시 타임라인 제거
        return () => { master.current.kill(); }
    }, []);

    return (
        <div id='galaxy'></div>
    );
}

export default Galaxy;