import { useState } from 'react';
import './style.css';
import Food from '../Food';

export default function EveningMenu(props) {
const [sleepExpanded, setSleepExpanded] = useState(false);
const [eatExpanded, setEatExpanded] = useState(false);
const [statusColorSleep, setStatusColorSleep] = useState('red');
const [statusColorEat, setStatusColorEat] = useState('red');
const [dayEnded, setDayEnded] = useState(false);
const [sleepSummary, setSleepSummary] = useState('');
const [eatSummary, setEatSummary] = useState('');
const [healthSummary, setHealthSummary] = useState('');
const [foodSummary, setFoodSummary] = useState('');
const [isFadingOut, setIsFadingOut] = useState(false);


    function handleSleepClick() {
        setSleepExpanded(true);
    }

    function handleEatClick() {
        setEatExpanded(true);
    }

    function handleSleepRoughClick() {
        props.setSleepStatus("Sleeping rough");
        setStatusColorSleep('red');
        setSleepExpanded(false);
    }

    function handleHostelClick() {
        props.setSleepStatus("Staying in a hostel");
        setStatusColorSleep('green');
        setSleepExpanded(false);
    }

    function handleHotelClick() {
        props.setSleepStatus("Staying in a hotel");
        setStatusColorSleep('green');
        setSleepExpanded(false);
    }

    function handleEndDayClick() {
        if (props.sleepStatus === "Sleeping rough") {
            props.setHealth(props.health - 10);
            setSleepSummary("slept on the streets")
            setHealthSummary("Your health has gone down.")
        }
        else if (props.sleepStatus === "Staying in a hostel") {
            setSleepSummary("stayed in a nearby hostel")
            setHealthSummary("Your health has not changed.")
        }
        else if (props.sleepStatus === "Staying in a hotel") {
            props.setHealth(props.health + 20);
            setSleepSummary("stayed in a nice hotel nearby")
            if (props.health === 100) {
                setHealthSummary("Your health is at max level.")
            }
            else {
                setHealthSummary("Your health has gone up.")
            }
        }
        if (props.eatingStatus === "Going hungry") {
            props.setFood(props.food - 20);
            setEatSummary("skipped dinner")
            setFoodSummary("Your food level has gone down.")
        }
        else if (props.eatingStatus === "Eating supermarket food") {
            props.setFood(props.food + 10);
            setEatSummary("grabbed some food from the supermarket")
            if (props.food === 100) {
                setFoodSummary("Your food level is at max level.")
            }
            else {
                setFoodSummary("Your food level has gone up.")
            }
        }
        else if (props.eatingStatus === "Eating restaurant food") {
            props.setFood(props.food + 40);
            setEatSummary("ate at a fancy restaurant")
            if (props.food === 100) {
                setFoodSummary("Your food level is at max level.")
            }
            else {
                setFoodSummary("Your food level has gone up.")
            }
        }
        if (props.sleepStatus === "Staying in a hostel" && props.eatingStatus === "Eating supermarket food") {
            props.setMoney(props.money - 30);
        }
        if (props.sleepStatus === "Staying in a hostel" && props.eatingStatus === "Eating restaurant food") {
            props.setMoney(props.money - 50);  
        }
        if (props.sleepStatus === "Staying in a hotel" && props.eatingStatus === "Eating supermarket food") {
            props.setMoney(props.money - 60);
        }
        if (props.sleepStatus === "Staying in a hotel" && props.eatingStatus === "Eating restaurant food") {
            props.setMoney(props.money - 80);
        }
        props.setEveningBlurb(false)
        setDayEnded(true);
    }

    function handleNextDayClick() {
        props.setDeciding(false);
        props.setDay(props.day + 1);
        props.setTime(9);
        props.setEvening(false);
        setDayEnded(false);
        setSleepSummary('');
        setEatSummary('');
        setHealthSummary('');
        setFoodSummary('');
        props.setEveningBlurb(false)
        setIsFadingOut(true);

    }


    return (
        <div>
        {!dayEnded && 
        <div id={isFadingOut ? 'fadeOut' : ''}>
            <p>Make choices about food and shelter based on your money, health and hunger.</p>
            <p>Current sleeping status: <span style={{ fontWeight: 'bold', color: statusColorSleep }}>{props.sleepStatus}</span></p>
            <p>Current eating status: <span style={{fontWeight: 'bold', color: statusColorEat}}>{props.eatingStatus}</span></p>
            {!sleepExpanded && !eatExpanded && 
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
            <button className="keyButtonsEvening" onClick={handleSleepClick}>Change sleeping arrangements</button>
            <button className="keyButtonsEvening" onClick={handleEatClick}>Change eating arrangements</button></div>}
            {sleepExpanded &&
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="sleepRoughButton" onClick={handleSleepRoughClick}>Sleep rough</button>
                    <p style={{marginTop: '5px', fontSize: '14px'}}>Money: No loss</p>
                    <p style={{marginTop: '-10px', fontSize: '14px'}}>Health: -10</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="greenSleepButton" onClick={handleHostelClick}>Stay in a hostel</button>
                    <p style={{marginTop: '5px', fontSize: '14px'}}>Money: -£20</p>
                    <p style={{marginTop: '-10px', fontSize: '14px'}}>Health: No change</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="greenSleepButton" onClick={handleHotelClick}>Stay in a hotel</button>
                    <p style={{marginTop: '5px', fontSize: '14px'}}>Money: -£50</p>
                    <p style={{marginTop: '-10px', fontSize: '14px'}}>Health: +20</p>
                </div>
            </div>}
            {eatExpanded &&
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
                <Food evening={props.evening} setEatingStatus={props.setEatingStatus} setFood={props.setFood} food={props.food} setStatusColorEat={setStatusColorEat} setEatExpanded={setEatExpanded} />
            </div>}


            <button onClick={handleEndDayClick} style={{
                marginTop: sleepExpanded || eatExpanded ? '1%' : '4%',
                fontFamily: 'courier, monospace',
                width: '160px',
                height: '70px',
                fontSize: '24px',
                fontWeight: 'bold',
                borderRadius: '5px',
                backgroundColor: '#435F7D',
                color: 'white',
                border: '5px inset #34495e'
                }}>End day</button>
        </div>}

        {dayEnded &&
        <div>
            <p>Your day is at an end.</p>
            <p>You {sleepSummary} and {eatSummary}.</p>
            <p>{healthSummary}</p>
            <p>{foodSummary}</p>
            <button className="keyButtonsEvening" onClick={handleNextDayClick}>Next day</button>
        </div>}
        </div>
    );
    }