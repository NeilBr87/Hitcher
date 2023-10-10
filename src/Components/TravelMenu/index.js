import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import CarAnimation from '../CarAnimation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    setSummaryPara1("");
    setSummaryPara2("");
    setSummaryPara3("");
    setSummaryPara4("");
    setDecisionSummary("");
    setShowSummary(false);  
    setReachedTown(false);
    setAdditionalOptions(false);
    
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
      } else if (randomEvent < 0.07) {
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
        setButton1("Hit them and run out of the car");
        setButton2("Try to talk them down.");
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
        setOutcomeCoda("abducted");
        setJourneyOutcome("You make your way to the next town, chatting aimlessly with the driver.");
        setJourneyPara2(`Even though you were on the motorway, you soon find yourself on an isolated stretch of road. The driver seems as confused as you.`);
        setJourneyPara3("Then you see it. A huge, sinister craft in the middle of the sky above you. A beam of light shines down, and you feel yourself being lifted up.");
        setJourneyPara4("You're abducted by aliens. You're never seen again.");
          setReachedTown(true);
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
  if (decisionSummary === "policeGoodOutcome") {
    props.setTime(props.time + 1);
  }
  if (decisionSummary === "policeBadOutcome") {
    props.setHealth(props.health - 20);
    props.setDay(props.day + 2);
    props.setTime(9);
  }
  if (decisionSummary === "robberyPay200") {
    props.setMoney(props.money - 200);
  }
  if (decisionSummary === "robberyPayAll") {
    props.setMoney(0);
  }
  if (decisionSummary === "robberyNoMoney") {
    props.setMoney(10);
  }
  if (decisionSummary === "heartGoodOutcome") {
    props.setTime(props.time + 3);
  }
  if (decisionSummary === "heartBadOutcome") {
    props.setHealth(props.health - 40);
    props.setDay(props.day + 4);
    props.setTime(9);
  }
  if (decisionSummary === "killerRunOutcome") {
    props.setTime(18)
    props.setHealth(props.health - 30);
    props.setFood(props.food - 40);
  }
  if (decisionSummary === "vampireDeathOutcome") {
    props.setGame(false)
    props.setGameOverType("vampire");
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
    if (outcomeCoda === "abducted") {
      props.setGame(false)
      props.setGameOverType("abducted");
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
    setJourneyOutcome("");
    setJourneyPara2("");
    setJourneyPara3("");
    setJourneyPara4("");
    console.log("You chose option 1");
    if (outcomeCoda === "drunk") {
      setSummaryPara1("You ask the driver to pull over. They look very annoyed, but do so, leaving you on the side of the road.");
      setSummaryPara2("You call the police, deciding that they could hurt someone. You wait for a while, but no one else stops. You have to walk into town.");
      setSummaryPara3("You arrive in town, exhausted and hungry. But alive.");
      setSummaryPara4("");
      setDecisionSummary("drunkGoodOutcome")
      setShowSummary(true);
    }
  if (outcomeCoda === "police") {
    setSummaryPara1("You decide the best course of action is to answer the police's questions honestly.");
    setSummaryPara2("They're skeptical at first, but soon they're confident that you've got nothing to do with the theft.");
    setSummaryPara3(`They're taking the driver to be booked in ${props.currentTown}. They give you a lift to town.`);
    setSummaryPara4("You arrive in good time.");
    setDecisionSummary("policeGoodOutcome")
    setShowSummary(true);
  }
  if (outcomeCoda === "robbery" && props.money >= 200) {
    setSummaryPara1("You hand over your money reluctantly. The driver thanks you and is apologetic.");
    setSummaryPara2("You arrive in town a short time later, resentful and broke but on time.");
    setSummaryPara3("");
    setSummaryPara4("");
    setDecisionSummary("robberyPay200")
    setShowSummary(true);
  }
  if (outcomeCoda === "robbery" && props.money < 200) {
    setSummaryPara1("You don't have £200, and you tell the driver as such.");
    setSummaryPara2("They seem disappointed, but take all of it and keep driving into town.");
    setSummaryPara3("You arrive in town, penniless but on time.");
    setSummaryPara4("");
    setDecisionSummary("robberyPayAll")
    setShowSummary(true);
  }
  if (outcomeCoda === "robbery" && props.money <= 0) {
    setSummaryPara1("You don't have any money, and you tell the driver as such.");
    setSummaryPara2("They seem disappointed, but agree to keep driving into town seeing as you're completely broke.");
    setSummaryPara3("When you arrive, they give you £10 and apologise for the attempt to steal from you.");
    setSummaryPara4("");
    setDecisionSummary("robberyNoMoney")
    setShowSummary(true);
  }
  if (outcomeCoda === "heart") {
    setSummaryPara1("You grab the steering wheel, forcing the car to the side of the road before anything terrible can happen.");
    setSummaryPara2("You give the driver first aid to the best of your knowledge, and call an ambulance.");
    setSummaryPara3(`They're going to be okay. The takes them to a hospital in town and give you a lift.`);
    setSummaryPara4("You've lost a bit of time, and got a hell of a fright, but you're alive.");
    setDecisionSummary("heartGoodOutcome")
    setShowSummary(true);
  }
  if (outcomeCoda === "killer") {
    setSummaryPara1("You hit the driver hard, and they slump over the wheel. You open the door and run out of the car.");
    setSummaryPara2("You run into the woods, and don't stop running until you're sure you're safe.");
    setSummaryPara3("You're shaken, but alive. You don't get into town until late evening, and you're exhausted and hungry.");
    setSummaryPara4("");
    setDecisionSummary("killerRunOutcome")
    setShowSummary(true);
  }
  if (outcomeCoda === "vampire") {
    setSummaryPara1("You run out of the car, screaming. Your assailant, unfortunately, is faster. They move with impossible speed.");
    setSummaryPara2("They manage to knock you over, and the last thing you see is their fangs descending towards your neck.");
    setSummaryPara3("You have been killed by a vampire. You are never seen again.");
    setSummaryPara4("");
    setDecisionSummary("vampireDeathOutcome")
    setShowSummary(true);
  }
}
  
  function option2() {
    setAdditionalOptions(false);
    setShowContent(false);
    console.log("You chose option 2");
    setAdditionalOptions(false);
    setJourneyOutcome("");
    setJourneyPara2("");
    setJourneyPara3("");
    setJourneyPara4("");
    if (outcomeCoda === "drunk") {
      setSummaryPara1("You stay in the car. The driver is slurring his words and driving erratically.");
      setSummaryPara2("You're starting to wish that you'd asked them to pull over. Then, you see it. A traffic jam up ahead.");
      setSummaryPara3("The driver is too drunk to stop in time. The car crashes into the back of the car in front, and you're thrown forward.");
      setSummaryPara4("");
      setDecisionSummary("drunkBadOutcome")
      setShowSummary(true);
    }
    if (outcomeCoda === "police") {
      setSummaryPara1("You decide the best course of action is to refuse to answer the police's questions.");
      setSummaryPara2(`They very quickly go from skeptical to suspicious. They arrest you and take you to the police station in ${props.currentTown}`);
      setSummaryPara3(`You're in the holding cell for a day before the police conclude that you had nothing to do wtih the theft.`);
      setSummaryPara4("You've over a day and some health.");
      setDecisionSummary("policeBadOutcome")
      setShowSummary(true);
    }
    if (outcomeCoda === "robbery") {
      setSummaryPara1("You tell the driver no deal and unbuckle your seatbelt. ");
      setSummaryPara2(`The driver pauses. "Wait," they say. "You'll be walking for days if I let you out here. Just stay in the car. I'll take you to town."`);
      setSummaryPara3("The rest of the journey is silent. You imagine that the driver is both sad at losing out on the money and guilty for demanding it in the first place.");
      setSummaryPara4("You thank them and get out of the car.");
      setDecisionSummary("robberyNoGive")
      setShowSummary(true);
    }
    if (outcomeCoda === "heart") {
      setSummaryPara1("You unbuckle your seatbelt bail out of the car as it tears down the road.");
      setSummaryPara2("The driver plows into the back of a lorry. You hit the road, hard.");
      setSummaryPara3("You're badly hurt. You're taken to hospital. The driver is dead, and there's a chance you could have saved them.");
      setSummaryPara4("You lose three days, some health, and a lot of karma.");
      setDecisionSummary("heartBadOutcome")
      setShowSummary(true);
    }
    if (outcomeCoda === "killer") {
      setSummaryPara1("You try to talk them down. You implore them to turn themselves in, to get help. You tell them that you're scared.");
      setSummaryPara2("The killer raises a hand as if to strike - then lays their hand on your shoulder.");
      setSummaryPara3("They apologise profusely and tell you it was a stupid joke.");
      setSummaryPara4("By the time the two of you get into town, you can sort of see the funny side.");
      setDecisionSummary("killerTalkOutcome")
      setShowSummary(true);
    }
    if (outcomeCoda === "vampire") {
      setSummaryPara1("You make the sign of a crucifix with your fingers and evoke a prayer.");
      setSummaryPara2("The vampire is initially startled, but quickly rebounds with a laugh over your gesture.");
      setSummaryPara3("The last thing you see is their fangs descending towards your neck.");
      setSummaryPara4("You have been killed by a vampire. You are never seen again.");
      setDecisionSummary("vampireDeathOutcome")
      setShowSummary(true);
    }
  }


  return (
    <div>
      {! driving && (
        <div>
      <p style={{fontSize: isMobile ? '10px' : '14px',}}>You get in the car. It is {drivingDistance} hours to {props.currentTown}.</p>
      <button onClick={setOff} className="keyButtons" style={{fontSize: '12px', width: isMobile ? '20vw' : '10vw'}}>
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
            <div style={{width: isMobile ? '300px' : '400px', margin: '0 auto'}}>
              <p style={{width: isMobile? '320px' : '420px', fontSize: isMobile ? '10px' : '14px'}}>{journeyOutcome}</p>
              <p style={{width: isMobile? '320px' : '420px', fontSize: isMobile ? '10px' : '14px'}}>{journeyPara2}</p>
              <p style={{width: isMobile? '320px' : '420px', fontSize: isMobile ? '10px' : '14px'}}>{journeyPara3}</p>
              <p style={{width: isMobile? '320px' : '420px', fontSize: isMobile ? '10px' : '14px'}}>{journeyPara4}</p>
              {reachedTown && (
                <button onClick={handleProceedClick} style={{
            width: isMobile ? '20vw' : '12vw',
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
              
              <p style={{width: isMobile ? '320px' : '40vw', fontSize: isMobile ? '10px' : '14px'}}>{summaryPara1}</p>
              <p style={{width: '320px', fontSize: isMobile ? '10px' : '14px'}}>{summaryPara2}</p>
              <p style={{width: '320px', fontSize: isMobile ? '10px' : '14px'}}>{summaryPara3}</p>
              <p style={{width: '320px', fontSize: isMobile ? '10px' : '14px'}}>{summaryPara4}</p>
              <button className="keyButtons" onClick={handleProceedClickAfterAccident}>Proceed</button>

            </div>)}

        </div>
      )}
    </div>
  );
}