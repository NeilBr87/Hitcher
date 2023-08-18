import React from 'react';
import { useState } from 'react';
import './style.css';

export default function ExploreMenu(props) {
    const [earnExpanded, setEarnExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [hospitalExpanded, setHospitalExpanded] = useState(false);
    // const [parcelSprintExpanded, setParcelSprintExpanded] = useState(false);
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
        props.setTime(props.time + 1);
    }

    function restaurantLunch() {
        setLunchExpanded(false);
        setHideMenu(false);
        props.setFood(props.food + 30);
        props.setMoney(props.money - 20);
        props.setTime(props.time + 1);
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

    return (
        <div>
            {!hideMenu && (
            <div>
                <p>You decide to explore {props.currentTown}.</p>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '18px', marginBottom: '2%'}}>
                    <button onClick={expandEarn} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(120, 180, 90)',
                        border: '4px groove rgb(60, 120, 60)',

                    }}>Earn money</button>
                    
                    <button onClick={lunch} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(180, 180, 90)',
                        border: '4px groove rgb(120, 120, 90)',
                    }}>Lunch</button>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '18px'}}>

                    <button onClick={hospital} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(120, 120, 240)',
                        border: '4px groove rgb(90, 90, 180)',
                    }}>Hospital</button>
                    <button className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(180, 90, 90)',
                        border: '4px groove rgb(120, 60, 60)',
                    }}>ParcelSprint</button>
                    </div>                
                    <button style={{marginTop: '5%'}}className="keyButtons" onClick={goBack}>Back</button>

            </div>)}
            {earnExpanded && (
            <div>
                <p>You decide to earn some money.</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw',}}>
                        <button onClick={askForChange} className="earnButtons" >Ask for change</button>
                        <p style={{marginBottom: '-1px', fontSize: '8px', width: '100px'}}>Rely on the kindness of strangers.</p>
                        <p style={{marginBottom: '-1px', fontSize: '8px', width: '100px'}}>Small gain, one hour, no health or food loss</p>

                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
                        <button onClick={browseJobMouse} className="earnButtons">Browse JobMouse</button>
                        <p style={{marginBottom: '-1px', fontSize: '8px', width: '100px'}}>Get a few hours' work from the JobMouse app</p>
                        <p style={{marginBottom: '-1px', fontSize: '8px', width: '100px'}}>Moderate gain, three hours, small food decrease</p>

                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '30vw'}}>
                        <button onClick={workForRainforest} className="earnButtons">Rainforest Fulfillment Centre</button>
                        <p style={{marginBottom: '-1px', fontSize: '8px', width: '100px'}}>Have a long day shipping packages for Rainforest</p>
                        <p style={{marginBottom: '-1px', fontSize: '8px', width: '100px'}}>Large gain, all day, moderate food decrease, small health decrease</p>
                    </div>    

                </div>

                <button style={{marginTop: '1%'}} className="keyButtons" onClick={closeEarn}>Back</button>
            </div>)}
            {earnSummary && (
                <div>
                    <p>{earnDesc}</p>
                    <p>You earned £{wages} in total.</p>
                    <p>{earnFoodDesc}</p>
                    <p>{earnHealthDesc}</p>
                    <button onClick={goBackAfterEarn} className="keyButtons">Back</button>
                </div>)}

            {lunchExpanded && (
                <div>

                    <p>You decide to have lunch.</p>
                    <p style={{width: '320px', margin: '0 auto', marginBottom: '2%'}}>Note: Lunch is optional in Hitcher. You'll only get a food penalty for missing dinner. But if you're already hungry, you can spend extra and eat lunch.</p>
                    <p style={{width: '320px', margin: '0 auto', marginBottom: '2%'}}>Eating lunch takes an hour. You'll take no extra time if you don't eat.</p>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px'}}>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button onClick={noLunch} className="sleepRoughButton" style={{fontSize: '9px', width: '26vw'}}>No lunch</button>
                            <p style={{marginTop: '5px', fontSize: '8px', width: '100px'}}>No money or food loss</p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button onClick={supermarketLunch} className="greenSleepButton" style={{fontSize: '9px', width: '26vw'}}>Supermarket food</button>
                            <p style={{marginTop: '5px', fontSize: '8px'}}>Money: -£10</p>
                            <p style={{marginTop: '-10px', fontSize: '8px'}}>Food: +10</p>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <button onClick={restaurantLunch} className="greenSleepButton" style={{fontSize: '9px', width: '26vw'}}>Restaurant</button>
                            <p style={{marginTop: '5px', fontSize: '8px'}}>Money: -£20</p>
                            <p style={{marginTop: '-10px', fontSize: '8px'}}>Food: +30</p>
                        </div>
                </div>

                </div>)}

                {hospitalExpanded && (
                    
                    <div>
                        <p>You decide to visit the hospital.</p>
                        <p>You have {props.health} health.</p>
                        <p>{healthMessage}</p>
                        {healthDiv && (
                            <div>
                                <p>Do you heal?</p>
                                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '30px'}}>
                                <button style={{
                                    border: '5px inset rgb(60, 160, 60)',
                                    backgroundColor: 'rgb(100, 200, 100)',
                                    fontFamily: 'courier, monospace',
                                    width: '70px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    borderRadius: '5px'
                                }} onClick={heal}>Yes</button>
                                <button onClick={closeHospital} style={{
                                    border: '5px inset rgb(160, 60, 60)',
                                    backgroundColor: 'rgb(200, 100, 100)',
                                    fontFamily: 'courier, monospace',
                                    width: '70px',
                                    height: '40px',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                    borderRadius: '5px'
                                }}>No</button>
                            </div>
                            </div>)}
                            <button onClick={closeHospital} className="keyButtons">Back</button>

                    </div>)}

        </div>
    );
}