import { useState } from 'react';
import TownMenu from '../TownMenu';
import Map from '../Map';
import './style.css';

export default function BookMenu(props) {
    const [currentTown, setCurrentTown] = useState('London');
    const [selection, setSelection] = useState('menu'); 
    const [health, setHealth] = useState(100);
    const [food, setFood] = useState(100);
    const [money, setMoney] = useState(1000);
    const [day, setDay] = useState(1)
    const [time, setTime] = useState(9)

    return (
        <div id="openBook">
            <TownMenu day={day} setDay={setDay} time={time} setTime={setTime} currentTown={currentTown} setCurrentTown={setCurrentTown} health={health} setHealth={setHealth} food={food} setFood={setFood} money={money} setMoney={setMoney}/>
            <Map  currentTown={currentTown}  />
        </div>

    );
}