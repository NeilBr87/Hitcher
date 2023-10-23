import { useState } from 'react';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function EveningMenu(props) {
const [sleepExpanded, setSleepExpanded] = useState(false);
const [eatExpanded, setEatExpanded] = useState(false);
const [statusColorSleep, setStatusColorSleep] = useState('rgb(190, 50, 50)');
const [statusColorEat, setStatusColorEat] = useState('rgb(190, 50, 50)');
const [dayEnded, setDayEnded] = useState(false);
const [sleepSummary, setSleepSummary] = useState('');
const [eatSummary, setEatSummary] = useState('');
const [healthSummary, setHealthSummary] = useState('');
const [foodSummary, setFoodSummary] = useState('');
const [isFadingOut, setIsFadingOut] = useState(false);
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    function handleSleepClick() {
        setSleepExpanded(true);
        setEatExpanded(false);
    }

    function handleEatClick() {
        setEatExpanded(true);
        setSleepExpanded(false);
    }

    function handleSleepRoughClick() {
        props.setSleepStatus("Sleeping rough");
        setStatusColorSleep('rgb(190, 50, 50)');
        setSleepExpanded(false);
    }

    function handleHostelClick() {
        props.setSleepStatus("Staying in a hostel");
        setStatusColorSleep('rgb(40, 170, 40)');
        setSleepExpanded(false);
    }

    function handleHotelClick() {
        props.setSleepStatus("Staying in a hotel");
        setStatusColorSleep('rgb(40, 170, 40)');
        setSleepExpanded(false);
    }

    function handleGoHungryClick() {
        props.setEatingStatus("Going hungry");
        setStatusColorEat('rgb(190, 50, 50)');
        setEatExpanded(false);
    }

    function handleSupermarketClick() {
        props.setEatingStatus("Eating supermarket food");
        setStatusColorEat('rgb(40, 170, 40)');
        setEatExpanded(false);
    }

    function handleRestaurantClick() {
        props.setEatingStatus("Eating restaurant food");
        setStatusColorEat('rgb(40, 170, 40)');
        setEatExpanded(false);
    }

    function handleEndDayClick() {
        if (props.noFood) {
            props.setHealth(props.health - 40);
        }
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
        props.setSleepStatus("Sleeping rough");
        props.setEatingStatus("Going hungry");
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
            <p style={{width: isMobile ? '300px' : '28vw', color: 'white', margin: '0 auto', fontSize: isMobile ? '10px' : '14px'}}>Make choices about food and shelter based on your money, health and hunger by clicking on the pills below.</p>
            <p style={{color: 'white', fontSize: isMobile ? '10px' : '14px'}}>Current sleeping status: <span onClick={handleSleepClick} style={{ backgroundColor: statusColorSleep, color: 'white', padding: '4px', border: '1px inset white', borderRadius: '20px'}}>{props.sleepStatus}</span></p>
            <p style={{color: 'white', fontSize: isMobile ? '10px' : '14px'}}>Current eating status: <span onClick={handleEatClick} style={{ backgroundColor: statusColorEat, color: 'white', padding: '3px', border: '1px inset white', borderRadius: '20px'}}>{props.eatingStatus}</span></p>
            {sleepExpanded &&
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{width: isMobile ? '25vw' : '10vw', fontSize: isMobile ? '10px' : '14px'}} className="sleepRoughButton" onClick={handleSleepRoughClick}>Sleep rough</button>
                    <p style={{marginTop: '5px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Money: No loss</p>
                    <p style={{marginTop: '-10px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Health: -10</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{width: isMobile ? '25vw' : '10vw', fontSize: isMobile ? '10px' : '14px'}} className="greenSleepButton" onClick={handleHostelClick}>Stay in a hostel</button>
                    <p style={{marginTop: '5px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Money: -£20</p>
                    <p style={{marginTop: '-10px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Health: No change</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{width: isMobile ? '25vw' : '10vw', fontSize: isMobile ? '10px' : '14px'}} className="greenSleepButton" onClick={handleHotelClick}>Stay in a hotel</button>
                    <p style={{marginTop: '5px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Money: -£50</p>
                    <p style={{marginTop: '-10px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Health: +20</p>
                </div>
            </div>}
            {eatExpanded &&
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{width: isMobile ? '25vw' : '10vw', fontSize: isMobile ? '10px' : '14px'}} className="sleepRoughButton" onClick={handleGoHungryClick}>Go hungry</button>
                    <p style={{marginTop: '5px', fontSize: isMobile ? '10px' : '12px', color: 'white' }}>Money: No loss</p>
                    <p style={{marginTop: '-10px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Food: -20</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{width: isMobile ? '25vw' : '10vw', fontSize: isMobile ? '10px' : '14px'}} className="greenSleepButton" onClick={handleSupermarketClick}>Supermarket food</button>
                    <p style={{marginTop: '5px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Money: -£10</p>
                    <p style={{marginTop: '-10px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Food: +10</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button style={{width: isMobile ? '25vw' : '10vw', fontSize: isMobile ? '10px' : '14px'}} className="greenSleepButton" onClick={handleRestaurantClick}>Restaurant</button>
                    <p style={{marginTop: '5px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Money: -£30</p>
                    <p style={{marginTop: '-10px', fontSize: isMobile ? '10px' : '12px', color: 'white'}}>Food: +40</p>
                </div>
            </div>}


            <button onClick={handleEndDayClick} style={{
                marginTop: sleepExpanded || eatExpanded ? '1%' : '4%',
                fontFamily: "'Preahvihear', sans-serif",
                width: isMobile ? '30vw' : '10vw',
                height: isMobile ? '10vh' : '7vh',
                fontSize: '16px',
                fontWeight: 'bold',
                borderRadius: '10px',
                backgroundColor: 'rgb(220, 120, 120)',
                color: 'black',
                border: '3px inset rgb(160, 60, 60)'
                }}>End day</button>
        </div>}

        {dayEnded &&
        <div style={{color: 'white'}}>
            <p style={{fontSize: isMobile ? '10px' : '14px',}}>Your day is at an end.</p>
            <p style={{fontSize: isMobile ? '10px' : '14px',}}>You {sleepSummary} and {eatSummary}.</p>
            <p style={{fontSize: isMobile ? '10px' : '14px',}}>{healthSummary}</p>
            <p style={{fontSize: isMobile ? '10px' : '14px',}}>{foodSummary}</p>
            <button style={{width: isMobile ? '30vw' : '14vw', fontSize: isMobile ? '10px' : '16px'}} className="keyButtonsEvening" onClick={handleNextDayClick}>Next day</button>
        </div>}
        </div>
    );
    }