import { useState } from 'react';
import './style.css';

export default function Credit(props) {

    function goBackToMenu() {
        props.setInstructions(false);
        props.setMainMenu(true);    
    }   

    return (
        <div className="greaterContainer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '976px', margin: '0 auto', marginTop: '3%', paddingTop: '20px', paddingRight: '10px', paddingLeft: '20px', paddingBottom: '20px', borderRadius: '5px', fontFamily: 'Courier, monospace', color: '#d4e1f1' }}>
            <h1>Credits</h1>
            <p className="creditText">Hitcher was created by Neil Brooks, a rookie software developer based in Oxted, Surrey.</p>
            <p className="creditText">It was primarily created with React and deployed via Netlify.</p>
            <a id="portfolioLink" href="https://neil-brooks-portfolio.netlify.app/">More about Neil here.</a>
            <button onClick={goBackToMenu} id="backToMenu">Back to main</button>
            </div>

    )
}