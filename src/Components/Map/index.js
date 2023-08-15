import UK from './UK.JPG'
import NorthernFrance from './NorthernFrance.JPG'
import React from 'react';
import { useState, useEffect } from 'react';
import './style.css';

export default function Map(props) {
    const [image, setImage] = useState(UK);
      useEffect (() => {
        if (props.actualTown === 'London' || props.actualTown === 'Dover' || props.actualTown === 'Folkestone' || props.actualTown === 'Crawley' || props.actualTown === 'Maidstone' || props.actualTown === 'Winchester' || props.actualTown === 'Portsmouth' || props.actualTown === 'Newhaven') {
            setImage(UK);
        }
        else if (props.actualTown === 'Calais' || props.actualTown === 'Lille' || props.actualTown === 'Amiens' || props.actualTown === 'Dieppe' || props.actualTown === 'Caen' || props.actualTown === 'Paris' || props.actualTown === 'Tours' || props.actualTown === 'Dijon' || props.actualTown === 'Orleans' || props.actualTown === 'Reims') {
            props.setCountry('France');
            setImage(NorthernFrance);
        }
        else {
            setImage(UK);
        }
        }, [props.actualTown, props]);

    return (
        <div>
            <img src={image} alt="UK" style={{width: '320px', height: '250px', borderRadius: '10px', border: '4px dashed rgb(20, 120, 160)'}}/>
        </div>
    );
    }
