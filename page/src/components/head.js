import '../css/animations.css'

import logo from '../assets/img/CENTER.svg'
import resume from '../assets/resume.pdf'

function Head(props) {
    
    return (
        <div className="wrapper">

            <div className="head">

                <div className="hintro">
                    <img src={logo} alt="introduction" />
                    <div className="buttons">
                        <a href={resume} className="btn effect01" download><span>Resume</span></a>
                        <a href='https://example.com' className="btn effect01"><span>About</span></a>
                    </div>
                </div>

                <div className="hother">
                    Coming Soon!
                </div>

            </div>

        </div>
    );
}

export default Head;
