import React from 'react';
import './style.css';

export default function Instructions(props) {

    function goBackToMenu() {
        props.setInstructions(false);
        props.setMainMenu(true);    
    }   

    return (
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 65)', color: 'white', width: '100%', overflow: 'hidden', height: '100vh'}}>
            <h2 style={{marginBottom: '-2%'}}>Instructions</h2>
            <h5 style={{marginBottom: '1%'}}>Basics</h5>
            <p className="instructionsText">Hitcher is a game about travel and management. Your goal is to hitchhike using the 'hitchhike' button in the town menu.</p>
            <p className="instructionsText">You will have a total of 8 hours to use throughout the day. You can use this to hitchhike, or alternatively spend time in the town you've arrived at.</p>
            <p className="instructionsText">You will need to manage your health, food and money. If your health reaches zero, you will lose the game. If your food reaches zero, you will lose health every day until it is restored.</p>
            <p className="instructionsText">Your choice of where to go is open-ended. You can head south, through Spain into North Africa, for a small reward, or east into Russia.</p>
            <p className="instructionsText">You can also head north into Scandinavia, or west into the Americas. The choice is yours.</p>
            <h5 style={{marginBottom: '1%'}}>Travelling</h5>
            <p className="instructionsText">When you hitchhike, you be presented with a destination. Each town normally has at least 2-3 destinations. Sometimes the driver will take you to the next town for free, other times they will charge you for petrol. You'll be given this information before deciding to set off.</p>
            <p className="instructionsText">If you say no, you can hitchhike somewhere else - but each hitchiking session takes two hours, so you'll only be able to do it a few times a day.</p>
            <p className="instructionsText">When you do travel, the most likely scenario is that you'll reach the next town safely - though this isn't always the case. Random events are set with certain probabilities. These can range from the mundane - like light traffic, to the extreme - like a paranormal experience.</p>
            <h5 style={{marginBottom: '1%'}}>Progress</h5>
            <p className="instructionsText">Your progress will be automatically stored to your browser using cookies, so you can always pick up where you left off. </p>
            <p className="instructionsText">If you want to start again, you can choose the 'New Game' option on the left game menu.</p>
            <button onClick={goBackToMenu} id="backToMenu">Back to main</button>
            </div>

    )
}