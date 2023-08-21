import React, { useState, useEffect } from 'react';

export default function Intro(props) {
    const [showPara1, setShowPara1] = useState(false);
    const [showPara2, setShowPara2] = useState(false);
    const [showPara3, setShowPara3] = useState(false);
    const [showPara4, setShowPara4] = useState(false);
    const [showPara5, setShowPara5] = useState(false);
    const [textPara1, setTextPara1] = useState('');
    const [textPara2, setTextPara2] = useState('');
    const [textPara3, setTextPara3] = useState('');
    const [textPara4, setTextPara4] = useState('');
    const [textPara5, setTextPara5] = useState('');

    useEffect(() => {
        const delay = 600;

        const timer1 = setTimeout(() => {
            setShowPara1(true);
        }, delay);

        const timer2 = setTimeout(() => {
            setShowPara2(true);
        }, delay * 6);

        const timer3 = setTimeout(() => {
            setShowPara3(true);
        }, delay * 12);

        const timer4 = setTimeout(() => {
            setShowPara4(true);
        }, delay * 18);

        const timer5 = setTimeout(() => {
            setShowPara5(true);
        }, delay * 24);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);

        };
    }, []);

    useEffect(() => {
        if (props.gameOverType === 'health') {
            setTextPara1('You have run out of health.');
            setTextPara2("You are in intensive care in a hospital. You're alive, but there's no way you can continue your journey.");
            setTextPara3("You T5CGZA R4KFZC call George and tell him the bad news. He's disappointed, but he tells you that once you've recovered, you're more than welcome to try again.");
            setTextPara4("Game Over");
            setTextPara5("");
            setShowPara5(false);
        }
    }, [props.gameOverType]);



    return (
        <div style={{display: 'flex', flexDirection: 'column', backgroundColor: 'rgb(30, 30, 65)', color: 'white', width: '100%', overflow: 'hidden', height: '100vh'}}>
        <div style={{ backgroundColor: 'black', color: 'white', height: '100vh' }}>
                {showPara1 && (
                    <p id="introPara1" className="introText">{textPara1}</p>
                )}
                {showPara2 && (
                    <p id="introPara2" className="introText">{textPara2}</p>
                )}
                {showPara3 && (
                    <p id="introPara3" className="introText">{textPara3}</p>
                )}
                {showPara4 && (
                    <p id="introPara4" className="introText">{textPara4}</p>
                )}
                {showPara5 && (
                    <p id="introPara5" className="introText">{textPara5}</p>
                )}
                
                
            </div>
        </div>
    )
}
