import React from 'react';
import './style.css';

export default function Credit(props) {

    function goBackToMenu() {
        props.setCredits(false);
        props.setMainMenu(true);    
    }   

    return (
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 65)', color: 'white', width: '100%', overflow: 'hidden', height: '100vh'}}>
            <h1>Credits</h1>
            <p className="creditText">Hitcher was created by Neil Brooks, a rookie software developer based in Oxted, Surrey.</p>
            <p className="creditText">It was primarily created with React and deployed via Netlify.</p>
            <a id="portfolioLink" href="https://neil-brooks-portfolio.netlify.app/">More about me here.</a>
            <p className="creditText">Other credits are as follows:</p>
            <p className="creditText">Maps courtesy of Google Maps (always Creative Commons) </p>
            <p className="creditText">Town views courtesy of Wikipedia (always creative commons - checked in each instance as policy isn't blanket)</p>
            <p className="creditText">Notepad courtesy of Luis Ouriach (Figma) - free to use</p>
            <button onClick={goBackToMenu} id="backToMenu">Back to main</button>
            </div>

    )
}