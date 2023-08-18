import React from 'react';

export default function Stats(props) {
  const clampedHealth = Math.min(props.health, 100);
  const clampedFood = Math.min(props.food, 100);

  const statColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '-30px',
    marginBottom: '20px',
    marginLeft: '20px',
    marginRight: '20px',
    color: 'white'
  };

  return (
    <div
      id="statsBox"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

      }}
    >
      <div style={statColumnStyle}>
        <p style={{marginBottom: '10%'}}>Health</p>
        <div
          style={{
            width: '80px',
            height: '14px',
            border: '2px inset black',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              width: `${clampedHealth}%`,
              height: '100%',
              backgroundColor: 'rgb(190, 50, 50)',
              borderRadius: '20px',
            }}
          ></div>
        </div>
      </div>
      <div style={statColumnStyle}>
        <p style={{marginBottom: '10%'}}>Food</p>
        <div
          style={{
            width: '80px',
            height: '14px',
            border: '2px inset black',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              width: `${clampedFood}%`,
              height: '100%',
              backgroundColor: props.noFood ? 'null' : 'rgb(190, 190, 50)',
              borderRadius: '20px',
            }}
          ></div>
        </div>
      </div>
      <div style={statColumnStyle}>
        <p style={{marginBottom: '10%'}}>Money</p>
        <span
          style={{
            color: 'black',
            backgroundColor: 'rgb(70, 190, 70)',
            fontSize: '10px',
            borderRadius: '20px',
            border: '2px inset rgb(30, 100, 30)',
            width: '80px',
            height: '14px',
          }}
        >
          £{props.money}
        </span>
      </div>
    </div>
  );
}
