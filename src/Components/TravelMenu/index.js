import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import CarAnimation from '../CarAnimation';

export default function TravelMenu(props) {
  const [journeyOutcome, setJourneyOutcome] = useState('');
  const [journeyPara2, setJourneyPara2] = useState('');
  const [journeyPara3, setJourneyPara3] = useState('');
  const [journeyPara4, setJourneyPara4] = useState('');
  const [drivingDistance, setDrivingDistance] = useState(0);
  const [outcomeCoda, setOutcomeCoda] = useState('');
  const [reachedTown, setReachedTown] = useState(false);
  const [driving, setDriving] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [additionalOptions, setAdditionalOptions] = useState(false);
  const [button1, setButton1] = useState('');
  const [button2, setButton2] = useState('');
  const [showSummary, setShowSummary] = useState(false);
  const [summaryPara1, setSummaryPara1] = useState("");
  const [summaryPara2, setSummaryPara2] = useState("");
  const [summaryPara3, setSummaryPara3] = useState("");
  const [summaryPara4, setSummaryPara4] = useState("");
  const [decisionSummary, setDecisionSummary] = useState("");

useEffect(() => {
    switch(props.currentTown) {
        case 'Caen':
            setDrivingDistance(6);
            break;
        default: setDrivingDistance(2);

    }
    const randomEvent = Math.random();
    setJourneyOutcome("");
    setJourneyPara2("");
    setJourneyPara3("");
    setJourneyPara4("");  
    setReachedTown(false);
    
    // 1 in 5 chance
      if (randomEvent < 0.20) {
        setOutcomeCoda("breakdown")
        setJourneyOutcome("The driver makes their way down the motorway, chatting to you about life.");
        setJourneyPara2("That is, until around ten miles from your destination, when their car breaks down.");
        setJourneyPara3("You wait with them until breakdown recovery arrives, but there's no way to get someone else to stop for you on a motorway.");
        setJourneyPara4("You have a long, difficult walk into town. You arrive exhausted and hungry, and your feet are sore.");
        setReachedTown(true);
    // 1 in 4 chance
      } else if (randomEvent < 0.25) {
        setOutcomeCoda("mildtraffic")
        setJourneyOutcome("The drive is a pleasant one. You and the driver have a nice chat and you tell them about your journey.");
        setJourneyPara2(`Then you see traffic up ahead - there's been a small accident.`);
        setJourneyPara3("The delay adds an extra hour to your journey.");
        setJourneyPara4("You arrive in town, a little later than expected.");
        setReachedTown(true);
    // 1 in 10 chance
      } else if (randomEvent < 0.10) {
        setOutcomeCoda("heavytraffic")
        setJourneyOutcome("It's a nice drive. The driver is friendly and understanding.");
        setJourneyPara2(`Then you see traffic up ahead - apparently, a lorry has jackknifed across the motorway.`);
        setJourneyPara3("The delay adds an extra 3 hours to your journey.");
        setJourneyPara4("You arrive in town, a lot later than expected.");
        setReachedTown(true);
    // 1 in 15~ chance
      } else if (randomEvent < 0.9) {
        setOutcomeCoda("drunk")
        setJourneyOutcome(`You make your way towards town, chatting with the driver. At first you think they're just a bit tired.`);
        setJourneyPara2(`It doesn't take you long to realise they're drunk. You're nowhere near town yet.`);
        setJourneyPara3("You have a choice to make. You can ask them to pull over and get out, or you can stay in the car and hope for the best.");
        setJourneyPara4("What do you do?");
        setReachedTown(false);
        setAdditionalOptions(true);
        setButton1("Ask them to pull over");
        setButton2("Stay in the car");
    // 1 in 20 chance
        } else if (randomEvent < 0.05) {
        setOutcomeCoda("accident")
        setJourneyOutcome("The drive is a pleasant one. You and the driver have a nice chat and you tell them about your journey.");
        setJourneyPara2(`Then it happens, all too fast. A car comes speeding down the motorway, swerving between lanes. It hits the car you're in.`);   
        setJourneyPara3("The driver is able to reach town without having to call breakdown assistance, but you're hurt. It would be advisable to go to the hospital.");
        setJourneyPara4("You arrive in town, shaken and bruised.");
        setReachedTown(true);
    // 1 in 25 chance
      } else if (randomEvent < 0.04) {
        setOutcomeCoda("police")
        setJourneyOutcome("You make your way to the next town, chatting aimlessly with the driver.");
        setJourneyPara2(`Then you see blue lights flashing behind you. The driver pulls over and the police officer approaches the car.`);
        setJourneyPara3("It turns out that the driver took their parents' car without permission. They're arrested, but then the police start asking you questions.");
        setJourneyPara4("You have a choice to make. You can answer the police's questions, or you can refuse to answer.");
        setReachedTown(false);
        setAdditionalOptions(true);
        setButton1("Answer questions");
        setButton2("Refuse to answer");
    // 1 in 50 chance
      } else if (randomEvent < 0.02) {
        setOutcomeCoda("robbery")
        setJourneyOutcome("The driver seems tense as you get about half way there. You notice they've got off the motorway and are driving down a country lane.");
        setJourneyPara2(`After a while, they pull over. "I'm sorry to do this," they say. "You seem to have a lot of cash on you and I'm barely scraping by. So here's what we're going to do. I want £200. If you don't give it to me, I'll leave you here in the middle of nowhere."`);   
        setJourneyPara3("You have a choice to make. You can hand over your money, or you can walk, facing a moderate possible health or food penalty.");
        setJourneyPara4("What do you do?");
        setReachedTown(false);
        setAdditionalOptions(true);
        setButton1("Hand over money");
        setButton2("Get out of the car");
    // 1 in 100 chance
      } else if (randomEvent < 0.002) {
        setOutcomeCoda("heart")
        setJourneyOutcome("You make your way to the next town, chatting aimlessly with the driver.");
        setJourneyPara2(`Then, mid-sentence, they stop. They slump over the wheel, clutching their chest. You realise they're having a serious heart attack.`);
        setJourneyPara3("What do you do? The car is speeding along. You can grab the steering wheel, or you can unbuckle your seatbelt and bail out of the car.");
        setReachedTown(false);

        setAdditionalOptions(true);
        setButton1("Grab the steering wheel");
        setButton2("Bail out of the car");
    // 1 in 150 chance
      } else if (randomEvent < 0.006) {  
        setOutcomeCoda("killer")
        setJourneyOutcome("The driver sets off, not talking much at first. You feel slightly unnerved by them.");
        setJourneyPara2(`Then they start talking. They tell you about how they were happy to see a hitchhiker after so long.`);
        setJourneyPara3("They tell you about how they used to love picking up hitchkikers - and making them disappear.");
        setJourneyPara4("You're in the car with a dangerous person. What do you want to do?.");
        setAdditionalOptions(true);
        setButton1("Try to talk them down");
        setButton2("Hit them and run out of the car.");
    // 1 in 200 chance
      } else if (randomEvent < 0.005) {
        setOutcomeCoda("vampire")
        setJourneyOutcome("You set off, making idle conversation with the driver. They're a little odd, but you don't think much of it.");
        setJourneyPara2(`They seem to be taking a long time. It's not a long journey, but they've been driving for a while. They keep 'getting lost' and taking wrong turns.`);
        setJourneyPara3("Soon, it's even getting into evening. The driver starts talking, now. They talk about how the sun doesn't kill them, but they can only comfortably feed at night.");
        setJourneyPara4("You're scared. What do you do?");
        setAdditionalOptions(true);
        setButton1("Run out of the car");
        setButton2("Make the sign of a crucifix with your fingers and evoke a prayer.");
    // 1 in 500 chance
      } else if (randomEvent < 0.002) {
        setJourneyOutcome("abducted");
        setJourneyOutcome("You make your way to the next town, chatting aimlessly with the driver.");
        setJourneyPara2(`Even though you were on the motorway, you soon find yourself on an isolated stretch of road. The driver seems as confused as you.`);
        setJourneyPara3("Then you see it. A huge, sinister craft in the middle of the sky above you. A beam of light shines down, and you feel yourself being lifted up.");
        setJourneyPara4("You're abducted by aliens. You're never seen again.");
      } else {
        setJourneyOutcome("You make your way to the next town, chatting aimlessly with the driver.");
        setJourneyPara2("You arrive at your destination safely.");
        setReachedTown(true);
      }
  
}, [props.currentTown]);

function handleProceedClickAfterAccident() {
  props.setTime(props.time + drivingDistance);
  props.setActualTown(props.currentTown);

  if (decisionSummary === "drunkGoodOutcome") {
    props.setHealth(props.health - 10);
    props.setFood(props.food - 30);
    props.setTime(18)
  }
  if (decisionSummary === "drunkBadOutcome") {
    props.setHealth(0);
  }
  props.setTravelling(false);
  setDriving(false);

}


  function handleProceedClick() {
    props.setTime(props.time + drivingDistance);
    props.setActualTown(props.currentTown);
    props.setTravelling(false);
    setDriving(false);
    if (outcomeCoda === "breakdown") {
      props.setHealth(props.health - 10);
      props.setFood(props.food - 30);
      props.setTime(18)
    }
    if (outcomeCoda === "accident") {
      props.setHealth(props.health - 40);
      props.setFood(props.food - 20);
    }
    if (outcomeCoda === "mildtraffic") {
      props.setTime(props.time + 1);
    }
    if (outcomeCoda === "heavytraffic") {
      props.setTime(props.time + 3);
    }
    setOutcomeCoda('');
    }

  function setOff() {
    setDriving(true);
    setShowContent(true);

    setTimeout(() => {
      setShowContent(false);
    }, 4000); 
  }

  function option1() {
    setAdditionalOptions(false);
    setShowContent(false);
    console.log("You chose option 1");
    if (outcomeCoda === "drunk") {
      console.log("option 1 should be working");
      setSummaryPara1("You ask the driver to pull over. They look very annoyed, but do so, leaving you on the side of the road.");
      setSummaryPara2("You call the police, deciding that they could hurt someone. You wait for a while, but no one else stops. You have to walk into town.");
      setSummaryPara3("You arrive in town, exhausted and hungry. But alive.");
      setSummaryPara4("");
      setDecisionSummary("drunkGoodOutcome")
      setShowSummary(true);
      
    }
  }
  
  function option2() {
    setAdditionalOptions(false);
    setShowContent(false);
    console.log("You chose option 2");
    setAdditionalOptions(false);
    if (outcomeCoda === "drunk") {
      console.log("option 2 should be working");
      setSummaryPara1("You stay in the car. The driver is slurring his words and driving erratically.");
      setSummaryPara2("You're starting to wish that you'd asked them to pull over. Then, you see it. A traffic jam up ahead.");
      setSummaryPara3("The driver is too drunk to stop in time. The car crashes into the back of the car in front, and you're thrown forward.");
      setSummaryPara4("");
      setDecisionSummary("drunkBadOutcome")
      setShowSummary(true);

    }
  }


  return (
    <div>
      {! driving && (
        <div>
      <p>You get in the car. It is {drivingDistance} hours to {props.currentTown}.</p>
      <button onClick={setOff} className="keyButtons" style={{fontSize: '12px'}}>
        Set off
      </button>
      </div>
      )}
      {driving && (
        <div>
          {showContent && (
            <div style={{width: '60vw', height: '6vh !important'}}>
              <CarAnimation />
            </div>
          )}
          {showContent ? null : (
            <div style={{width: '300px'}}>
              <p>{journeyOutcome}</p>
              <p>{journeyPara2}</p>
              <p>{journeyPara3}</p>
              <p>{journeyPara4}</p>
              {reachedTown && (
                <button onClick={handleProceedClick} style={{
            width: '20vw',
            height: '4vh',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(50, 180, 50)",
            backgroundColor: 'rgb(80, 210, 80)',
            borderRadius: '10px',
            color: 'black',
            margin: '0 auto',
            }}>
                  Proceed
                </button>
              )}
              {additionalOptions && (
                <div style={{display: 'flex', flexDirection: 'row'}}>
                  <button onClick={option1} style={{
            width: '30vw',
            height: '6vh',
            fontSize: '10px',
            fontFamily: "'Preahvihear', sans-serif",
            border: "4px groove rgb(180, 50, 50)",
            backgroundColor: 'rgb(210, 80, 80)',
            lineSpacing: '1px',
            borderRadius: '10px',
            color: 'black',
            lineHeight: '90%',
            margin: '0 auto',
            }}>{button1}</button>
                  <button onClick={option2} style={{
            width: '30vw',
            height: '6vh',
            fontSize: '10px',
            fontFamily: "'Preahvihear', sans-serif",
            border: "4px groove rgb(180, 50, 50)",
            backgroundColor: 'rgb(210, 80, 80)',
            lineSpacing: '1px',
            borderRadius: '10px',
            color: 'black',
            lineHeight: '90%',
            margin: '0 auto',
            }}>{button2}</button>
                </div>)}
            </div>
          )}

          {showSummary && (
            <div>
              <p>{summaryPara1}</p>
              <p>{summaryPara2}</p>
              <p>{summaryPara3}</p>
              <p>{summaryPara4}</p>
              <button onClick={handleProceedClickAfterAccident}>Proceed</button>

            </div>)}

        </div>
      )}
    </div>
  );
}