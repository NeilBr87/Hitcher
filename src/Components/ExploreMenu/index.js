import React from 'react';
import './style.css';

export default function ExploreMenu(props) {

    return (
        <div>
            <p>You decide to explore {props.currentTown}.</p>
            <button className="exploreKeyButtons">Earn money</button>
            <button className="exploreKeyButtons">Lunch</button>
            <button className="exploreKeyButtons">Hospital</button>
            <button className="exploreKeyButtons">PackageSprint</button>
        </div>
    );
}