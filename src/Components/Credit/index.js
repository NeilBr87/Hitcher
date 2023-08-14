import { useState } from 'react';
import './style.css';

export default function Credit(props) {

    function goBackToMenu() {
        props.setCredits(false);
        props.setMainMenu(true);    
    }   

    return (
        <div className="greaterContainer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '976px', margin: '0 auto', marginTop: '3%', paddingTop: '20px', paddingRight: '10px', paddingLeft: '20px', paddingBottom: '20px', borderRadius: '5px', fontFamily: 'Courier, monospace', color: '#d4e1f1' }}>
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