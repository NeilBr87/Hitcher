import React from 'react';
import Inventory from './Inventory.JPG'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Stats(props) {
  const clampedHealth = Math.min(props.health, 100);
  const clampedFood = Math.min(props.food, 100);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function openInventory() {
    if (props.setInventoryOpen) {
      props.setInventoryOpen((prevOpen) => !prevOpen); // Toggle the previous state
    }
  }

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
    <div>
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
            width: isMobile ? '80px' : '120px',
            height: isMobile ? '14px' : '19px',
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
            width: isMobile ? '80px' : '120px',
            height: isMobile ? '14px' : '19px',
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
            width: isMobile ? '80px' : '120px',
            height: isMobile ? '14px' : '19px',
          }}
        >
          £{props.money}
        </span>
      </div>
    </div>

      <div>
        <img onClick={openInventory} src={Inventory} alt="inventory" style={{width: isMobile? '8vw' : '3vw', marginBottom: isMobile ? '-4%' : '-1vh'}}></img>
        <p style={{fontSize: isMobile ? '8px' : '10px'}}>Inventory</p>
      </div>
    </div>
  );
}
