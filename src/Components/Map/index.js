import UK from './UK.JPG'
import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function Map(props) {
    const [image, setImage] = useState(UK);
      useEffect (() => {
        if (props.currentTown === 'London' || props.currentTown === 'Dover' || props.currentTown === 'Folkestone' || props.currentTown === 'Crawley' || props.currentTown === 'Maidstone' || props.currentTown === 'Winchester' || props.currentTown === 'Portsmouth' || props.currentTown === 'Newhaven') {
            setImage(UK);
        }
        else {
            setImage("");
        }
        }, [props.currentTown]);

    return (
        <div>
            <img src={image} alt="UK" style={{width: '320px', height: '250px', borderRadius: '10px', border: '4px dashed rgb(20, 120, 160)'}}/>
        </div>
    );
    }
