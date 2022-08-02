import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import './css/App.css';
import './css/animations.css'

// Import components
import Ukraine from './components/ukraine';
import Head from './components/head';

function App() {

    const [ showUkraine, setShowUkraine ] = useState(true);

    const deleteHandler = () => {
        setShowUkraine(false);
    }

    return (

        <div className="body">

            <Head />
            
            <CSSTransition
                in={showUkraine}
                appear={true}
                timeout={500}
                classNames="support"
                unmountOnExit
            >
                <Ukraine event={deleteHandler} />
            </CSSTransition>

        </div>
    );
}

export default App;
