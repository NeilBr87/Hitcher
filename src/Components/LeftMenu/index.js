import { useState } from 'react';
import TownMenu from '../TownMenu';
import Rewards from '../Rewards';
import Map from '../Map';
import './style.css';

export default function LeftMenu() {
    const [currentTown, setCurrentTown] = useState('London');
    const [selection, setSelection] = useState('menu'); 
    const [health, setHealth] = useState(100);
    const [food, setFood] = useState(100);
    const [money, setMoney] = useState(1000);

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
        <div id="greaterContainer" style={{width: '58%', height: '520px', margin: '0 auto', marginTop: '6%', paddingTop: '20px', paddingRight: '10px', paddingLeft: '20px', paddingBottom: '20px', borderRadius: '5px'}}>
            
            <div style={{display: 'flex', flexDirection: 'row', gap: '4%'}}>
            
                <div style={{display: 'flex', flexDirection: 'column', width: '160px', backgroundColor: 'white', paddingLeft: '20px', borderRadius: '20px'}}>
                    <h3 style={{textAlign: 'left'}}>Menu</h3>
                    <h4 onClick={handleMenuClick} style={{textAlign: 'left'}}>Town Menu</h4>
                    <h4 onClick={handleMapClick} style={{textAlign: 'left'}}>Map</h4>
                    <h4 onClick={handleRewardClick} style={{textAlign: 'left'}}>Reward cities</h4>
                </div>
                
                <div>
                    {selection === 'menu' && <TownMenu currentTown={currentTown} setCurrentTown={setCurrentTown} health={health} setHealth={setHealth} food={food} setFood={setFood} money={money} setMoney={setMoney}/>}
                    {selection === 'map' && <Map currentTown={currentTown} />}
                    {selection === 'reward' && <Rewards />}
                </div>

            </div>

        </div>
    );
    }