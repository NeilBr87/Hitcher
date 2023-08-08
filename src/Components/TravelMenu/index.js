import React, { useEffect } from 'react';
import { useState } from 'react';
import CarAnimation from '../CarAnimation';

export default function TravelMenu(props) {
const [journeyOutcome, setJourneyOutcome] = useState('');
const [journeyPara2, setJourneyPara2] = useState('');
const [journeyPara3, setJourneyPara3] = useState('');
const [journeyPara4, setJourneyPara4] = useState('');
const [drivingDistance, setDrivingDistance] = useState(0);
const [outcomeCoda, setOutcomeCoda] = useState('');
const [reachedTown, setReachedTown] = useState(false);

useEffect(() => {
    switch(props.currentTown) {
        case 'Caen':
            setDrivingDistance(6);
            break;
        default: setDrivingDistance(2);

    }
    const randomEvent = Math.random();

    if (randomEvent < 0.05) {
      setOutcomeCoda("breakdown")
      setJourneyOutcome("The driver makes their way down the motorway, chatting to you about life.");
      setJourneyPara2("That is, until around ten miles from your destination, when their car breaks down.");
      setJourneyPara3("You wait with them until breakdown recovery arrives, but there's no way to get someone else to stop for you on a motorway.");
      setJourneyPara4("You have a long, difficult walk into town. You arrive exhausted and hungry, and your feet are sore.");
    } else if (randomEvent < 0.0167) {
      setOutcomeCoda("robbery")
      setJourneyOutcome("The driver seems tense as you get about half way there. You notice they've got off the motorway and are driving down a country lane.");
      setJourneyPara2(`After a while, they pull over. "I'm sorry to do this," they say. "You seem to have a lot of cash on you and I'm barely scraping by. So here's what we're going to do. I want £200. If you don't give it to me, I'll leave you here in the middle of nowhere."`);   
      setJourneyPara3("You have a choice to make. You can hand over your money, or you can walk, facing a moderate possible health or food penalty.");
      setJourneyPara4("What do you do?");
    } else if (randomEvent < 0.001) {
      setJourneyOutcome("You get abducted by aliens.");
    } else {
      setJourneyOutcome("You arrive safely at your destination.");
      setReachedTown(true);
    }
  
}, [props.currentTown]);

  function handleProceedClick() {
    props.setTime(props.time + drivingDistance);
    props.setTravelling(false);
  }


    return (
        <div>
        <p>You get in the car. It is {drivingDistance} hours to {props.currentTown}.</p>
        <p>{journeyOutcome}</p>
        <p>{journeyPara2}</p>
        <p>{journeyPara3}</p>
        <p>{journeyPara4}</p>
        <CarAnimation />
        {reachedTown && <button onClick={handleProceedClick} className="keyButtons" >Proceed</button>}
         
        </div>  
    )

}