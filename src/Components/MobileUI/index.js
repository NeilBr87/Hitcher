import {useState, useEffect } from 'react';
import Stats from '../Stats';
import TownMenu from '../TownMenu';
import TownPicture from '../TownPicture';
import Map from '../Map';
import './style.css';
import GameOver from '../GameOver';

export default function MobileUI(props) {
    const [currentTown, setCurrentTown] = useState('London');
    const [health, setHealth] = useState(100);
    const [food, setFood] = useState(100);
    const [money, setMoney] = useState(1000);
    const [day, setDay] = useState(1)
    const [time, setTime] = useState(9)
    const [actualTown, setActualTown] = useState('')
    const [country, setCountry] = useState('UK')
    const [noFood, setNoFood] = useState(false)
    const [game, setGame] = useState(true)
    const [gameOverType, setGameOverType] = useState('')

    useEffect (() => {
        if (food <= 0) {
            setFood(0);
            setNoFood(true);
        }
        if (food > 0) {
            setNoFood(false);
        }
        if (food >= 100) {
            setFood(100);
        }
        if (health <= 0) {
            setHealth(0);
            setGameOverType('health');
            setGame(false);
        }
        if (health >= 100) {
            setHealth(100);
        }
        if (money <= 0) {
            setMoney(0);
        }
    ;}, [food, health, money]);
    
    return (

        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 65)', color: 'white', width: '100%', overflow: 'hidden', height: '100vh'}}>
            <h1 id="hitcher" style={{marginBottom: '-2px'}}>Hitcher</h1>
            <Stats health={health} food={food} money={money} noFood={noFood}/>
            {game && (
            <TownMenu setGameOverType={setGameOverType} country={country} setCountry={setCountry} setActualTown={setActualTown} day={day} setDay={setDay} time={time} setTime={setTime} currentTown={currentTown} setCurrentTown={setCurrentTown} health={health} setHealth={setHealth} food={food} setFood={setFood} money={money} setMoney={setMoney} noFood={noFood} setNoFood={setNoFood}/>
            )}
            {!game && (<GameOver gameOverType={gameOverType} />)}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3%', marginTop: '5%', marginBottom: '5%',}}>
            <TownPicture actualTown={actualTown} currentTown={currentTown} className="townPicture" />
            <Map  actualTown={actualTown} country={country} setCountry={setCountry} />
            </div>
        </div>

    );

}