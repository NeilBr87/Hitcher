import React from 'react';

export default function Stats(props) {
  const clampedHealth = Math.min(props.health, 100);
  const clampedFood = Math.min(props.food, 100);

  return (
    <div id="statsBox" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', width: '160px', height: '500px' }}>
      <h3>Stats</h3>
      <p style={{ marginBottom: '2px', fontWeight: 'bold' }}>Health</p>
      <div style={{ width: '140px', height: '16px', border: '2px inset black', borderRadius: '20px' }}>
        <div
          style={{
            width: `${clampedHealth}%`,
            height: '100%',
            backgroundColor: 'rgb(190, 50, 50)',
            borderRadius: '20px',
          }}
        ></div>
      </div>
      <p style={{ marginBottom: '2px', fontWeight: 'bold' }}>Food level</p>
      <div style={{ width: '140px', height: '16px', border: '2px inset black', borderRadius: '20px' }}>
        <div
          style={{
            width: `${clampedFood}%`,
            height: '100%',
            backgroundColor: 'rgb(190, 190, 50)',
            borderRadius: '20px',
          }}
        ></div>
      </div>
      <p style={{ marginBottom: '3px', fontWeight: 'bold' }}>Money</p>
      <span style={{ fontWeight: 'bold', color: 'black', backgroundColor: 'rgb(70, 190, 70)', padding: '6px', fontSize: '14px', borderRadius: '5px', border: '3px groove rgb(30, 100, 30)' }}>
        £{props.money}
      </span>
    </div>
  );
}
