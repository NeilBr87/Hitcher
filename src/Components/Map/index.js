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
            <img src={image} alt="UK" style={{width: '700px', height: '500px', borderRadius: '10px'}}/>
        </div>
    );
    }
