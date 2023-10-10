import {useState} from 'react';
import './style.css';
import Intro from '../Intro';
import MobileUI from '../MobileUI';
import Instructions from '../Instructions';
import Credit from '../Credit';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function MainMenu () {
    const [mainMenu, setMainMenu] = useState(true);
    const [start, setStart] = useState(false);
    const [gameMenu, setGameMenu] = useState(false);
    const [instructions, setInstructions] = useState(false);
    const [credits, setCredits] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
                <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 65)', color: 'white', width: isMobile ? '100%' : '40%', margin: '0 auto', overflow: 'hidden', height: '100vh'}}>
                <h1 style={{width: isMobile ? '90vw' : '30vw'}} className="headingText">Hitcher</h1>
                <h3 className="headingText" style={{marginTop: '1%', width: isMobile ? '90vw' : '30vw'}}>A travelling adventure game</h3>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '20px', padding: '50px'}}>
                    <button onClick={handleStartClick} className="menuButtons">Start/resume</button>
                    <button onClick={handleInstructionsClick} className="menuButtons">Instructions</button>
                    <button onClick={handleCreditsClick} className="menuButtons">Credits</button>
                </div>
            </div>)}

            {start && <Intro setGameMenu={setGameMenu} setStart={setStart} />}
            {instructions && <Instructions setMainMenu={setMainMenu} setInstructions={setInstructions}/>}
            {credits && <Credit setMainMenu={setMainMenu} setCredits={setCredits}/>}
            {gameMenu && <MobileUI />}

        </div>
    )
}