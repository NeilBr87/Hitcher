import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';
import Food from '../Food';

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
    const [eatSummary, setEatSummary] = useState('');
    const [foodSummary, setFoodSummary] = useState('');

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

    useEffect (() => {
    if (props.eatingStatus === "Eating supermarket food") {
        props.setFood(props.food + 10);
            setEatSummary("grabbed some food from the supermarket")
            if (props.food === 100) {
                setFoodSummary("Your food level is at max level.")
            }
            else {
                setFoodSummary("Your food level has gone up.")
            }
        }
        else if (props.eatingStatus === "Going hungry") {
            setHideMenu(false);
            setLunchExpanded(false);
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
    }, [props.eatingStatus]);

    return (
        <div>
            {!hideMenu && (
            <div>
                <p>You decide to explore {props.currentTown}.</p>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '18px'}}>
                    <button onClick={expandEarn} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(120, 180, 90)',
                        border: '5px inset rgb(60, 120, 60)',

                    }}>Earn money</button>
                    <button onClick={lunch} className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(180, 180, 90)',
                        border: '5px inset rgb(120, 120, 90)',
                    }}>Lunch</button>
                    <button className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(120, 120, 240)',
                        border: '5px inset rgb(90, 90, 180)',
                    }}>Hospital</button>
                    <button className="exploreKeyButtons" style={{
                        backgroundColor: 'rgb(180, 90, 90)',
                        border: '5px inset rgb(120, 60, 60)',
                    }}>ParcelSprint</button>
                </div>

                <button style={{marginTop: '5%'}}className="keyButtons" onClick={goBack}>Back</button>

            </div>)}
            {earnExpanded && (
            <div>
                <p>You decide to earn some money.</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', gap: '20px'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '170px'}}>
                        <button onClick={askForChange} className="earnButtons" >Ask for change</button>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Rely on the kindness of strangers.</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Money: Small gain</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Time: 1 hour</p>
                        <p style={{fontSize: '12px'}}>No effect on food or health</p>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '170px'}}>
                        <button onClick={browseJobMouse} className="earnButtons">Browse JobMouse</button>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Get a few hours' work from the JobMouse app</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Money: Moderate gain</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Time: 3 hours</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Small food decrease</p>
                        <p style={{fontSize: '12px'}}>No effect on health</p>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '170px'}}>
                        <button onClick={workForRainforest} className="earnButtons">Rainforest Fulfillment Centre</button>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Have a long day shipping packages for Rainforest</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Money: Large gain</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Time: All day</p>
                        <p style={{marginBottom: '-1px', fontSize: '12px'}}>Moderate food decrease</p>
                        <p style={{fontSize: '12px'}}>Small health decrease</p>
                    </div>    

                </div>

                <button style={{marginTop: '5%'}}className="keyButtons" onClick={closeEarn}>Back</button>
            </div>)}

            {lunchExpanded && (
                <div>
                    <p>You decide to get some lunch.</p>
                    <p>Note: You'll only get hungrier by skipping meals at night, or due to specific circumstances. But you can grab some lunch if your food levels are low.</p>
                    <p>What do you want to eat?</p>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
                    <Food setEatingStatus={props.setEatingStatus} setFood={props.setFood} food={props.food} />
                    </div>
                    </div>)}
                    
                    



            {earnSummary && (
                <div>
                    <p>{earnDesc}</p>
                    <p>You earned £{wages} in total.</p>
                    <p>{earnFoodDesc}</p>
                    <p>{earnHealthDesc}</p>
                    <button className="keyButtons" onClick={goBackAfterEarn}>Back</button>
                </div>)}


        </div>
    );
}