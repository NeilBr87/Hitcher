import UK from './UK.JPG'
import React from 'react';
import { useState, useEffect } from 'react';

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
            <img src={image} alt="UK" style={{width: '300px', height: '200px', borderRadius: '5px'}}/>
        </div>
    );
    }
