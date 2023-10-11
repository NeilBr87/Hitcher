import React from 'react';
import { useState } from 'react';
import './style.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function ExploreMenu(props) {
    const [earnExpanded, setEarnExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [hospitalExpanded, setHospitalExpanded] = useState(false);
    const [parcelSprintExpanded, setParcelSprintExpanded] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);
    const [earnSummary, setEarnSummary] = useState(false);
    const [earnDesc, setEarnDesc] = useState('');
    const [wages, setWages] = useState(0);
    const [earnFoodDesc, setEarnFoodDesc] = useState('');
    const [earnHealthDesc, setEarnHealthDesc] = useState('');
    const [chosenJob, setChosenJob] = useState('');
    const [healthMessage, setHealthMessage] = useState('');
    const [healthDiv, setHealthDiv] = useState(false);
    const [healthCost, setHealthCost] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    function goBack() {
        props.setExploring(false);
    }

    function expandEarn() {
        setHideMenu(true);
        setEarnExpanded(true);
    }

    function closeEarn() {
        setEarnExpanded(false);
        setHideMenu(false);
    }

    function askForChange() {
        setChosenJob("askForChange");
        const randomWages = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        setWages(randomWages);
        props.setMoney(props.money + randomWages);
        setEarnExpanded(false);
        setEarnDesc("You spend an hour asking for change in town.")
        setEarnFoodDesc("It had no effect on your appetite.")
        setEarnHealthDesc("It had no effect on your health.")
        setEarnSummary(true);
        props.setTime(props.time + 1);
    }

    function browseJobMouse() {
        setChosenJob("browseJobMouse");
        const randomWages = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        setWages(randomWages);
        props.setMoney(props.money + randomWages);
        const randomFood = Math.floor(Math.random() * (15 - 2 + 1)) + 2;
        props.setFood(props.food - randomFood);
        setEarnExpanded(false);
        setEarnDesc("You spend three hours working for someone you found on JobMouse.")
        setEarnFoodDesc("It made you a little hungry.")
        setEarnHealthDesc("It had no effect on your health.")
        setEarnSummary(true);
        props.setTime(props.time + 3);

    }

    function workForRainforest() {
        setChosenJob("workForRainforest");
        const randomWages = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
        setWages(randomWages);
        props.setMoney(props.money + randomWages);
        const randomFood = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
        props.setFood(props.food - randomFood);
        const randomHealth = Math.floor(Math.random() * (12 - 5 + 1)) + 5;
        props.setHealth(props.health - randomHealth);
        setEarnExpanded(false);
        setEarnSummary(true);
        setEarnDesc("You spend the whole day working at the Rainforest Fulfillment Centre.")
        setEarnFoodDesc("It made you quite hungry.")
        setEarnHealthDesc("It made you a little sore and tired.")
        props.setTime(17);
    }

    function goBackAfterEarn() {
        setEarnSummary(false);
        setHideMenu(false);
        if (chosenJob === "workForRainforest") {
            props.setTime(20);
        }
    }

    function lunch() {
        setHideMenu(true);
        setLunchExpanded(true);
    }

    function noLunch() {
        setLunchExpanded(false);
        setHideMenu(false);
    }  

    function supermarketLunch() {
        setLunchExpanded(false);
        setHideMenu(false);
        props.setFood(props.food + 10);
        props.setMoney(props.money - 10);
        props.setTime(props.time + 2);
    }

    function restaurantLunch() {
        setLunchExpanded(false);
        setHideMenu(false);
        props.setFood(props.food + 30);
        props.setMoney(props.money - 20);
        props.setTime(props.time + 2);
    }

    function hospital() {
        setHideMenu(true);
        setHospitalExpanded(true);
        if (props.health === 100) {
            setHealthMessage("You're already at full health and don't need the hospital.");
        } else {
            const newHealthCost = 100 - props.health;
            setHealthCost(newHealthCost);
            setHealthMessage(`It will cost you £${newHealthCost} to get back to full health.`);
            setHealthDiv(true);
        }
    }
    function heal() {
        props.setHealth(100);
        props.setMoney(props.money - healthCost);
        setHealthDiv(false);
        setHospitalExpanded(false);
        setHideMenu(false);
    }

    function closeHospital() {
        setHealthDiv(false);
        setHospitalExpanded(false);
        setHideMenu(false);
    }

    function closeParcelSprint() {
        setParcelSprintExpanded(false);
        setHideMenu(false);
    }

    function parcelSprint() {
        setHideMenu(true);
        setParcelSprintExpanded(true);
    }


    return (
        <div>
            {!hideMenu && (
            <div>
                <p style={{fontSize: isMobile ? '10px' : '14px'}}>You decide to explore {props.currentTown}.</p>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '18px', marginBottom: '2%'}}>
                    <button onClick={expandEarn} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(120, 180, 90)',
                        border: '4px groove rgb(60, 120, 60)',
                        width: isMobile ? '130px' : '9vw',
                        height: isMobile ? '40px' : '5vh',

                    }}>Earn money</button>
                    
                    <button onClick={lunch} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(180, 180, 90)',
                        border: '4px groove rgb(120, 120, 90)',
                        width: isMobile ? '130px' : '9vw',
                        height: isMobile ? '40px' : '5vh',
                    }}>Lunch</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '18px'}}>

                    <button onClick={hospital} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(120, 120, 240)',
                        border: '4px groove rgb(90, 90, 180)',
                        width: isMobile ? '130px' : '9vw',
                        height: isMobile ? '40px' : '5vh',
                    }}>Hospital</button>
                    <button onClick={parcelSprint} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(180, 90, 90)',
                        border: '4px groove rgb(120, 60, 60)',
                        width: isMobile ? '130px' : '9vw',
                        height: isMobile ? '40px' : '5vh',
                    }}>ParcelSprint</button>
                    </div>                
                    <button style={{marginTop: '5%', width: isMobile ? '26vw' : '10vw'}}className="keyButtons" onClick={goBack}>Back</button>

            </div>)}
            {earnExpanded && (
            <div>
                <p style={{fontSize: isMobile ? '10px' : '14px'}}>You decide to earn some money.</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: isMobile ? '30vw' : '14vw',}}>
                        <button style={{width: isMobile ? '26vw' : '11vw', height: isMobile ? '8vh' : '7vh', fontSize: isMobile ? '10px' : '14px'}} onClick={askForChange} className="earnButtons" >Ask for change</button>
                        <p style={{marginBottom: '-1px', fontSize: isMobile ? '8px' : '12px', width: isMobile ? '100px' : '12vw'}}>Rely on the kindness of strangers.</p>
                        <p style={{marginBottom: '-1px', fontSize: isMobile ? '8px' : '12px', width: isMobile ? '100px' : '12vw'}}>Small gain, one hour, no health or food loss</p>

                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: isMobile ? '30vw' : '14vw'}}>
                        <button style={{width: isMobile ? '26vw' : '11vw', height: isMobile ? '8vh' : '7vh', fontSize: isMobile ? '10px' : '14px'}} onClick={browseJobMouse} className="earnButtons">Browse JobMouse</button>
                        <p style={{marginBottom: '-1px', fontSize: isMobile ? '8px' : '12px', width: isMobile ? '100px' : '12vw'}}>Get a few hours' work from the JobMouse app</p>
                        <p style={{marginBottom: '-1px', fontSize: isMobile ? '8px' : '12px', width: isMobile ? '100px' : '12vw'}}>Moderate gain, three hours, small food decrease</p>

                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: isMobile ? '30vw' : '14vw'}}>
                        <button  style={{width: isMobile ? '26vw' : '11vw', height: isMobile ? '8vh' : '7vh', fontSize: isMobile ? '10px' : '14px'}} onClick={workForRainforest} className="earnButtons">Rainforest Fulfillment Centre</button>
                        <p style={{marginBottom: '-1px', fontSize: isMobile ? '8px' : '12px', width: isMobile ? '100px' : '12vw'}}>Have a long day shipping packages for Rainforest</p>
                        <p style={{marginBottom: '-1px', fontSize: isMobile ? '8px' : '12px', width: isMobile ? '100px' : '12vw'}}>Large gain, all day, moderate food decrease, small health decrease</p>
                    </div>    

                </div>

                <button style={{marginTop: isMobile ? '-1%' : '4vh', width: isMobile ? '26vw' : '12vw'}} className="keyButtons" onClick={closeEarn}>Back</button>
            </div>)}
            {earnSummary && (
                <div>
                    <p style={{fontSize: isMobile ? '8px' : '14px', width: isMobile ? '100px' : '50vw'}}>{earnDesc}</p>
                    <p style={{fontSize: isMobile ? '8px' : '14px', width: isMobile ? '100px' : '50vw'}}>You earned £{wages} in total.</p>
                    <p style={{fontSize: isMobile ? '8px' : '14px', width: isMobile ? '100px' : '50vw'}}>{earnFoodDesc}</p>
                    <p style={{fontSize: isMobile ? '8px' : '14px', width: isMobile ? '100px' : '50vw'}}>{earnHealthDesc}</p>
                    <button onClick={goBackAfterEarn} className="keyButtons" style={{width: isMobile ? '26vw' : '9vw'}}>Back</button>
                </div>)}

            {lunchExpanded && (
                <div>
 
                    <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>You decide to have lunch.</p>
                    <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>Note: Lunch is optional in Hitcher. You'll only get a food penalty for missing dinner. But if you're already hungry, you can spend extra and eat lunch.</p>
                    <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: isMobile ? '2%' : '4%', fontSize: isMobile ? '10px' : '14px'}}>Eating lunch takes an hour. You'll take no extra time if you don't eat.</p>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: isMobile ? '10px' : '3vw'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button onClick={noLunch} className="sleepRoughButton"style={{width: isMobile ? '26vw' : '9vw', height: isMobile ? '8vh' : '6vh', fontSize: isMobile ? '10px' : '14px'}}>No lunch</button>
                            <p style={{marginTop: '5px', fontSize: isMobile ? '8px' : '12px'}}>No money or food loss</p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button onClick={supermarketLunch} className="greenSleepButton" style={{width: isMobile ? '26vw' : '9vw', height: isMobile ? '8vh' : '6vh', fontSize: isMobile ? '10px' : '14px'}}>Supermarket food</button>
                            <p style={{marginTop: '5px', fontSize: isMobile ? '8px' : '12px'}}>Money: -£10</p>
                            <p style={{marginTop: isMobile ? '-10px' : '-14px', fontSize: isMobile ? '8px' : '12px'}}>Food: +10</p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button onClick={restaurantLunch} className="greenSleepButton" style={{width: isMobile ? '26vw' : '9vw', height: isMobile ? '8vh' : '6vh', fontSize: isMobile ? '10px' : '14px'}}>Restaurant</button>
                            <p style={{marginTop: '5px', fontSize: isMobile ? '8px' : '12px'}}>Money: -£20</p>
                            <p style={{marginTop: isMobile ? '-10px' : '-14px', fontSize: isMobile ? '8px' : '12px'}}>Food: +30</p>
                        </div>
                </div>

                </div>)}

                {hospitalExpanded && (
                    
                    <div>
                        <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>You decide to visit the hospital.</p>
                        <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>You have {props.health} health.</p>
                        <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>{healthMessage}</p>
                        {healthDiv && (
                            <div>
                                <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>Do you heal?</p>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                                <button style={{
            width: isMobile ? '20vw' : '10vw',
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
            }}onClick={heal}>Yes</button>
                                <button onClick={closeHospital} style={{
            width: isMobile ? '20vw' : '10vw',
            height: '4vh',
            fontSize: '16px',
            fontWeight: 'bold',
            fontFamily: "'Preahvihear', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: "4px groove rgb(180, 50, 50)",
            backgroundColor: 'rgb(210, 80, 80)',
            borderRadius: '10px',
            color: 'black', }}>No</button>
                            </div>
                            </div>)}
                            <button onClick={closeHospital} style={{marginTop: '4%', width: isMobile ? '20vw' : '10vw',}} className="keyButtons">Back</button>

                    </div>)}
  
            {parcelSprintExpanded && (
                <div>
                    <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>You go into the local branch of ParcelSprint, the company that hires freelance couriers.</p>
                    <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>It's an efficient way to make money as you explore.</p>
                    <p style={{width: isMobile ? '320px' : '30vw', margin: '0 auto', marginBottom: '2%', fontSize: isMobile ? '10px' : '14px'}}>There's an assistant at the counter. "I'm sorry," he says. "We're currently being set up. Look out for us next update...I mean month."</p>
                    <button onClick={closeParcelSprint} style={{marginTop: '4%', width: isMobile ? '20vw' : '10vw',}} className="keyButtons">Back</button>
                </div>)}

        </div>
    );
}