import {useState } from 'react';
import Stats from '../Stats';
import TownMenu from '../TownMenu';
import TownPicture from '../TownPicture';
import Map from '../Map';

export default function MobileUI(props) {
    const [currentTown, setCurrentTown] = useState('London');
    const [selection, setSelection] = useState('menu'); 
    const [health, setHealth] = useState(100);
    const [food, setFood] = useState(100);
    const [money, setMoney] = useState(1000);
    const [day, setDay] = useState(1)
    const [time, setTime] = useState(9)
    const [actualTown, setActualTown] = useState('')
    const [country, setCountry] = useState('UK')
    
    return (

        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 105)', color: 'white', width: '100%', overflow: 'hidden'}}>
            <h1 style={{marginBottom: '-2px'}}>Hitcher</h1>
            <Stats health={health} food={food} money={money} />
            <TownMenu country={country} setCountry={setCountry} setActualTown={setActualTown} day={day} setDay={setDay} time={time} setTime={setTime} currentTown={currentTown} setCurrentTown={setCurrentTown} health={health} setHealth={setHealth} food={food} setFood={setFood} money={money} setMoney={setMoney} />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '3%', marginTop: '5%', marginBottom: '5%',}}>
            <TownPicture actualTown={actualTown} currentTown={currentTown} className="townPicture" />
            <Map  actualTown={actualTown} country={country} setCountry={setCountry} />
            </div>
        </div>

    );

}