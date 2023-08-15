import { useState } from 'react';
import TownMenu from '../TownMenu';
import Rewards from '../Rewards';
import Map from '../Map';
import './style.css';
import Stats from '../Stats';
import TownPicture from '../TownPicture';


export default function LeftMenu() {
    const [currentTown, setCurrentTown] = useState('London');
    const [selection, setSelection] = useState('menu'); 
    const [health, setHealth] = useState(100);
    const [food, setFood] = useState(100);
    const [money, setMoney] = useState(1000);
    const [day, setDay] = useState(1)
    const [time, setTime] = useState(9)
    const [actualTown, setActualTown] = useState('')
    const [country, setCountry] = useState('UK')

    function handleMenuClick() {
        setSelection('menu');
    }

    function handleMapClick() {
        setSelection('map');
    }

    function handleRewardClick() {
        setSelection('reward');
    }

    return (
        <div className="greaterContainer" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', width: '1076px', margin: '0 auto', marginTop: '2%', paddingTop: '20px', paddingRight: '10px', paddingLeft: '20px', paddingBottom: '20px', borderRadius: '10px', fontFamily: 'Courier, monospace', color: '#d4e1f1' }}>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div id="leftBox" style={{ display: 'flex', flexDirection: 'column', width: '160px', paddingLeft: '20px'}}>
          <h3 style={{ textAlign: 'left', fontSize: '24px', fontWeight: 'bold', color: '#f39c12', marginTop: '10px' }}>Explore</h3>
          <h4 onClick={handleMenuClick} style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', color: '#d4e1f1', cursor: 'pointer', marginBottom: '8px', paddingBottom: '6px' }}>Town Menu</h4>
          <h4 onClick={handleMapClick} style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', color: '#d4e1f1', cursor: 'pointer', marginBottom: '8px', paddingBottom: '6px' }}>Map</h4>
          <h4 onClick={handleRewardClick} style={{ textAlign: 'left', fontSize: '18px', fontWeight: 'bold', color: '#d4e1f1', cursor: 'pointer', marginBottom: '8px', paddingBottom: '6px' }}>Reward Cities</h4>
        </div>

        <div>
            <Stats health={health} food={food} money={money} />
        </div>

        <div>
          {selection === 'menu' && <TownMenu country={country} setCountry={setCountry} setActualTown={setActualTown} day={day} setDay={setDay} time={time} setTime={setTime} currentTown={currentTown} setCurrentTown={setCurrentTown} health={health} setHealth={setHealth} food={food} setFood={setFood} money={money} setMoney={setMoney} />}
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
        <div>
          <h3 style={{marginBottom: '5px'}}>Town view</h3>
        <TownPicture actualTown={actualTown} currentTown={currentTown} className="townPicture" />
        </div>
        <div>
        <h3 style={{marginBottom: '5px'}}>Map view</h3>
        <Map  actualTown={actualTown} country={country} setCountry={setCountry} />
        </div>
        <div>
        <h3 style={{marginBottom: '5px'}}>End destinations</h3>
        <Rewards />
        </div>
        
        
      </div>
    </div>
    );
    }