import {useState} from 'react';
import './style.css';
import Intro from '../Intro';
import LeftMenu from '../LeftMenu';
import Instructions from '../Instructions';
import Credit from '../Credit';

export default function MainMenu () {
    const [mainMenu, setMainMenu] = useState(true);
    const [start, setStart] = useState(false);
    const [gameMenu, setGameMenu] = useState(false);
    const [instructions, setInstructions] = useState(false);
    const [credits, setCredits] = useState(false);

    function handleStartClick() {
        setMainMenu(false);
        setStart(true);
    }

    function handleInstructionsClick() {
        setMainMenu(false);
        setInstructions(true);
    }

    function handleCreditsClick() {
        setMainMenu(false);
        setCredits(true);
    }

    return (
        <div>
            {mainMenu && (
            <div className="greaterContainer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '976px', margin: '0 auto', marginTop: '6%', paddingTop: '20px', paddingRight: '10px', paddingLeft: '20px', paddingBottom: '20px', borderRadius: '5px', fontFamily: 'Courier, monospace', color: '#d4e1f1' }}>
                <h1 className="headingText">Hitcher</h1>
                <h3 className="headingText" style={{marginTop: '1%'}}>A travelling adventure game</h3>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px'}}>
                    <button onClick={handleStartClick} className="menuButtons">Start/resume</button>
                    <button onClick={handleInstructionsClick} className="menuButtons">Instructions</button>
                    <button onClick={handleCreditsClick} className="menuButtons">Credits</button>
                </div>
            </div>)}

            {start && <Intro setGameMenu={setGameMenu} setStart={setStart} />}
            {instructions && <Instructions setMainMenu={setMainMenu} setInstructions={setInstructions}/>}
            {credits && <Credit setMainMenu={setMainMenu} setCredits={setCredits}/>}
            {gameMenu && <LeftMenu />}

        </div>
    )
}