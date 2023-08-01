import {useState } from 'react';

export default function Stats(props) {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>Stats</h3>
        <p style={{marginBottom: '2px', fontweight: 'bold'}}>Health</p>
        <div style={{ width: '200px', height: '16px', border: '2px inset black', borderRadius: '20px' }}>
          <div
            style={{
              width: `${props.health}%`,
              height: '100%',
              backgroundColor: 'rgb(190, 50, 50)',
              borderRadius: '20px',
            }}
          ></div>
        </div>
        <p style={{marginBottom: '2px', fontweight: 'bold'}}>Food level</p>
        <div style={{ width: '200px', height: '16px', border: '2px inset black', borderRadius: '20px' }}>
          <div
            style={{
              width: `${props.food}%`,
              height: '100%',
              backgroundColor: 'rgb(190, 190, 50)',
              borderRadius: '20px',
            }}
          ></div>
        </div>
        <p style={{marginBottom: '3px', fontweight: 'bold'}}>Money</p>
        <span style={{fontWeight: 'bold', backgroundColor: 'rgb(70, 190, 70)', padding: '8px', fontSize: '14px', borderRadius: '10px'}}>£{props.money}</span>
      </div>
    );
    }
