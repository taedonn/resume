import '../css/animationCube.css';
import '../css/animationCube.css.map';
import '../css/animationCube.scss';
import '../css/animationCube.scss.map';

function Cube(props) {
    return (
        <div className='cube_container'>
            <div className={props.click ? 'scene scene-hover' : 'scene'}>
                <div className="webpack-cube">
                    <div className="outer-cube">
                        <div className="face face-top"></div>
                        <div className="face face-bottom"></div>
                        <div className="face face-left"></div>
                        <div className="face face-right"></div>
                        <div className="face face-front"></div>
                        <div className="face face-back"></div>
                    </div>
                    <div className="inner-cube">
                        <div className="face face-top"></div>
                        <div className="face face-bottom"></div>
                        <div className="face face-left"></div>
                        <div className="face face-right"></div>
                        <div className="face face-front"></div>
                        <div className="face face-back"></div>
                    </div>
                </div>
                <div className="shadows-outer-container">
                    <div className="shadow-outer"></div>
                </div>
                <div className="shadows-inner-container">
                    <div className="shadow-inner"></div>
                </div>
            </div>
        </div>
    );
}

export default Cube;