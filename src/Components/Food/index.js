import React, { useEffect } from 'react';

export default function Food(props) {
let isEvening = false;

    useEffect(() => {
        if (props.evening) {
            isEvening = true;
        }
    }, [props.evening]);

    function handleGoHungryClick() {
        props.setEatingStatus("Going hungry");
        if (isEvening) {
            props.setStatusColorEat('green');
            props.setEatExpanded(false);
        }
        
        
    }

    function handleSupermarketClick() {
        props.setEatingStatus("Eating supermarket food");
        if (isEvening) {
            props.setStatusColorEat('green');
            props.setEatExpanded(false);
        }
    }

    function handleRestaurantClick() {
        props.setEatingStatus("Eating restaurant food");
        if (isEvening) {
            props.setStatusColorEat('green');
            props.setEatExpanded(false);
        }
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="sleepRoughButton" onClick={handleGoHungryClick}>Go hungry</button>
                    <p style={{marginTop: '5px', fontSize: '14px'}}>Money: No loss</p>
                    <p style={{marginTop: '-10px', fontSize: '14px'}}>Food: -20</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="greenSleepButton" onClick={handleSupermarketClick}>Supermarket food</button>
                    <p style={{marginTop: '5px', fontSize: '14px'}}>Money: -£10</p>
                    <p style={{marginTop: '-10px', fontSize: '14px'}}>Food: +10</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="greenSleepButton" onClick={handleRestaurantClick}>Restaurant</button>
                    <p style={{marginTop: '5px', fontSize: '14px'}}>Money: -£30</p>
                    <p style={{marginTop: '-10px', fontSize: '14px'}}>Food: +40</p>
                </div>
            </div>
    )
}