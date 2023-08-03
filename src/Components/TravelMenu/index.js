import React from 'react';
import { useState } from 'react';


export default function TravelMenu(props) {

const [drivingDistance, setDrivingDistance] = useState(0);

    switch(props.currentTown) {
        case 'Crawley':
            setDrivingDistance(2);
            break;

    }

    return (
        <div>
        <p>You get in the car. It is four hours to {props.currentTown}.</p>
        <p>Tutorial note for your first journey: </p>
        </div>
    )

}