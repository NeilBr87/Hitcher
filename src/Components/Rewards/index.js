import React from 'react';
import './style.css';

export default function Rewards() {


    return (
        <div style={{width: '320px', height: '250px', borderRadius: '10px', border: '4px dashed rgb(20, 120, 160)', backgroundColor: 'white', color: 'black'}}>
            <h5>Ordered by distance</h5>
            <p className="greenText" >Algiers, Algeria - £100,000 reward</p>
            <p className="greenText" >Ghazaouet, Algeria - £110,000 reward</p>
            <p className="greenText" >Tangier, Morocco - £120,000 reward</p>
            <p className="orangeText" >Tunis, Tunisia - £130,000 reward</p>
            <p className="orangeText" >St Petersburg, Russia - £140,000 reward</p>
            <p className="orangeText" >Smolensk, Russia - £150,000 reward</p>
            <p className="redText" >Rostov, Russia - £160,000 reward</p>
            <p className="redText" >Varna, Bulgaria - £170,000 reward</p>
            <p className="redText" >Istanbul, Turkey - £180,000 reward</p>
        </div>
    );

}