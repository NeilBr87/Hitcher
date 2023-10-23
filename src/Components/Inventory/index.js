import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function Inventory(props) {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const itemsPerRow = 5;

    const rows = [];
    for (let i = 0; i < props.inventory.length; i += itemsPerRow) {
        rows.push(props.inventory.slice(i, i + itemsPerRow));
    }

    return (
        <div style={{ position: 'absolute', top: '40vh', left: isMobile ? '10vw' : '30vw', width: isMobile ? '80vw' : '40vw', zIndex: '1', backgroundColor: 'rgb(40, 40, 70)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '20px', borderRadius: '5px', border: '3px groove rgb(10, 10, 40)' }}>
            <p style={{ fontSize: '14px', marginBottom: '5%' }}>Inventory</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center',}}>
                        {row.map((item, itemIndex) => (
                            <p key={itemIndex} style={{border: '1px solid white', width: '10vw', height: '5vh', marginTop: '-5%', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{item}</p>
                            
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
