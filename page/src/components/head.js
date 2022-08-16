import '../css/animations.css'

import logo from '../assets/img/CENTER.svg'
import resume from '../assets/resume.pdf'

function Head(props) {
    
    return (
        <div className="wrapper">

            <div className="head">

                <div className="hintro">
                    <div className="gather">
                        <img className="intropic" src={logo} alt="introduction" />
                        <div className="buttons">
                            <a href={resume} className="btn effect01" download><span className="btntxt">Resume</span></a>
                            <a href='https://example.com' className="btn effect01"><span className="btntxt">About</span></a>
                        </div>
                        <div className="socials">
                            <a href="mailto:wooandrew@gatech.edu" class="fa fa-envelope"></a>
                            <a href="https://github.com/wooandrew" class="fa fa-github"></a>
                            <a href="https://linkedin.com/in/aswoo" class="fa fa-linkedin"></a>
                        </div>
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
